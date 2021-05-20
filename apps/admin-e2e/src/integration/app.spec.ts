import { getTitle } from '../support/app.po';

describe('admin', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome title', () => {
    getTitle().contains('Welcome to Admin Application!');
  });

  it('should display api response', () => {
    cy.contains('Welcome to api!');
  });
});
