class ActiveAlarmPage
{
getclickonalarm()
{
    return cy.get(':nth-child(4) > .submenu-toggle > .menu-text')
}
getclickonDevicename()
{
    return cy.get('[style="transform: translate3d(0px, 0px, 0px); backface-visibility: hidden;"] > .datatable-body-row > .datatable-row-center > :nth-child(2)')
}
getDescription()
{
    return cy.get('[style="transform: translate3d(0px, 0px, 0px); backface-visibility: hidden;"] > .datatable-body-row > .datatable-row-center > :nth-child(4)')
}
getlbldescriptionval()
{
    return cy.get('#lbldescriptionval')
}
getpoint()
{
    return cy.get('[style="transform: translate3d(0px, 0px, 0px); backface-visibility: hidden;"] > .datatable-body-row > .datatable-row-center > :nth-child(2)')
}
getlblpointval()
{
    return cy.get('#lblpointval')
}
getaddress()
{
    return cy.get('[style="transform: translate3d(0px, 0px, 0px); backface-visibility: hidden;"] > .datatable-body-row > .datatable-row-center > :nth-child(3)')
}
getlbladdressval()
{
    return cy.get('#lbladdressval')
}
getsetting()
{
    return cy.get('[style="transform: translate3d(0px, 0px, 0px); backface-visibility: hidden;"] > .datatable-body-row > .datatable-row-center > :nth-child(6)')
}
getlblsettingval()
{
    return cy.get('#lblsettingval')
}
getcurrentvalue()
{
    return cy.get('[style="transform: translate3d(0px, 0px, 0px); backface-visibility: hidden;"] > .datatable-body-row > .datatable-row-center > :nth-child(7)')
}
getlblcurrentvalueval()
{
    return cy.get('#lblcurrentvalueval')
}
getoccuredtime()
{
    return cy.get('[style="transform: translate3d(0px, 0px, 0px); backface-visibility: hidden;"] > .datatable-body-row > .datatable-row-center > :nth-child(5)')
}
getlbloccuredval()
{
    return cy.get('#lbloccuredval')
}
getacknowledgestatus()
{
    return cy.get('[style="transform: translate3d(0px, 0px, 0px); backface-visibility: hidden;"] > .datatable-body-row > .datatable-row-center > :nth-child(8)')
}
getlblackval()
{
    return cy.get('#lblackval')
}
getalarmlevel()
{
    return cy.get(':nth-child(9) > .col-sm-8')
}
getalarmaction()
{
    return cy.get(':nth-child(10) > .col-sm-8')
}
getacknowledalarm()
{
    return cy.get('#btnACK')
}


}
export default ActiveAlarmPage