'use strict';
module.exports = (Sequelize, type) => {
  var ItineraryStops = Sequelize.define('ItineraryStops', {
    // fav_id: {
    //   type: type.INTEGER,      
    //   primaryKey: true,
    //   autoIncrement: true
    // }
    ItineraryId: {
      type: type.INTEGER
    },
    StopId: {
      type: type.INTEGER
    }
  });

  ItineraryStops.associate = function(models) {
  };

  ItineraryStops.removeAttribute('id');
  // ItineraryStops.sync();

  return ItineraryStops;
};