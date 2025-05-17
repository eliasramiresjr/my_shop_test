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