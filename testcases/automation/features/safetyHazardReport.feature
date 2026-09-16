Feature: User will open and fill safety hazard form

    @Scenario1
    Scenario Outline: 
        Given User is on mobile app wemine
        And User proceed login
        When User open menu safety hazard
        And User can fill safety hazard form and submit
        Then User will get notification to follow up task
        And User can fill follow up task form and submit