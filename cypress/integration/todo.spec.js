/// <reference types="cypress" />

const addTodoInput = '[data-cy="add-todo-input"]'
const addItemText = 'Add item'
const input = (value) => `input[value="${value}"]`

describe('To do', () => {
	before(() => {
		cy.visit('/')
	})

	it('should be 0 to do items by default', () => {
		cy.contains(
			'Here you will find your to do items once you start adding them with the input field above.'
		).should('be.visible')
	})

	it('should add 3 to do items and display them', () => {
		cy.get(addTodoInput).type('Buy food for tonight')
		cy.contains(addItemText).click()
		cy.get(input('Buy food for tonight')).should('be.visible')

		cy.contains(
			'You can edit a list item. Click on its text and start typing.'
		).should('be.visible')

		cy.get(addTodoInput).type('Book hotel for vacation')
		cy.contains(addItemText).click()
		cy.get(input('Book hotel for vacation')).should('be.visible')

		cy.get(addTodoInput).type(1234567890)
		cy.contains(addItemText).click()
		cy.get(input(1234567890)).should('be.visible')
	})

	it('should toggle a to do item as completed', () => {
		cy.get('[data-cy="toggle-todo-checkbox"]').first().click()
	})

	it('should change to do item text', () => {
		cy.get(input(1234567890)).type(' is the dentist number')
	})

	it('should toggle a to do item as not completed', () => {
		cy.get('[data-cy="toggle-todo-checkbox"]:checked').click()
	})

	it('should delete a to do item', () => {
		cy.get('[data-cy="delete-todo-icon"]').first().click()
	})
})
