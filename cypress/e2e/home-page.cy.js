describe("Home page", () => {
  it("link should be visible", () => {
    cy.visit("localhost:3000/");
    cy.get("a").contains("Learn React").should("be.visible");
  });

  it("logo should be visible", () => {
    cy.visit("localhost:3000/");
    cy.get("img.App-logo").should("be.visible");
  });

  it.skip("wrong link", () => {
    cy.visit("localhost:3000/");
    cy.get("a").contains("Try React").should("be.visible");
  });
});
