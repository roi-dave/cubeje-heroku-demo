cube(`Vehiclemodels`, {
  sql: `SELECT * FROM public.vehiclemodels`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, id, createdby, updatedby, updatemodelline, sourcefilename, createddate, updateddate, deleteddate]
    }
  },
  
  dimensions: {
    bodystyle: {
      sql: `${CUBE}."bodyStyle"`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    active: {
      sql: `active`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    manufacturer: {
      sql: `manufacturer`,
      type: `string`
    },
    
    model: {
      sql: `model`,
      type: `string`
    },
    
    description: {
      sql: `description`,
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
    
    familycode: {
      sql: `familycode`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    quoteuri: {
      sql: `quoteuri`,
      type: `string`
    },
    
    updatemodelline: {
      sql: `updatemodelline`,
      type: `string`
    },
    
    sourcefilename: {
      sql: `sourcefilename`,
      type: `string`
    },
    
    enginesize: {
      sql: `enginesize`,
      type: `string`
    },
    
    fueltype: {
      sql: `fueltype`,
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
    
    deleteddate: {
      sql: `${CUBE}."deletedDate"`,
      type: `time`
    }
  }
});
