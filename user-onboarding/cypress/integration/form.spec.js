describe("User-Onboarding-App", () => {
  describe("Input buttons", () => {
    it("can navigate to http://localhost:3000/", () => {
      cy.visit("http://localhost:3000/");
      cy.url().should("include", "localhost");
    });
  });

  describe("get the input fields and type a value into the field", () => {
    it('can type something in the "text" input', () => {
      cy.get('input[name="username"]')
        .type("Testing")
        .should("have.value", "Testing");
      cy.get('input[name="password"]').type("hunter2");
      cy.get('input[name="email"]').type("email@email.com");
    });
  });
});
