describe("User-Onboarding-App", () => {
  describe("Input buttons", () => {
    it("can navigate to http://localhost:3000/", () => {
      cy.visit("http://localhost:3000/");
      cy.url().should("include", "localhost");
    });
  });
});
