/// <reference types="cypress" />
//
// This spec file contains a sample test faker, a common libray for generating random data
//
//import * as faker from "faker";
import { faker } from '@faker-js/faker';

describe('Keycloak Example', () => {
  beforeEach(() => {
  });
  afterEach(() => {
  });

  it('displays two todo items by default', () => {
    cy.visit('https://www.memonotepad.com/');
    cy.get('#notes').type('userId: ' + faker.datatype.uuid() +'{enter}');
    cy.get('#notes').type('username: ' + faker.internet.userName() +'{enter}');
    cy.get('#notes').type('email: ' + faker.internet.email() +'{enter}');
    cy.get('#notes').type('avatar: ' + faker.image.avatar() +'{enter}');        
    cy.get('#notes').type('password: ' + faker.internet.password() +'{enter}');
    cy.get('#notes').type('birthdate: ' + faker.date.past() +'{enter}');
    cy.get('#notes').type('registeredAt: ' + faker.date.past() +'{enter}');        
  })
})
