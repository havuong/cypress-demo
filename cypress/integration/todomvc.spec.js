/// <reference types="cypress" />
// This triple comment line will tell VS Code for which package it needs autocomplete support for.
import { TodoPage } from "../page-objects/todoPage";

describe('todo actions', () => {
    const todoPage = new TodoPage()
    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo('Clean room')
    })

    it('should add a new todo to the list', () => {
        todoPage.validateTodoText(0, 'Clean room')
        todoPage.validateToggleState(0, false)
    })

    describe('toggling todos', () => {
        it('should toggle test correctly', () => {
            todoPage.toggleTodo(0)
            todoPage.validateTodoCompletedState(0, true)
        })

        it('should clear completed', () => {
            todoPage.toggleTodo(0)
            todoPage.clearCompleted()
            todoPage.validateNumberOfTodosShown(0)
        })
    })
})