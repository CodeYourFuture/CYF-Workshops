Feature: Episodes

  @100
  Scenario: TV Shows are displayed
    Given I am an end user
    When I enter "bob" as an email
    Then I see a list of the episodes

  @200
  Scenario: TV Shows are displayed in order
    Given I am an end user
    When I enter "bob" as an email
    Then I see a list of the episodes in alphabetical order
