// Importing necessary modules and classes for our test suite.
import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { RoleGuard } from './role.guard';

// We are mocking the original AuthGuard from '@nestjs/passport' as our `RoleGuard` extends it.
jest.mock('@nestjs/passport', () => {
  // This is a mock for the base AuthGuard, it has an empty `canActivate` function.
  class MockAuthGuard {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    canActivate() {}
  }

  // We return a factory function for the MockAuthGuard.
  return {
    AuthGuard: jest.fn(() => MockAuthGuard),
  };
});

// Utility function to create a mocked version of GqlExecutionContext.
// It allows for customization by merging overriddenValues with default mock values.
function mockGqlExecutionContext(overriddenValues: Partial<GqlExecutionContext> = {}): GqlExecutionContext {
  return {
    ...overriddenValues,
  } as any;
}

// Main test suite for the 'RoleGuard' class.
describe('RoleGuard', () => {
  let guard: RoleGuard;
  let reflector: Reflector;
  let context: ExecutionContext;
  let gqlMockedContext;

  // After each test, we reset the mocks to avoid state leakage between tests.
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Before each test, we set up our mocks and initial states.
  beforeEach(() => {
    reflector = new Reflector(); // Create a new instance of Reflector.
    guard = new RoleGuard(reflector); // Create an instance of our RoleGuard.

    // Mocking the ExecutionContext which will be passed to `canActivate`.
    context = {
      getHandler: jest.fn(),
    } as any;

    // Mocking the GraphQL context for our guard to extract the user from the request.
    jest.spyOn(GqlExecutionContext, 'create').mockReturnValue(gqlMockedContext);
  });

  // Sub-suite to test the 'canActivate' method of our RoleGuard.
  describe('canActivate', () => {
    it('should return true if there are no roles defined in the reflector', () => {
      // Mock the reflector to return no roles.
      jest.spyOn(reflector, 'get').mockReturnValue(null);

      const result = guard.canActivate(context);

      // If no roles are defined, the guard should always return true.
      expect(result).toBeTruthy();
    });

    it('should return true if user has required roles', () => {
      // Mock the reflector to require the 'admin' role.
      jest.spyOn(reflector, 'get').mockReturnValue(['admin']);

      // Mock request with a user having 'admin' and 'user' roles.
      const mockReq = { user: { roles: ['admin', 'user'] } };
      gqlMockedContext = mockGqlExecutionContext({
        getContext: jest.fn().mockReturnValue({ req: mockReq }),
      });
      jest.spyOn(GqlExecutionContext, 'create').mockReturnValue(gqlMockedContext);

      const result = guard.canActivate(context);

      // Since the user has the required 'admin' role, the guard should return true.
      expect(result).toBeTruthy();
    });

    it('should return false if user does not have required roles', () => {
      // Mock the reflector to require the 'superadmin' role.
      jest.spyOn(reflector, 'get').mockReturnValue(['superadmin']);

      // Mock request with a user having 'admin' and 'user' roles.
      const mockReq = { user: { roles: ['admin', 'user'] } };
      gqlMockedContext = mockGqlExecutionContext({
        getContext: jest.fn().mockReturnValue({ req: mockReq }),
      });
      jest.spyOn(GqlExecutionContext, 'create').mockReturnValue(gqlMockedContext);

      const result = guard.canActivate(context);

      // The user doesn't have the 'superadmin' role, so the guard should return false.
      expect(result).toBeFalsy();
    });
  });
});
