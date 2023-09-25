Feature: Login - NordPass

  Scenario Outline: As a user, I can log into my NordPass account

    Given I am on the home page
    When I go to login flow
    And I enter my email: "<email>"
    And I enter my user password: "<password>"
    And I enter my user master password: "<masterpassword>"
    Then I am logged in into nord pass app

    Examples:
      | email                    | password             | masterpassword |
      | nordpasstester@gmail.com | nordpasstest12       | nordpasstest!  |

