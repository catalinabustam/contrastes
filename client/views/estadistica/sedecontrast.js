Template.sedecontrast.helpers({ 

  contrasts_query: function(name, sede) {
    var startdate= Session.get('startd')
    var enddate= Session.get('endd')
    return {

  /*all:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name}).count(),
	sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"no"}).count(),
	condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si"}).count(),
	condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si",donacionentidad:false}).count(),
	condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si",donacionentidad:true}).count(),
	aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"no",tipoampolla:"abierta"}).count()-Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si",tipoampolla:"nueva"}).count(),
	consumo:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,tipoampolla:"nueva"}).count(),
  */
  all: Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name}).count(),
  condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si",donacionentidad:false}).count(),
  condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si",donacionentidad:true}).count(),
  condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si"}).count(),
  sin_dona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"no"}).count(),
  consumo:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,tipoampolla:"nueva"}).count(),
  apro:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"no",tipoampolla:"abierta"}).count()-Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si",tipoampolla:"nueva"}).count(),
  name:name,
  start: startdate,
  end: enddate


};
  }
});  

