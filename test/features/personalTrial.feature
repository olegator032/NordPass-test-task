Feature: Personal Trial - NordPass

  Scenario Outline: As a user, I can download app for personal trial

    Given I am on the home page
    When I click on personal button
    And I click on start free trial
    And I enter my trial email: "<email>"
    Then I am downloading nord pass app

    Examples:
      | email                      |
      | nordpasstester+10@gmail.com | 

