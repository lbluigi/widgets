/// <reference types="cypress" />

describe('Appointments', () => {
	before(() => {
		cy.visit('/')
	})

	it('should be 0 appointments by default', () => {
		cy.contains('Here you will find your appointments.').should('be.visible')
	})

	it('should add 1 appointment and display it', () => {
		cy.get('[data-cy="apt-input-date"]').type('2021-12-20')
		cy.get('[data-cy="apt-input-time"]').type('19:45')
		cy.get('[data-cy="apt-input-text"]').type(
			'Meet with the team for end of the year dinner'
		)
		cy.contains('Add appointment').click()
		cy.contains('20-12-2021 19:45').should('be.visible')
		cy.contains('Meet with the team for end of the year dinner').should(
			'be.visible'
		)
	})

	it('should delete an appointment', () => {
		cy.get('[data-cy="delete-appointment-icon"]').first().click()
	})
})
