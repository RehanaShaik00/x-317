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
})
Then('I select the device AK-CC550-018x 20 in refrigeration section of DashBoard', function() {
    Dashboard.getSelectDevice().click()//get the device
})
And('I set the Temperature to 25.0 in High Lim Air Section', function() {
    cy.wait(5000)//wait for page to load
    Dashboard.getSelectHighTemp().dblclick()//select high temp section
    Dashboard.getEditBox().type('25.0')//set high temp as 25
    Dashboard.getclickok().click()//click ok
})
And('I set the Delay to 0 minutes in Alarm Delay Section',function() {
    Dashboard.getSelectDelay().dblclick()//select delay section
    Dashboard.getEditBox().type('0')//set delay as 0
    Dashboard.getclickok().click()//click ok
})
//another url
Given('i launch the browser and perform some actions', function() {
    const options = {
        url: "http://118.185.187.242:6031/Login.html",
            headers:{
        Host:"118.185.187.242:6031"
            }
    };
    cy.visit(options);
    cy.wait(5000)
    cy.get("#usernameDisplay").type('admin');
    cy.get("#password").type('PASS');
    cy.get('#button_login').click()
    cy.wait(5000)
    const option = {
        url: "http://118.185.187.242:6031/MCXWeb.html",
            headers:{
        Host:"118.185.187.242:6031"
            }
    };
    cy.visit(option);
    cy.wait(15000)
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
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#onlineBankingMenu > div > strong').click()
    cy.get('#feedback > div > strong').click()
    cy.get('#name').click().type('Rehana')
    cy.get('#email').click().type('shaikrehana00@gmail.com')
    cy.get('[type="reset"]').click()
    
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