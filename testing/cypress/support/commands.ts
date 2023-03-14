
import 'cypress-keycloak';

Cypress.Commands.overwrite('login', (originalFn) => {
  originalFn({
    root: Cypress.env("authUrl"),
    realm: Cypress.env("authRealm"),
    username: Cypress.env("username"),
    password: Cypress.env("password"),
    client_id: Cypress.env("authClientId"),
    redirect_uri: Cypress.env("host"),
  })
})

Cypress.Commands.overwrite('logout', (originalFn) => {
  originalFn({
    root: Cypress.env("authUrl"),
    realm: Cypress.env("authRealm"),
    redirect_uri: Cypress.env("host"),
  })
})