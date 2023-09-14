// Importing necessary modules and classes for our test suite.
import { Reflector } from '@nestjs/core';
import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard as RealAuthGuard } from './auth.guard';

// We need to mock the original AuthGuard from '@nestjs/passport' because we're extending it
// in our RealAuthGuard. This mock ensures that we don't use the real AuthGuard functionality
// but a stubbed version for our tests. This is essential because the real AuthGuard from @nestjs/passport
// performs actual authentication, and we don't want that in our tests.
jest.mock('@nestjs/passport', () => {
  // This function will be used as a mock to replace the real `canActivate` function of the AuthGuard.
  const mockCanActivate = jest.fn();

  // Mock implementation of AuthGuard. It only contains the `canActivate` function.
  class MockAuthGuard {
    canActivate() {
      return mockCanActivate();
    }
  }

  // The mock module exposes a factory function for MockAuthGuard and the `mockCanActivate` function.
  // This is done so that we can manipulate the behavior of `canActivate` from our test cases.
  return {
    AuthGuard: jest.fn(() => MockAuthGuard),
    mockCanActivate,
  };
});

// Since we've exposed `mockCanActivate` in our mocked module, we require it here for use in our tests.
const { mockCanActivate } = jest.requireMock('@nestjs/passport');

// Utility function that helps us create a mocked version of GqlExecutionContext.
// The function accepts partial data (overriddenValues) which will be merged
// with any default mock values, allowing for customization per-test.
function mockGqlExecutionContext(overriddenValues: Partial<GqlExecutionContext> = {}): GqlExecutionContext {
  return {
    ...overriddenValues,
  } as any;
}

// Main test suite for the 'RealAuthGuard' class.
describe('AuthGuard', () => {
  let guard: RealAuthGuard;
  let reflector: Reflector;
  let context: ExecutionContext;
  let gqlMockedContext;

  // After each test, we want to clean up our mocks to ensure that state
  // from one test doesn't accidentally leak into another.
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Before each test, we set up our mocks and initial state.
  beforeEach(() => {
    reflector = new Reflector(); // Create a new instance of Reflector.
    guard = new RealAuthGuard(reflector); // Create an instance of our actual AuthGuard.

    // Mocking the ExecutionContext which will be passed to `canActivate`.
    context = {
      switchToHttp: jest.fn().mockReturnValue({
        getResponse: jest.fn(),
        getRequest: jest.fn(),
      }),
      getHandler: jest.fn(),
      getClass: jest.fn(),
      switchToWs: jest.fn(),
      switchToRpc: jest.fn(),
      getType: jest.fn(),
      getArgs: jest.fn(),
    } as any;

    // Mocking a GraphQL context. This is used internally by our guard
    // to extract the user from the request.
    const mockReq = { user: {} };
    gqlMockedContext = mockGqlExecutionContext({
      getContext: jest.fn().mockReturnValue({ req: mockReq }),
    });

    // When our guard calls `GqlExecutionContext.create`, we want to return our mocked version.
    jest.spyOn(GqlExecutionContext, 'create').mockReturnValue(gqlMockedContext);
  });

  // Sub-suite to test the 'canActivate' method of our AuthGuard.
  describe('canActivate', () => {
    it('should call super.canActivate if the route is not public', async () => {
      // Assume the route is not public by mocking the return value of the reflector's `get` method.
      jest.spyOn(reflector, 'get').mockReturnValue(false);

      // Assume the original AuthGuard (which we've extended) allows the request.
      mockCanActivate.mockReturnValueOnce(true);

      const result = await guard.canActivate(context);

      // Check that our guard has allowed the request and called the original `canActivate`.
      expect(result).toBeTruthy();
      expect(mockCanActivate).toHaveBeenCalled();
    });

    it('should return true if the route is public', async () => {
      // Assume the route is public by mocking the return value of the reflector's `get` method.
      jest.spyOn(reflector, 'get').mockReturnValue(true);

      const result = await guard.canActivate(context);

      // Check that our guard has allowed the request without calling the original `canActivate`.
      expect(result).toBeTruthy();
      expect(mockCanActivate).not.toHaveBeenCalled();
    });
  });

  describe('getRequest', () => {
    it('should extract and return the request from the GraphQL context', () => {
      const mockReq = { user: {}, someOtherProp: 'value' }; // You can add any mock data here.

      // Set up our mock GqlExecutionContext to return the mockReq when `getContext` is called.
      gqlMockedContext = mockGqlExecutionContext({
        getContext: jest.fn().mockReturnValue({ req: mockReq }),
      });
      jest.spyOn(GqlExecutionContext, 'create').mockReturnValue(gqlMockedContext);

      // Call the getRequest method with our mocked ExecutionContext.
      const result = guard.getRequest(context);

      // Verify that the returned request matches our mockReq.
      expect(result).toEqual(mockReq);
    });
  });
});
