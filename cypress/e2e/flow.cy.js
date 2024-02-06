/* eslint-disable no-undef */

const login = () => {
  cy.visit("http://localhost:3000/login");
  cy.get('[data-testid="login-email-input"]').as("login-email");
  cy.get('[data-testid="login-password-input"]').as("login-password");
  cy.get('[data-testid="login-button"]').as("login-button");
  cy.get("@login-email").type("user@example.com");
  cy.get("@login-password").type("string");
  cy.get("@login-button").click();
  cy.wait(2000);
};

const randomEmail = () => {
  const randomNum = Math.floor(Math.random() * 80000) + 10000;
  return `user${randomNum}@example.com`;
}

const randomPassword = () => {
  const randomNum = Math.floor(Math.random() * 80000) + 10000;
  return `user${randomNum}`;
}

describe("template spec", () => {
  it("login flow testing", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="login-btn"]')
      .should("exist")
      .should("have.text", "Login");
    cy.get('[data-testid="register-btn"]')
      .should("exist")
      .should("have.text", "Register");
    cy.visit("http://localhost:3000/login");
    cy.get('[data-testid="login-email-input"]').as("login-email");
    cy.get('[data-testid="login-password-input"]').as("login-password");
    cy.get('[data-testid="login-button"]').as("login-button");

    cy.get("@login-email").type("user@example.com");
    cy.get("@login-password").type("str");
    cy.get("@login-button").click();
    cy.contains("Invalid Information").should("exist");
    cy.wait(2000);
    cy.get("@login-email").clear("");
    cy.get("@login-password").clear("");

    cy.get("@login-email").type("user@example.com");
    cy.get("@login-password").type("string");
    cy.get("@login-button").click();
    cy.contains("Successfully LoggedIn").should("exist");
    cy.location("pathname").should("eq", "/");
    cy.wait(2000);
  });

  it("after login check user dropdown, home page and profile page", () => {
    login();

    cy.get('[data-testid="single-blog"]').should("have.length.above", 0);

    cy.getByTestId("user-name").should("exist").should("have.text", "Jone deo");
    cy.getByTestId("user-arrow-btn").should("exist");
    cy.getByTestId("dropdown").click({ force: true });
    cy.getByTestId("dropdown-menu").should("exist");
    cy.get('[data-key="profile"]')
      .should("exist")
      .should("have.text", "Profile");
    cy.get('[data-key="profile"]').click({ force: true });
    cy.location("pathname").should("eq", "/profile");

    cy.getByTestId("add-blog-title-input").type("Testing title from cypress");
    cy.getByTestId("add-blog-content-input").type(
      "Testing description from cypress"
    );
    cy.getByTestId("add-blog-btn").click();

    cy.wait(1000);
    cy.contains("Blog added successfully").should("exist");

    cy.getByTestId("dropdown").click({ force: true });
    cy.get('[data-key="delete"]').click({ force: true });
    cy.location("pathname").should("eq", "/");
  });

  it("check register flow", async () => {
    cy.visit("http://localhost:3000/sign-up");

    cy.getByTestId('res-name').type('Hello world');
    cy.getByTestId('res-email').type(await randomEmail());
    cy.getByTestId('res-password').type(await randomPassword());
    cy.getByTestId('res-btn').click();
    cy.wait(1000);

    cy.contains('Successfully Registered');
    cy.location("pathname").should("eq", "/");
  });
});
