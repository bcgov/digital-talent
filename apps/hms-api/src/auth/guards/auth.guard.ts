import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';

export class AuthGuard extends PassportAuthGuard(['keycloak']) {}
