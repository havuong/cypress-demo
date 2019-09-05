/// <reference types="cypress" />
// This triple comment line will tell VS Code for which package it needs autocomplete support for.

it('should navigate to the TodoMVC App', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type('Clean room{enter}')
    cy.get('.toggle').click()
    cy.contains('Clear completed').click()
});