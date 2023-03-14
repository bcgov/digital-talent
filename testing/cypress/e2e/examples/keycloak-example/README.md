# Using Keycloak in Cypress

To use Keycloak in Cypress, we'll use: https://www.npmjs.com/package/cypress-keycloak, this package is installed with the --force option to avoid issues when you install a newer Cypress version. This is recommended by the author as he sometime lags adding the new version to the list of compatible versions.

The example here solely focuses on logging in (and out) on the BCGOV keycloak instances.
This method is used to avoid create UI test scripts that log in through the web interface. Such a method is one of Cypress' documented anti-patterns. See [here](https://docs.cypress.io/guides/references/best-practices#Organizing-Tests-Logging-In-Controlling-State).

The keycloak pack does allow for other functionality to be used, but that is not addressed here. See the [github repo](https://github.com/babangsund/cypress-keycloak) for more info.

## Environment variables

The example code uses the following environment variables:

- username - User ID
- password - Password
- host - The application that needs authentication, also the return url after logout
- authRealm - Keycloak realm
- authClientId - Keycloak Client ID
- authUrl - The keycloak instance URL

For local running we would implement a `cypress.env.json` file in the root of your testing directory.
**Example**

```json
{
  "username": "cypress@idir",
  "password": "<password>",
  "host": "https://dev-biohubbc.apps.silver.devops.gov.bc.ca",
  "authRealm": "35r1iman",
  "authClientId": "biohubbc",
  "authUrl": "https://dev.oidc.gov.bc.ca"
}
```

A sample template `sample.cypress.env.json` is provided.

These environment variables can also be set up for running in GitHub Actions. See the documentation on the GitHub Action implementation [here](https://github.com/bcgov/automated-testing/blob/main/.github/workflows/README.md)
Please note the environment names that Cypress requires in a Github Action.

## Usage

During the install with `install.sh`, the `commands.js` (found in the cypress/support directory file was changed to include 2 overwrites of the login and logout function that are part of the cypress-keycloak package.

```javascript
import "cypress-keycloak";

Cypress.Commands.overwrite("login", (originalFn) => {
  originalFn({
    root: Cypress.env("authUrl"),
    realm: Cypress.env("authRealm"),
    username: Cypress.env("username"),
    password: Cypress.env("password"),
    client_id: Cypress.env("authClientId"),
    redirect_uri: Cypress.env("host"),
  });
});

Cypress.Commands.overwrite("logout", (originalFn) => {
  originalFn({
    root: Cypress.env("authUrl"),
    realm: Cypress.env("authRealm"),
    redirect_uri: Cypress.env("host"),
  });
});
```

These functions now use the environment variables we have set up earlier, and can be simply called in the test code (see the keycloak-example code included):

```javascript
describe('Keycloak Example', () => {
  beforeEach(() => {
    cy.logout();
    cy.login();
  });
  afterEach(() => {
    cy.logout();
  });
```

If implemented as above, your code will login (quickly) obtain a [JWT](https://jwt.io/introduction) and make this available to your tests.
By skipping the UI login method this way, you gain a lot of speed (going from a couple of minutes to under 1 second for a login).
