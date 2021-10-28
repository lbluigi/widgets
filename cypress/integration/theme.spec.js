/// <reference types="cypress" />

describe('Theme', () => {
	before(() => {
		cy.visit('/')
	})

	it('should be light body by default', () => {
		cy.get('body.light')
	})

	it('shoud toggle dark theme', () => {
		cy.get('button.toggle-theme-btn')
			.click()
			.then(() => {
				cy.get('body.dark')
			})
	})

	it('shoud toggle light theme', () => {
		cy.get('button.toggle-theme-btn')
			.click()
			.then(() => {
				cy.get('body.light')
			})
	})
})
