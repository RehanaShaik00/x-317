Feature: HighAlarm

Scenario: Login and Set High Temp
Given I disable the alarm sound 
When I click on DashBoard Section of svb5 System Manager
Then I select the device AK-CC550-018x 20 in refrigeration section of DashBoard
And I set the Temperature to 25.0 in High Lim Air Section
And I set the Delay to 0 minutes in Alarm Delay Section

Scenario: i hit http website
Given i launch the browser and perform some actions

Scenario: Verify the Active Alarm and Acknowledge Alarm
Given I click on Alarms Section of svb5 System Manager
When I click on Device AK-CC550-018x 20 in Active Alarms
Then I verify the Description as --- High Temp Alarm in Information window of Active Alarm
And I verify the Point as AK-CC550-018x 20 in Information window of Active Alarm
And I verify the Address as 20 in Information window of Active Alarm
And I verify the Setting as Alarm if error in Information window of Active Alarm
And I verify the Current Value as Trip in Information window of Active Alarm
And I verify the Occured Time in Information window of Active Alarm
And I verify the Acknowledge Status as No in Information window of Active Alarm
And I verify the AlarmLevel as Normal in Information window of Active Alarm
And I verify the AlarmAction as 1 in Information window of Active Alarm
Then I click on Acknowledge the Alarm in Information window of Active Alarm

Scenario: Verify the Acknowlegde Alarm
Given I click on Acknowledge Alarm Section of svb5 System Manager
When I click on Device AK-CC550-018x 20 in Acknowledge Alarm
Then I verify the Description as --- High Temp Alarm in Information window of Acknowledge Alarm
And I verify the Point as AK-CC550-018x 20 in Information window of Acknowledge Alarm
And I verify the Address as 20 in Information window of Acknowledge Alarm
And I verify the Setting as Alarm if error in Information window of Acknowledge Alarm
And I verify the Current Value as Trip in Information window of Acknowledge Alarm
And I verify the Occured Time in Information window of Acknowledge Alarm
And I verify the Acknowledge Status as No in Information window of Acknowledge Alarm
And I verify the AlarmLevel as Normal in Information window of Acknowledge Alarm
And I verify the AlarmAction as 1 in Information window of Acknowledge Alarm
Then I click on close button in Information window of Acknowledge Alarm

Scenario: i hit http website
Given i launch the http browser and perform some actions

Scenario: Verify the Cleared Alarm
Given I click on Cleared Alarm Section Section of svb5 System Manager
When I click Device K-CC550-018x 20 in Cleared Alarm
Then I verify Description as --- High Temp Alarm in Information window of Cleared Alarm
And I verify Point as AK-CC550-018x 20 in Information window of Cleared Alarm
And I verify Address as 20 in Information window of Cleared Alarm
And I verify Setting as Alarm if error in Information window of Cleared Alarm
And I verify Current Value as Trip in Information window of Cleared Alarm
And I verify Occured Time in Information window of Cleared Alarm
And I verify Acknowledge Status as Yes in Information window of Cleared Alarm
And I verify the ClearedTime in Information window of Cleared Alarm
And I verify the AlarmLevel as Normal in Information window of Cleared Alarm
And I verify the AlarmAction as 1 in Information window of Cleared Alarm
Then I click on close button in Information window of Cleared Alarm