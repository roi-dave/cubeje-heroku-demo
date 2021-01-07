cube(`Inspections`, {
  sql: `SELECT * FROM public.inspections`,
  
  joins: {
    Bookings: {
      sql: `${CUBE}."bookingId" = ${Bookings}.id`,
      relationship: `belongsTo`
    },
    
    Vehicles: {
      sql: `${CUBE}."vehicleId" = ${Vehicles}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [bookingid, id, vehicleid, createdby, updatedby, originspectionid, title, createddate, updateddate]
    }
  },
  
  dimensions: {
    inspectiontype: {
      sql: `${CUBE}."inspectionType"`,
      type: `string`
    },
    
    bookingid: {
      sql: `${CUBE}."bookingId"`,
      type: `string`
    },
    
    extra: {
      sql: `extra`,
      type: `string`
    },
    
    signature: {
      sql: `signature`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    vehicleid: {
      sql: `${CUBE}."vehicleId"`,
      type: `string`
    },
    
    status: {
      sql: `status`,
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
    
    originspectionid: {
      sql: `originspectionid`,
      type: `string`
    },
    
    exteriornotes: {
      sql: `exteriornotes`,
      type: `string`
    },
    
    interiornotes: {
      sql: `interiornotes`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    reason: {
      sql: `reason`,
      type: `string`
    },
    
    otherreason: {
      sql: `otherreason`,
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
    
    inspectiontime: {
      sql: `${CUBE}."inspectionTime"`,
      type: `time`
    }
  }
});
