describe("User-Onboarding-App", () => {
  describe("Input buttons", () => {
    it("can navigate to http://localhost:3000/", () => {
      cy.visit("http://localhost:3000/");
      cy.url().should("include", "localhost");
    });
  });

  describe("get the Name input and types a name into the field", () => {
    it('can type something in the "text" input', () => {
      cy.get('input[name="username"]')
        .type("Testing")
        .should("have.value", "Testing");
    });
  });
});
