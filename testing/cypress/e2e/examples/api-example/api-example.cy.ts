// API Call example

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
