cube(`Pricing`, {
  sql: `SELECT * FROM pricing.pricing`,
  
  joins: {
    Vehicles: {
      sql: `${CUBE}.vehicleid = ${Vehicles}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, vehicleid, createdby, updatedby, createddate, updateddate, date, activedate, deleteddate]
    },
    
    optionsvalue: {
      sql: `optionsvalue`,
      type: `sum`
    },
    
    trimvalue: {
      sql: `trimvalue`,
      type: `sum`
    },
    
    calculatedmarginvalue: {
      sql: `calculatedmarginvalue`,
      type: `sum`
    },
    
    marginvalue: {
      sql: `marginvalue`,
      type: `sum`
    }
  },
  
  dimensions: {
    current: {
      sql: `current`,
      type: `string`
    },
    
    published: {
      sql: `published`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    vehicleid: {
      sql: `vehicleid`,
      type: `string`
    },
    
    createdby: {
      sql: `createdby`,
      type: `string`
    },
    
    updatedby: {
      sql: `updatedby`,
      type: `string`
    },
    
    deletedby: {
      sql: `deletedby`,
      type: `string`
    },
    
    adjustmentcomments: {
      sql: `adjustmentcomments`,
      type: `string`
    },
    
    createddate: {
      sql: `createddate`,
      type: `time`
    },
    
    updateddate: {
      sql: `updateddate`,
      type: `time`
    },
    
    date: {
      sql: `date`,
      type: `time`
    },
    
    activedate: {
      sql: `activedate`,
      type: `time`
    },
    
    deleteddate: {
      sql: `deleteddate`,
      type: `time`
    }
  }
});
