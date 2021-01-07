cube(`Damage`, {
  sql: `SELECT * FROM public.damage`,
  
  joins: {
    Inspections: {
      sql: `${CUBE}."inspectionId" = ${Inspections}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, inspectionid, partname, createdby, updatedby, createddate, updateddate, deleteddate]
    },
    
    repaircost: {
      sql: `${CUBE}."repairCost"`,
      type: `sum`
    },
    
    estimatedcost: {
      sql: `${CUBE}."estimatedCost"`,
      type: `sum`
    }
  },
  
  dimensions: {
    thumbnail: {
      sql: `thumbnail`,
      type: `string`
    },
    
    photo: {
      sql: `photo`,
      type: `string`
    },
    
    extra: {
      sql: `extra`,
      type: `string`
    },
    
    notes: {
      sql: `notes`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    inspectionid: {
      sql: `${CUBE}."inspectionId"`,
      type: `string`
    },
    
    partname: {
      sql: `${CUBE}."partName"`,
      type: `string`
    },
    
    damagetype: {
      sql: `${CUBE}."damageType"`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    invoiceurl: {
      sql: `${CUBE}."invoiceUrl"`,
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
    },
    
    repairedtime: {
      sql: `repairedtime`,
      type: `time`
    }
  }
});
