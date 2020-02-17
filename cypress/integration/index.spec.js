context("Index", () => {
  it("tests data entry and summary display", () => {
    cy.visit("http://localhost:3000");

    // Test if inputs work
    cy.get("#date")
      .type("2020-02-16")
      .should("have.value", "2020-02-16");

    cy.get("#time")
      .type("22:44")
      .should("have.value", "22:44");

    cy.get("#location")
      .type("A local pond")
      .should("have.value", "A local pond");

    cy.get("#how-many")
      .type("20")
      .should("have.value", "20");

    cy.get("#category")
      .type("Animal")
      .should("have.value", "Animal");

    cy.get("#subcategory")
      .type("Fish")
      .should("have.value", "Fish");

    cy.get("#quantity")
      .type("42")
      .should("have.value", "42");

    // Test if summary works
    cy.get("#summary-date-time")
      .find("span")
      .should("have.text", "2020-02-16 22:44");

    cy.get("#summary-place")
      .find("span")
      .should("have.text", "A local pond");

    cy.get("#summary-how-many")
      .find("span")
      .should("have.text", "20 ducks");

    cy.get("#summary-food")
      .find("span")
      .should("have.text", "Animal - Fish");

    cy.get("#summary-food-quantity")
      .find("span")
      .should("have.text", "42 boxes");
  });
});
