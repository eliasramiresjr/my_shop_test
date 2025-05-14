Feature: Search
    Scenario: Submitting an text with invalid inputs
        Given I am go to home page
        When I enter "" in the search field
        Then I click the submit button
        And I should see "No results were found for your search" message above the title field
    Scenario: Submitting an text with valid inputs using enter key
        Given I am go to home page
        When I enter "" in the search field
        Then I press enter key
        And I should see "Blouse" product above

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

Feature: Homepage