cube(`Vehicles`, {
  sql: `SELECT * FROM public.vehicles`,
  
  joins: {
    Dealers: {
      sql: `${CUBE}.dealerid = ${Dealers}.id`,
      relationship: `belongsTo`
    },
    
    Vehiclemodels: {
      sql: `${CUBE}.vehiclemodelid = ${Vehiclemodels}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [dealerid, id, vehiclemodelid, basketuserid, createdby, updatedby, sourcefilename, createddate, updateddate, solddate, registrationdate, deleteddate, forsaledate]
    },
    
    dealercost: {
      sql: `${CUBE}."dealerCost"`,
      type: `sum`
    }
  },
  
  dimensions: {
    dealerid: {
      sql: `dealerid`,
      type: `string`
    },
    
    registration: {
      sql: `registration`,
      type: `string`
    },
    
    democomplianceacceptance: {
      sql: `democomplianceacceptance`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    vehiclemodelid: {
      sql: `vehiclemodelid`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    vin: {
      sql: `vin`,
      type: `string`
    },
    
    color: {
      sql: `color`,
      type: `string`
    },
    
    ordernumber: {
      sql: `${CUBE}."orderNumber"`,
      type: `string`
    },
    
    dmsordernumber: {
      sql: `${CUBE}."dmsOrderNumber"`,
      type: `string`
    },
    
    vehicletypes: {
      sql: `${CUBE}."vehicleTypes"`,
      type: `string`
    },
    
    basketuserid: {
      sql: `${CUBE}."basketUserId"`,
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
    
    fuel: {
      sql: `fuel`,
      type: `string`
    },
    
    titrecode: {
      sql: `titrecode`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    vehicletype: {
      sql: `vehicletype`,
      type: `string`
    },
    
    options: {
      sql: `options`,
      type: `string`
    },
    
    sourcefilename: {
      sql: `sourcefilename`,
      type: `string`
    },
    
    transmission: {
      sql: `transmission`,
      type: `string`
    },
    
    fleetcode: {
      sql: `fleetcode`,
      type: `string`
    },
    
    capcode: {
      sql: `capcode`,
      type: `string`
    },
    
    trimcode: {
      sql: `trimcode`,
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
    
    solddate: {
      sql: `solddate`,
      type: `time`
    },
    
    registrationdate: {
      sql: `registrationdate`,
      type: `time`
    },
    
    deleteddate: {
      sql: `${CUBE}."deletedDate"`,
      type: `time`
    },
    
    forsaledate: {
      sql: `${CUBE}."forSaleDate"`,
      type: `time`
    },
    
    availableto: {
      sql: `${CUBE}."availableTo"`,
      type: `time`
    },
    
    availablefrom: {
      sql: `${CUBE}."availableFrom"`,
      type: `time`
    }
  }
});
