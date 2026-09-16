Feature: User will sign in

    @Scenario1
    Scenario Outline: App
        Given User is on mobile app wemine
        When User inputs username
        And User inputs password
        Then User can restart
        And User can open their account

    @Scenario2
    Scenario Outline: Web
        Given User is on web wemineoffice
        When User inputs username
        And User inputs password
        Then User can restart
        And User can open their account