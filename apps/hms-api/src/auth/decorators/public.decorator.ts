import { SetMetadata } from '@nestjs/common';

export const PUBLIC_DECORATOR = 'public';

export const Public = () => SetMetadata(PUBLIC_DECORATOR, true);
