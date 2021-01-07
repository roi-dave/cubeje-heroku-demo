cube(`Bookings`, {
  sql: `SELECT * FROM public.bookings`,
  
  joins: {
    Customers: {
      sql: `${CUBE}.customerid = ${Customers}.id`,
      relationship: `belongsTo`
    },
    
    Vehicles: {
      sql: `${CUBE}.vehicleid = ${Vehicles}.id`,
      relationship: `belongsTo`
    },
    
    Dealers: {
      sql: `${CUBE}.dealerid = ${Dealers}.id`,
      relationship: `belongsTo`
    },
    
    Companies: {
      sql: `${CUBE}.companyid = ${Companies}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, customerid, vehicleid, dealerid, insurancefilename, deliverycity, deliverydriverid, pickupcity, pickupdriverid, createdby, updatedby, campaignid, preferredmodelname, companyid, accompaniedbyid, questionnaireid, borrowingdealerid, createddate, updateddate, deleteddate, date]
    },
    
    duration: {
      sql: `duration`,
      type: `sum`
    }
  },
  
  dimensions: {
    insurancedoc: {
      sql: `insurancedoc`,
      type: `string`
    },
    
    cancellationnotes: {
      sql: `cancellationnotes`,
      type: `string`
    },
    
    accompanied: {
      sql: `accompanied`,
      type: `string`
    },
    
    earlypickuprequired: {
      sql: `earlypickuprequired`,
      type: `string`
    },
    
    confirmationsmssent: {
      sql: `confirmationsmssent`,
      type: `string`
    },
    
    pickuprequired: {
      sql: `pickuprequired`,
      type: `string`
    },
    
    confirmationemailsent: {
      sql: `confirmationemailsent`,
      type: `string`
    },
    
    deliveryrequired: {
      sql: `deliveryrequired`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    customerid: {
      sql: `customerid`,
      type: `string`
    },
    
    vehicleid: {
      sql: `vehicleid`,
      type: `string`
    },
    
    dealerid: {
      sql: `dealerid`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    previousstatus: {
      sql: `previousstatus`,
      type: `string`
    },
    
    notes: {
      sql: `notes`,
      type: `string`
    },
    
    insuredby: {
      sql: `insuredby`,
      type: `string`
    },
    
    insurancefilename: {
      sql: `insurancefilename`,
      type: `string`
    },
    
    customeremail: {
      sql: `customeremail`,
      type: `string`
    },
    
    customermobile: {
      sql: `customermobile`,
      type: `string`
    },
    
    deliveryaddress1: {
      sql: `deliveryaddress1`,
      type: `string`
    },
    
    deliveryaddress2: {
      sql: `deliveryaddress2`,
      type: `string`
    },
    
    deliveryaddress3: {
      sql: `deliveryaddress3`,
      type: `string`
    },
    
    deliveryaddress4: {
      sql: `deliveryaddress4`,
      type: `string`
    },
    
    deliverycity: {
      sql: `deliverycity`,
      type: `string`
    },
    
    deliverypostcode: {
      sql: `deliverypostcode`,
      type: `string`
    },
    
    deliverydriverid: {
      sql: `deliverydriverid`,
      type: `string`
    },
    
    deliverysignature: {
      sql: `deliverysignature`,
      type: `string`
    },
    
    deliverydriversignature: {
      sql: `deliverydriversignature`,
      type: `string`
    },
    
    deliverynotes: {
      sql: `deliverynotes`,
      type: `string`
    },
    
    pickupaddress1: {
      sql: `pickupaddress1`,
      type: `string`
    },
    
    pickupaddress2: {
      sql: `pickupaddress2`,
      type: `string`
    },
    
    pickupaddress3: {
      sql: `pickupaddress3`,
      type: `string`
    },
    
    pickupaddress4: {
      sql: `pickupaddress4`,
      type: `string`
    },
    
    pickupcity: {
      sql: `pickupcity`,
      type: `string`
    },
    
    pickuppostcode: {
      sql: `pickuppostcode`,
      type: `string`
    },
    
    earlypickupreason: {
      sql: `earlypickupreason`,
      type: `string`
    },
    
    pickupdriverid: {
      sql: `pickupdriverid`,
      type: `string`
    },
    
    pickupsignature: {
      sql: `pickupsignature`,
      type: `string`
    },
    
    pickupdriversignature: {
      sql: `pickupdriversignature`,
      type: `string`
    },
    
    pickupnotes: {
      sql: `pickupnotes`,
      type: `string`
    },
    
    handbacksignature: {
      sql: `handbacksignature`,
      type: `string`
    },
    
    handbackdriversignature: {
      sql: `handbackdriversignature`,
      type: `string`
    },
    
    createdby: {
      sql: `${CUBE}."createdBy"`,
      type: `string`
    },
    
    updatedby: {
      sql: `${CUBE}."updatedBy"`,
      type: `string`
    },
    
    deletedby: {
      sql: `${CUBE}."deletedBy"`,
      type: `string`
    },
    
    campaignid: {
      sql: `campaignid`,
      type: `string`
    },
    
    statuscode: {
      sql: `statuscode`,
      type: `string`
    },
    
    preferredmodel: {
      sql: `preferredmodel`,
      type: `string`
    },
    
    preferredmodelname: {
      sql: `preferredmodelname`,
      type: `string`
    },
    
    route: {
      sql: `route`,
      type: `string`
    },
    
    companyid: {
      sql: `companyid`,
      type: `string`
    },
    
    accompaniedbyid: {
      sql: `accompaniedbyid`,
      type: `string`
    },
    
    questionnaireid: {
      sql: `questionnaireid`,
      type: `string`
    },
    
    borrowingdealerid: {
      sql: `borrowingdealerid`,
      type: `string`
    },
    
    createddate: {
      sql: `${CUBE}."createdDate"`,
      type: `time`
    },
    
    updateddate: {
      sql: `${CUBE}."updatedDate"`,
      type: `time`
    },
    
    expectedpickuptimefrom: {
      sql: `expectedpickuptimefrom`,
      type: `time`
    },
    
    handbacktime: {
      sql: `handbacktime`,
      type: `time`
    },
    
    pickuptime: {
      sql: `pickuptime`,
      type: `time`
    },
    
    expectedpickuptimeto: {
      sql: `expectedpickuptimeto`,
      type: `time`
    },
    
    deleteddate: {
      sql: `${CUBE}."deletedDate"`,
      type: `time`
    },
    
    expectedpickuptime: {
      sql: `expectedpickuptime`,
      type: `time`
    },
    
    deliverytime: {
      sql: `deliverytime`,
      type: `time`
    },
    
    expecteddeliverytimeto: {
      sql: `expecteddeliverytimeto`,
      type: `time`
    },
    
    expecteddeliverytimefrom: {
      sql: `expecteddeliverytimefrom`,
      type: `time`
    },
    
    expecteddeliverytime: {
      sql: `expecteddeliverytime`,
      type: `time`
    },
    
    date: {
      sql: `date`,
      type: `time`
    }
  }
});
