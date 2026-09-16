Feature: User will open and fill equipment inspection forms

    @Scenario1
    Scenario Outline: 
        Given User is on mobile app wemine
        And User proceed login
        When User open feature equipment inspection
        And User can see list of previous submissions
        And User can click button to open submission form
        Then User can change fill submission form
        And User can submit submission form