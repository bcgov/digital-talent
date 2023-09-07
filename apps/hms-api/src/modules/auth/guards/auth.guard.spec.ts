// import { Reflector } from '@nestjs/core';
// import { ExecutionContext } from '@nestjs/common';
// import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';
// import { GqlExecutionContext } from '@nestjs/graphql';
// import { AuthGuard } from './auth.guard';

// describe('AuthGuard', () => {
//   let guard: AuthGuard;
//   let reflector: Reflector;
//   let context: ExecutionContext;
//   let mockAuthGuardInstance: any;

//   beforeEach(() => {
//     reflector = new Reflector();
//     guard = new AuthGuard(reflector);

//     // Mock the ExecutionContext object. Extend this as needed.
//     context = {
//       switchToHttp: jest.fn().mockReturnThis(),
//       getHandler: jest.fn(),
//       getClass: jest.fn(),
//       switchToWs: jest.fn(),
//       switchToRpc: jest.fn(),
//       getType: jest.fn(),
//       getArgs: jest.fn(),
//     } as any;

//     const mockAuthGuardInstance = {
//       canActivate: jest.fn(),
//     };
//     jest.mock('@nestjs/passport', () => ({
//       AuthGuard: jest.fn().mockImplementation((strategy) => {
//         if (strategy === 'keycloak') {
//           return mockAuthGuardInstance;
//         }
//       }),
//     }));
//   });

//   describe('canActivate', () => {
//     it('should call super.canActivate if the route is not public', () => {
//       jest.spyOn(reflector, 'get').mockReturnValue(false);

//       // Spy on the mock instance's canActivate method
//       const canActivateSpy = jest.spyOn(mockAuthGuardInstance, 'canActivate').mockReturnValue(true);

//       expect(guard.canActivate(context)).toBe(true);
//       expect(canActivateSpy).toHaveBeenCalledWith(context);

//       canActivateSpy.mockRestore();
//     });
// });

//   describe('getRequest', () => {
//     it('should extract request from the GQL context', () => {
//       const mockReq = { user: {} };
//       jest.spyOn(GqlExecutionContext, 'create').mockReturnValue({
//         getContext: jest.fn().mockReturnValue({ req: mockReq }),
//       } as any);

//       expect(guard.getRequest(context)).toBe(mockReq);
//     });
//   });
// });
