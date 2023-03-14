# Testing API with Cypress
Eventhough there are other viable tools to test APIs like [Postman](https://www.postman.com/), it might be advantageous to use Cypress to either connect to APIs or execute some simple tests without having to switch to another tool.

We use the [cypress-plugin-api](https://www.npmjs.com/package/cypress-plugin-api) to smooth out working wit APIs.
It is labelled the Cypress plugin for effective API testing. Imagine Postman, but in Cypress. Prints out information about the API call in the Cypress App UI.

Github Location is: https://github.com/filiphric/cypress-plugin-api

## Features
* cy.api() command, that will information about the API call, such as URL, headers, response and more to the UI frame
* all of the info can be viewed in a time-travel snapshots
* simple table for viewing cookies
* JSON data object and array folding
* color coding of methods in UI view and in timeline
* calculating size of the response
* combine API calls with UI
* hide sensitive headers and auth information
* requestMode to add cy.api() features to [cy.request](https://docs.cypress.io/api/commands/request)() command
* TypeScript support

## Example
A simple request to a read-only method:

```javascript
import 'cypress-plugin-api';

describe('API Example', () => {
  beforeEach(() => {
  });
  afterEach(() => {
  });

  it('Gets Health Status', () => {
    cy
    .api({
      method: 'GET', 
      url: 'https://artifacts.developer.gov.bc.ca/router/api/v1/system/health'
    })
  })
})
```
