Feature: Go to Cinépolis website and buy a ticket

Scenario: Open Cinépolis website and verify it's open
    Given I land on Cinépolis website
    Then I verify I'm on Cinépolis website

Scenario: Select Morelia as city and centro cineman
    Given I land on Cinépolis website
    Then I go to cities box and select Morelia
    Then I go to cinemas box and select Cinépolis Morelia Centro

Scenario: Choose a movie and an hour for selected movie
    Given I land on Cinépolis Morelia Centro billboards
    Then I choose Bloodshot as the movie I want to watch
    Then I choose an hour for selected movie

Scenario: Reserve a ticket for selected movie
    Given I'm on the site to buy my ticket
    Then I choose to Continue as guest
    Then I buy one ticket for adults price
    Then I click Continue
    Then I choose a free seat
    Then I fill the Personal Info Section