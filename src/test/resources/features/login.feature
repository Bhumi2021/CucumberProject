@all
Feature: User login successfully

  Background:
    Given user is on homepage

  @login
  Scenario Outline: User should not able to login with invalid credential
    When user click on login
    And user type invalid "<email>" and "<password>"
    And user click on login button
    Then user should not able to login successfully
    And user get "<error_message>"
    Examples:
      | email           | password | error_message                                                                            |
      |                 |          | Please enter your email                                                                  |
      | Name1@gmail.com |          | Login was unsuccessful.Please correct the errors and try again.No customer account found |
      |                 | Abc123   | Please enter your email                                                                  |
      | Name1@gmail.com | Abc124   | Login was unsuccessful.Please correct the error and try again.No customer account found  |