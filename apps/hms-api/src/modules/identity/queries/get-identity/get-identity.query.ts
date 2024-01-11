export class GetIdentityQuery {
  constructor(readonly sub: string, readonly identity_provider: string) {}
}
