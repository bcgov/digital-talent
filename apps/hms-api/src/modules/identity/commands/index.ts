import { CreateIdentityHandler } from './create-identity/create-identity.handler';
import { DeleteIdentityHandler } from './delete-identity/delete-identity.handler';

export const IdentityCommandHandlers = [CreateIdentityHandler, DeleteIdentityHandler];
