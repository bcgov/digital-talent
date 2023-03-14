# Faker usage in Cypress

We are using the [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) package to generate fake but realistic test data in our tests.
Detailed documentation on all the options can be found at https://fakerjs.dev/guide/.

By using faker we avoid using stale, old and sometimes inappropriate test data. 
You can use faker by simply calling a faker function when entering data.
```javascript
    cy.get('#notes').type('userId: ' + faker.datatype.uuid() +'{enter}');
    cy.get('#notes').type('username: ' + faker.internet.userName() +'{enter}');
    cy.get('#notes').type('email: ' + faker.internet.email() +'{enter}');
    cy.get('#notes').type('avatar: ' + faker.image.avatar() +'{enter}');        
    cy.get('#notes').type('password: ' + faker.internet.password() +'{enter}');
    cy.get('#notes').type('birthdate: ' + faker.date.past() +'{enter}');
    cy.get('#notes').type('registeredAt: ' + faker.date.past() +'{enter}');   
```

## Usable (good) pattern
Complex test scripts will often have functions created for common activities. By applying the pattern explained below, we can greatly enhance the usibility of our functions.

In the example here we have a function for adding project information.
This function can be called as follows:
```javascript
add_project_info(null, null, null, null); //project_name, project_type, start_date, end_date
```
In this call, we are not providing any parameters, let's see how the function actually deals with that:
```javascript
export function add_project_info(
  project_name,
  project_type,
  start_date,
  end_date
) {
  cy.get("span.MuiStepLabel-iconContainer").eq(2).click(); // Click on the Navigation bar
  cy.contains("General Information").should("be.visible");
  cy.get("#project_name").clear();
  cy.get("#project_name").type(
    (
      project_name || faker.company.catchPhrase() + " " + faker.company.bs()
    ).substring(0, 50)
  );
  cy.get("body").click();
  cy.get("#project_type").focus().type("{enter}");
  if (project_type) {
    cy.get('[data-value="' + project_type + '"]').click();
  } else {
    cy.get(
      '[data-value="' + faker.random.number({ min: 1, max: 4 }) + '"]'
    ).click();
  }
  cy.get("#project_activities").click();
  var i = 0;
  while (i < faker.random.number({ min: 1, max: 4 })) {
    cy.get(
      "#project_activities-option-" + faker.random.number({ min: 1, max: 7 })
    ).click();
    i++;
  }
  cy.get("#start_date").type(
    start_date ||
      "20" +
        faker.random.number({ min: 19, max: 21 }) +
        "-" +
        faker.random.number({ min: 10, max: 12 }) +
        "-" +
        faker.random.number({ min: 10, max: 28 })
  );
  cy.get("#end_date").type(
    end_date ||
      "20" +
        faker.random.number({ min: 22, max: 30 }) +
        "-" +
        faker.random.number({ min: 10, max: 12 }) +
        "-" +
        faker.random.number({ min: 10, max: 28 })
  );
}
```
In case of NULL data in the parameter, the function will use a faker value:
```javascript
  cy.get("#project_name").type(
    (
      project_name || faker.company.catchPhrase() + " " + faker.company.bs()
    ).substring(0, 50)
  );
```
This way, your function can be used to enter specific data, random data or a mix of those 2.
Your fuction can now be re-used in data-driven scenarios, smoke test scenarios etc.

Example:
```javascript
add_project_info('My test project', null, null, null); //project_name, project_type, start_date, end_date
```
The project added will now say 'My test project' and all the other data will be random as specified.
