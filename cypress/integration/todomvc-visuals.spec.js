/// <reference types="cypress" />
import { TodoPage } from "../page-objects/todoPage";
describe('visual validation', () => {
    const todoPage = new TodoPage()
    before(() => cy.visit('http://todomvc-app-for-testing.surge.sh/'))
    beforeEach(() =>
        cy.eyesOpen({
            appName: 'TAU TodoMVC',
            batchName: 'TAU TodoMVC'
        })
    )

    afterEach(() => cy.eyesClose())

    it('should look good', () => {
        cy.eyesCheckWindow('empty todo list')
        todoPage.addTodo('Clean room')
        todoPage.addTodo('Learn javascript')
        cy.eyesCheckWindow('two todos')
        todoPage.toggleTodo(0)
        cy.eyesCheckWindow('mark as completed')
    })
})