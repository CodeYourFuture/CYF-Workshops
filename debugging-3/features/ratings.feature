Feature: Ratings

  @100
  Scenario: Placeholder text
    Given I am an end user
    When I go to the page
    Then I should see "Select a rating"

  @200
  Scenario: Rating out of 5 is displayed
    Given I am an end user
    When I select "Great"
    Then I should see a 4/5 for the score
