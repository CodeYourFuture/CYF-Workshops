Feature: Episodes

  @100
  Scenario: TV Shows are displayed
    Given I am an end user
    When the page loads
    Then I see a list of the episodes

  @200
  Scenario: TV Shows are displayed in order
    Given I am an end user
    When the page loads
    Then I see a list of the episodes in alphabetical order
