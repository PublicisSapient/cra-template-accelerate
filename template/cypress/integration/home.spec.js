describe('Home page', function () {
  it('renders correctly', function () {
    // Go to home page
    cy.visit('/');

    // Verify that greeting is shown
    cy.contains('Hello World!');
  });
});
