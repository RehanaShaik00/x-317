class ClearAlarmPage
{
getclickonalarm()
{
    return cy.get(':nth-child(4) > .submenu-toggle > .menu-text')
}
getclickonclear()
{
    return cy.get('#cleared')
}
getdevicename()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 122.429px; min-width: 120px; height: 33px;"]')
}
getDescription()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(4)')
}
getlbldescriptionval()
{
    return cy.get('#lbldescriptionval')
}
getPoint()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 122.429px; min-width: 120px; height: 33px;"]')
}
getlblpointval()
{
    return cy.get('#lblpointval')
}
getAddress()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 80px; max-width: 80px; height: 33px;"]')
}
getlbladdressval()
{
    return cy.get('#lbladdressval')
}
getsetting()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(7)')
}
getlblsettingval()
{
    return cy.get('#lblsettingval')
}
getcurrentvalue()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(8)')
}
getlblcurrentvalueval()
{
    return cy.get('#lblcurrentvalueval')
}
getoccuredTime()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(5)')
}
getlbloccuredval()
{
    return cy.get('#lbloccuredval')
}
getAcknowledgestatus()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(9)')
}
getlblackval()
{
    return cy.get('#lblackval')
}
getclearedtime()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(6)')
}
getverifyclearedtime()
{
    return cy.get(':nth-child(8) > .col-sm-8')
}
getalarmlevel()
{
    return cy.get(':nth-child(9) > .col-sm-8')
}
getalarmaction()
{
    return cy.get(':nth-child(10) > .col-sm-8')
}
getclear()
{
    return cy.get('app-alarmdetailmodal > .modal-header > .close')
}

}
export default ClearAlarmPage