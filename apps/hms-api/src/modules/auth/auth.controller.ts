import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PublicRoute } from './decorators/public-route.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @PublicRoute()
  @Post('verify')
  async verifyToken(@Body('code') code: string) {
    try {
      const { accessToken, payload } = await this.authService.verifyToken(code);
      const user = await this.authService.getUserFromPayload(payload);
      return { accessToken, user };
    } catch (err) {
      // Handle error, for instance:
      return {
        success: false,
        message: 'Token verification failed',
      };
    }
  }
}
