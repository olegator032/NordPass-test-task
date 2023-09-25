Feature: Subscriptions - NordPass

  Scenario Outline: As a user, I can check my subscriptions

    Given I am on the home page
    When I want to manage my subscriptions
    And I enter my NordAccount email: "<email>"
    And I enter my user password: "<password>"
    Then I am logged in into my nord account
    And I can see services in side panel
    And I can see upgrade plan button for NordPass
    
    Examples:
      | email                    | password             | masterpassword |
      | nordpasstester@gmail.com | nordpasstest12       | nordpasstest!  |

