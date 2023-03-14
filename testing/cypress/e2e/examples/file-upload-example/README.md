# File Upload

This [package](https://www.npmjs.com/package/cypress-file-upload) adds a custom Cypress command that allows you to make an abstraction on how exactly you upload files through HTML controls and focus on testing user workflows.

It is a common practice to put all the files required for Cypress tests inside cypress/fixtures folder and call them as fixtures (or a fixture). The command recognizes [cy.fixture](https://docs.cypress.io/api/commands/fixture) format, so usually this is just a file name.

HTML5 file input
```javascript
cy.get('[data-cy="file-input"]')
  .attachFile('myfixture.json');
```
Drag-n-drop component
```javascript
cy.get('[data-cy="dropzone"]')
  .attachFile('myfixture.json', { subjectType: 'drag-n-drop' });
```
Attaching multiple files
```javascript
cy.get('[data-cy="file-input"]')
  .attachFile(['myfixture1.json', 'myfixture2.json']);
```
More details in the package repo: https://github.com/abramenal/cypress-file-upload