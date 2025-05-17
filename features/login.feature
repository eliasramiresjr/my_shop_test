Feature: Login
    Scenario: Submitting a valid account
        Given I am go to home page
        When I click the sign up button
        Then I type a valid email
        Then I type a valid password
        And I click in submit button
    Scenario: Submitting a invalid account
        Given I am go to home page
        When I click the sign up button
        Then I type a invalid email
    Scenario: Submitting a invalid password
        Then I type a invalid password
        And I click in submit button