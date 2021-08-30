import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import DashboardPage from '../../PageObjects/DashboardPage'
import ActiveAlarmPage from "../../PageObjects/ActiveAlarmPage";
import AcknowledgeAlarmPage from "../../PageObjects/AcknowledgeAlarmPage";
import ClearAlarmPage from "../../PageObjects/ClearAlarmPage";

const chai = require('chai');
const expect = chai.expect; 

const Dashboard = new DashboardPage()
const ActiveAlarm = new ActiveAlarmPage()
const AcknowledgeAlarm = new AcknowledgeAlarmPage()
const ClearAlarm = new ClearAlarmPage()
Given('I disable the alarm sound', function() {
    cy.visit('https://118.185.187.242:6027')
    cy.wait(2000)
    cy.get('#user').should('be.visible').type('Supervisor')//username
    cy.get('#pwd').type('S@danfoss123')//password
    cy.get('form.ng-dirty > .btn').click()//signin
    Dashboard.getClickonFile().click()//navigate to file
    Dashboard.getSelectPreferences().click()//select preferences
    Dashboard.getDiableAlarm().click()//disable the alarm
    Dashboard.getclosepreferences().click()//close the preferences
})
When('I click on DashBoard Section of svb5 System Manager', function() {
    Dashboard.getClickonDashboard().click()//navigate to dashboard
    cy.wait(2000)
})
Then('I select the device AK-CC550-018x 20 in refrigeration section of DashBoard', function() {
    Dashboard.getSelectDevice().click()//get the device
    cy.wait(2000)
})
And('I set the Temperature to 25.0 in High Lim Air Section', function() {
    cy.wait(5000)//wait for page to load
    Dashboard.getSelectHighTemp().dblclick()//select high temp section
    Dashboard.getEditBox().type('25.0')//set high temp as 25
    Dashboard.getclickok().click()//click ok
})
And('I set the Delay to 0 minutes in Alarm Delay Section',function() {
    cy.wait(2000)
    Dashboard.getSelectDelay().dblclick()//select delay section
    Dashboard.getEditBox().type('0')//set delay as 0
    Dashboard.getclickok().click()//click ok
})
//another url
Given('i launch the browser and perform some actions', function() {
    cy.visit('http://107.1.170.22:9031/')//hit control page
    cy.wait(2000)
    cy.get('#otb2').type('5')//set Output 2 control 5.00v
    cy.get('#oob2 > span > input').click()
    cy.get('#rs2').should('contain','5.00 V')
    cy.get('#ao2').should('contain','5.00 V')
    cy.wait(2000)
    cy.get('#otb3').type('3')//set Output 3 control 3.00v
    cy.get('#oob3 > span > input').click()
    cy.get('#rs3').should('contain','3.00 V')
    cy.get('#ao3').should('contain','3.00 V')
    cy.wait(2000)
    cy.get('#otb4').type('4')//set Output 4 control 4.00v
    cy.get('#oob4 > span > input').click()
    cy.get('#rs4').should('contain','4.00 V')
    cy.get('#ao4').should('contain','4.00 V')
    cy.wait(2000)
    cy.get('#otb5').type('5')//set Output 5 control 5.00v
    cy.get('#oob5 > span > input').click()
    cy.get('#rs5').should('contain','5.00 V')
    cy.get('#ao5').should('contain','5.00 V')
    cy.wait(2000)
    cy.get('#vtb0').type('1')//set extVar1 control as 1
    cy.get('#ibox0 > [type="button"]').click()//click on set
    cy.get('#es0').should('contain','1')
    cy.wait(2000)
    cy.get('#eb10 > input').click()//on-1
    cy.get('#es0').should('contain','1')
    cy.wait(2000)
    cy.get('#eb20 > input').click()//off-0
    cy.get('#es0').should('contain','0')
    cy.wait(2000)
})

//Active Alarm
Given('I click on Alarms Section of svb5 System Manager', function() {
    cy.visit('https://118.185.187.242:6027')
    ActiveAlarm.getclickonalarm().click()
    cy.wait(5000)
})
When('I click on Device AK-CC550-018x 20 in Active Alarms', function() {
    ActiveAlarm.getclickonDevicename().click()
})
Then('I verify the Description as --- High Temp Alarm in Information window of Active Alarm', function() {
    ActiveAlarm.getDescription().then(function($elem) {
        this.Description=($elem.text())
    ActiveAlarm.getlbldescriptionval().should('contain',this.Description)
})
})
And('I verify the Point as AK-CC550-018x 20 in Information window of Active Alarm', function() {
    ActiveAlarm.getpoint().then(function($elem) {
        this.Point=($elem.text())
    ActiveAlarm.getlblpointval().should('contain',this.Point)
})
})
And('I verify the Address as 20 in Information window of Active Alarm', function() {
    ActiveAlarm.getaddress().then(function($elem) {
        this.Address=($elem.text())
    ActiveAlarm.getlbladdressval().should('contain',this.Address)
})
})
And('I verify the Setting as Alarm if error in Information window of Active Alarm', function() {
    ActiveAlarm.getsetting().then(function($elem) {
        this.Setting=($elem.text())
    ActiveAlarm.getlblsettingval().should('contain',this.Setting)
})
})
And('I verify the Current Value as Trip in Information window of Active Alarm', function() {
    ActiveAlarm.getcurrentvalue().then(function($elem) {
        this.CurrentValue=($elem.text())
    ActiveAlarm.getlblcurrentvalueval().should('contain',this.CurrentValue)
})
})
And('I verify the Occured Time in Information window of Active Alarm', function() {
    ActiveAlarm.getoccuredtime().then(function($elem) {
        this.Occured=($elem.text())
    ActiveAlarm.getlbloccuredval().should('contain',this.Occured)
})
})
And('I verify the Acknowledge Status as No in Information window of Active Alarm', function() {
    ActiveAlarm.getacknowledgestatus().then(function($elem) {
        this.Acknowledge=($elem.text())
    ActiveAlarm.getlblackval().should('contain',this.Acknowledge)
})
})
And('I verify the AlarmLevel as Normal in Information window of Active Alarm',function() {
    //ActiveAlarm.getalarmlevel().should('contain','Normal')
})
And('I verify the AlarmAction as 1 in Information window of Active Alarm',function() {
    ActiveAlarm.getalarmaction().should('contain','1')
})
Then('I click on Acknowledge the Alarm in Information window of Active Alarm', function(){
    ActiveAlarm.getacknowledalarm().click() 
})

//Acknowledge Alarm
Given('I click on Acknowledge Alarm Section of svb5 System Manager', function() {
    AcknowledgeAlarm.getclickonalarm().click()
    AcknowledgeAlarm.getclickonacknowledge().click()
    cy.wait(5000)
})
When('I click on Device AK-CC550-018x 20 in Acknowledge Alarm', function() {
    AcknowledgeAlarm.getclickonDevicename().click()
})
Then('I verify the Description as --- High Temp Alarm in Information window of Acknowledge Alarm', function() {
    AcknowledgeAlarm.getDescription().then(function($elem) {
        this.Description=($elem.text())
    AcknowledgeAlarm.getlbldescriptionval().should('contain',this.Description)
})
})
And('I verify the Point as AK-CC550-018x 20 in Information window of Acknowledge Alarm', function() {
    AcknowledgeAlarm.getpoint().then(function($elem) {
        this.Point=($elem.text())
    AcknowledgeAlarm.getlblpointval().should('contain',this.Point)
})
})
And('I verify the Address as 20 in Information window of Acknowledge Alarm', function() {
    AcknowledgeAlarm.getaddress().then(function($elem) {
        this.Address=($elem.text())
    AcknowledgeAlarm.getlbladdressval().should('contain',this.Address)
})
})
And('I verify the Setting as Alarm if error in Information window of Acknowledge Alarm', function() {
    AcknowledgeAlarm.getsetting().then(function($elem) {
        this.Setting=($elem.text())
    AcknowledgeAlarm.getlblsettingval().should('contain',this.Setting)
})
})
And('I verify the Current Value as Trip in Information window of Acknowledge Alarm', function() {
    AcknowledgeAlarm.getcurrentvalue().then(function($elem) {
        this.CurrentValue=($elem.text())
    AcknowledgeAlarm.getlblcurrentvalueval().should('contain',this.CurrentValue)
})
})
And('I verify the Occured Time in Information window of Acknowledge Alarm', function() {
    AcknowledgeAlarm.getoccuredtime().then(function($elem) {
        this.Occured=($elem.text())
    AcknowledgeAlarm.getlbloccuredval().should('contain',this.Occured)
})
})
And('I verify the Acknowledge Status as No in Information window of Acknowledge Alarm', function() {
    AcknowledgeAlarm.getacknowledgestatus().then(function($elem) {
        this.Acknowledge=($elem.text())
    AcknowledgeAlarm.getlblackval().should('contain',this.Acknowledge)   
})
})
And('I verify the AlarmLevel as Normal in Information window of Acknowledge Alarm',function() {
    //AcknowledgeAlarm.getalarmlevel().should('contain','Normal')
})
And('I verify the AlarmAction as 1 in Information window of Acknowledge Alarm',function() {
    AcknowledgeAlarm.getalarmaction().should('contain','1')
})
Then('I click on close button in Information window of Acknowledge Alarm', function(){
    AcknowledgeAlarm.getclose().click()
})
//another url
Given('i launch the http browser and perform some actions', function() {
   // cy.visit('http://example.com/')
   cy.visit({url:'http://admin:webrelay@107.1.170.22:9031/setup.html', failOnStatusCode: false})
   cy.wait(2000)
   cy.get('#tab1 > a').click()//navigate
   cy.wait(2000)
})
//clear Alarm
Given('I click on Cleared Alarm Section Section of svb5 System Manager', function() {
    cy.visit('https://118.185.187.242:6027')
    ClearAlarm.getclickonalarm().click()
    ClearAlarm.getclickonclear().click()
    cy.wait(10000)
})
When('I click Device K-CC550-018x 20 in Cleared Alarm', function() {
    ClearAlarm.getdevicename().click()
})
Then('I verify Description as --- High Temp Alarm in Information window of Cleared Alarm',function() {
    ClearAlarm.getDescription().then(function($elem) {
        this.Description=($elem.text())
    ClearAlarm.getlbldescriptionval().should('contain',this.Description)
    })
})
And('I verify Point as AK-CC550-018x 20 in Information window of Cleared Alarm',function() {
    ClearAlarm.getPoint().then(function($elem) {
        this.Point=($elem.text())
    ClearAlarm.getlblpointval().should('contain',this.Point)
    })
})
And('I verify Address as 20 in Information window of Cleared Alarm',function() {
    ClearAlarm.getAddress().then(function($elem) {
        this.Address=($elem.text())
    ClearAlarm.getlbladdressval().should('contain',this.Address)
    })
})
And('I verify Setting as Alarm if error in Information window of Cleared Alarm',function() {
    ClearAlarm.getsetting().then(function($elem) {
        this.Setting=($elem.text())
    ClearAlarm.getlblsettingval().should('contain',this.Setting)
    })
})
And('I verify Current Value as Trip in Information window of Cleared Alarm',function() {
    ClearAlarm.getcurrentvalue().then(function($elem) {
        this.CurrentValue=($elem.text())
    ClearAlarm.getlblcurrentvalueval().should('contain',this.CurrentValue)
    })
})
And('I verify Occured Time in Information window of Cleared Alarm',function() {
    ClearAlarm.getoccuredTime().then(function($elem) {
        this.Occured=($elem.text())
    ClearAlarm.getlbloccuredval().should('contain',this.Occured)
    })
})
And('I verify Acknowledge Status as Yes in Information window of Cleared Alarm',function() {
    ClearAlarm.getAcknowledgestatus().then(function($elem) {
        this.Acknowledge=($elem.text())
    ClearAlarm.getlblackval().should('contain',this.Acknowledge)
    })
})
And('I verify the ClearedTime in Information window of Cleared Alarm',function() {
    ClearAlarm.getclearedtime().then(function($elem) {
        this.ClearedTime=($elem.text())
    ClearAlarm.getverifyclearedtime().should('contain',this.ClearedTime)
    })
})
And('I verify the AlarmLevel as Normal in Information window of Cleared Alarm',function() {
    //ClearAlarm.getalarmlevel().should('contain','Normal')
})
And('I verify the AlarmAction as 1 in Information window of Cleared Alarm',function() {
    ClearAlarm.getalarmaction().should('contain','1')
    
})
Then('I click on close button in Information window of Cleared Alarm',function() {
    ClearAlarm.getclear().click()
})