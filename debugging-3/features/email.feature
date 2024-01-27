Feature: Email

  @100
  Scenario: Error message displayed when invalid email entered
    Given I am an end user
    When I enter "bob" as an email
    Then I see an error message

  @200
  Scenario: Error message displayed when invalid email entered (200)
    Given I am an end user
    When I enter "bob@gmail" as an email
    Then I see an error message

  @300
  Scenario: Error message displayed when invalid email entered (200)
    Given I am an end user
    When I enter "bob@gmail.com " as an email
    Then I see an error message