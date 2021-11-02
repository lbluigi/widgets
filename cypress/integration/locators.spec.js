/// <reference types="cypress" />

describe('Locators', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('locating elements with get', () => {
		// Get elements by selector (tag, class, id, attribute)
		cy.get('button')
		cy.get('[data-cy="toggle-theme-btn"]')
		cy.get('[type=submit]')
		cy.get('.solid-shadow')
	})

	it('locating elements with contains', () => {
		// Get elements by text
		cy.contains('widgets')

		// Get elements by selector containing specific  text
		cy.contains('h2', "Today's Weather")
	})

	it('locating elements with find', () => {
		// Find children in a specific element
		cy.get('div.solid-shadow').find('.animate-clock')
	})
})
