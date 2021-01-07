cube(`Customers`, {
  sql: `SELECT * FROM public.customers`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [forename, surname, id, title, city, gdprupdatedby, createdby, updatedby, createddate, gdprupdateddate, updateddate, deleteddate]
    }
  },
  
  dimensions: {
    forename: {
      sql: `forename`,
      type: `string`
    },
    
    surname: {
      sql: `surname`,
      type: `string`
    },
    
    telephonepreference: {
      sql: `${CUBE}."telephonePreference"`,
      type: `string`
    },
    
    smspreference: {
      sql: `${CUBE}."smsPreference"`,
      type: `string`
    },
    
    mailpreference: {
      sql: `${CUBE}."mailPreference"`,
      type: `string`
    },
    
    emailpreference: {
      sql: `${CUBE}."emailPreference"`,
      type: `string`
    },
    
    verifieddrivinglicence: {
      sql: `${CUBE}."verifiedDrivingLicence"`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    mobile: {
      sql: `mobile`,
      type: `string`
    },
    
    telephone: {
      sql: `telephone`,
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
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    gdprupdatedby: {
      sql: `${CUBE}."gdprUpdatedBy"`,
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
    
    source: {
      sql: `source`,
      type: `string`
    },
    
    sourcecomments: {
      sql: `${CUBE}."sourceComments"`,
      type: `string`
    },
    
    createddate: {
      sql: `${CUBE}."createdDate"`,
      type: `time`
    },
    
    gdprupdateddate: {
      sql: `${CUBE}."gdprUpdatedDate"`,
      type: `time`
    },
    
    updateddate: {
      sql: `${CUBE}."updatedDate"`,
      type: `time`
    },
    
    dob: {
      sql: `dob`,
      type: `time`
    },
    
    deleteddate: {
      sql: `${CUBE}."deletedDate"`,
      type: `time`
    }
  }
});
