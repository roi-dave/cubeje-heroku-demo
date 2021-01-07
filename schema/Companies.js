cube(`Companies`, {
  sql: `SELECT * FROM public.companies`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, city, createdby, updatedby, name, createddate, updateddate, deleteddate]
    }
  },
  
  dimensions: {
    address1: {
      sql: `address1`,
      type: `string`
    },
    
    telephone: {
      sql: `telephone`,
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
    
    crn: {
      sql: `crn`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    address2: {
      sql: `address2`,
      type: `string`
    },
    
    address3: {
      sql: `address3`,
      type: `string`
    },
    
    address4: {
      sql: `address4`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    postcode: {
      sql: `postcode`,
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
    
    mobile: {
      sql: `mobile`,
      type: `string`
    },
    
    name: {
      sql: `name`,
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
    
    deleteddate: {
      sql: `deleteddate`,
      type: `time`
    }
  }
});
