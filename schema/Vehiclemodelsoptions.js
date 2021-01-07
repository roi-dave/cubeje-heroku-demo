cube(`Vehiclemodelsoptions`, {
  sql: `SELECT * FROM public.vehiclemodelsoptions`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, names, createdby, updatedby, createddate, updateddate, deleteddate]
    }
  },
  
  dimensions: {
    manufacturer: {
      sql: `manufacturer`,
      type: `string`
    },
    
    models: {
      sql: `models`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    standard: {
      sql: `standard`,
      type: `string`
    },
    
    names: {
      sql: `names`,
      type: `string`
    },
    
    bodystyles: {
      sql: `${CUBE}."bodyStyles"`,
      type: `string`
    },
    
    key: {
      sql: `key`,
      type: `string`
    },
    
    value: {
      sql: `value`,
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
