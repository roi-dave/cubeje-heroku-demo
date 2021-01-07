cube(`Dealers`, {
  sql: `SELECT * FROM public.dealers`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, forename, name, city, createdby, updatedby, surname, title, createddate, updateddate, deleteddate]
    }
  },
  
  dimensions: {
    telephone: {
      sql: `telephone`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    active: {
      sql: `active`,
      type: `string`
    },
    
    showoncfs: {
      sql: `${CUBE}."showOnCFS"`,
      type: `string`
    },
    
    issalesoutlet: {
      sql: `issalesoutlet`,
      type: `string`
    },
    
    rules: {
      sql: `rules`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    code: {
      sql: `code`,
      type: `string`
    },
    
    forename: {
      sql: `forename`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    address1: {
      sql: `address1`,
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
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    postcode: {
      sql: `postcode`,
      type: `string`
    },
    
    notes: {
      sql: `notes`,
      type: `string`
    },
    
    group: {
      sql: `group`,
      type: `string`
    },
    
    region: {
      sql: `region`,
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
    
    address4: {
      sql: `address4`,
      type: `string`
    },
    
    surname: {
      sql: `surname`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    mobile: {
      sql: `mobile`,
      type: `string`
    },
    
    zone: {
      sql: `zone`,
      type: `string`
    },
    
    class: {
      sql: `class`,
      type: `string`
    },
    
    businesscentre: {
      sql: `businesscentre`,
      type: `string`
    },
    
    emailsignature: {
      sql: `emailsignature`,
      type: `string`
    },
    
    smssignature: {
      sql: `smssignature`,
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
