class DashboardPage
{
    getClickonFile()
    {
        return cy.get('.has-submenu > .submenu-toggle > .menu-text')
    }
    getSelectPreferences()
    {
        return cy.get('.ng-star-inserted > .menu-text')
    }
    getDiableAlarm()
    {
        return cy.get('.alarm-action-code > :nth-child(1) > input')
    }
    getclosepreferences()
    {
        return cy.get('#Preferences > .modal-dialog > .modal-content > .modal-header > .close > span')
    }
    getClickonDashboard()
    {
        return cy.get('.active > .submenu-toggle > .menu-text')
    }
    getSelectDevice()
    {
        return cy.get(':nth-child(24) > .datatable-body-row > .datatable-row-center > [style="width: 120px; min-width: 120px; height: 40px;"]')
    }
    getSelectHighTemp()
    {
        return cy.get('#idTable-2 > div.table > .configurationTable > .table > tbody > :nth-child(5) > td.spaceAdj')
    }
    getEditBox()
    {
        return cy.get('.modal-body > .ng-pristine')
    }
    getclickok()
    {
        return cy.get('.ng-untouched > .modal-footer > :nth-child(2)')
    }
    getSelectLowTemp()
    {
        return cy.get('#idTable-2 > div.table > .configurationTable > .table > tbody > :nth-child(6) > td.spaceAdj')
    }
    getSelectDelay()
    {
        return cy.get('#idTable-2 > div.table > .configurationTable > .table > tbody > :nth-child(7) > td.spaceAdj')
    }
}
export default DashboardPage