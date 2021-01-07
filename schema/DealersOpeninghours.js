cube(`DealersOpeninghours`, {
  sql: `SELECT * FROM public.dealers_openinghours`,
  
  joins: {
    Dealers: {
      sql: `${CUBE}.dealerid = ${Dealers}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [dealerid, createdby, updatedby, createddate, updateddate]
    }
  },
  
  dimensions: {
    dealerid: {
      sql: `dealerid`,
      type: `string`,
      primaryKey: true
    },
    
    opens: {
      sql: `opens`,
      type: `string`
    },
    
    closes: {
      sql: `closes`,
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
    
    createddate: {
      sql: `createddate`,
      type: `time`
    },
    
    updateddate: {
      sql: `updateddate`,
      type: `time`
    }
  }
});
