@all
  Feature: Change currency
    @currency @reg
    Scenario: User should able to change currency for all products successfully
      Given user is on homepage
      When user select currency
      Then user should able to change currency for all products successfully