import { getTitle } from '../support/app.po';

describe('client', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome title', () => {
    getTitle().contains('Welcome to Client Application!');
  });

  it('should display api response', () => {
    cy.contains('Welcome to api!');
  });
});
