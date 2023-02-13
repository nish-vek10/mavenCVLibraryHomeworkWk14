@regression
Feature: Login Test
  As a User I want to login into demo.nopCommerce.com website.

  Scenario: User should navigate to login page
    Given User is on homepage
    When User clicks on login link
    Then User should navigate to login page successfully

  Scenario Outline: User should not login successfully with invalid credentials
    Given User is on homepage
    When User clicks on login link
    And User enters email id "<email>"
    And User enters password "<password>"
    And User clicks on login button
    Then User should see the error message "<errorMsg>"
    Examples:
      | email               | password | errorMsg                                                                                    |
      | cbust55@gmail.com   | admin123 | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | codebust5@gmail.com | admin555 | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | ccbust10@gmail.com  | ADMIN420 | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |