import { JwtService } from '@nestjs/jwt';
import type { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

export const generateToken = (jwtService: JwtService, user: any): { accessToken: string } => {
  const payload: JwtPayload = {
    sub: user.id,
    email: user.email,
    role: user.role,
  };

  return {
    accessToken: jwtService.sign(payload),
  };
};
