// use reactive Session variable in helper

Template.sedecontrast.helpers({ 

  contrasts_query: function(name,sede) {

    var startdate= Session.get('startd')
    var enddate= Session.get('endd')
  
    re=ReactiveMethod.call('query',name,sede,startdate,enddate);
    


    
    return {

  /*all:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name}).count(),
	sindona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"no"}).count(),
	condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si"}).count(),
	condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si",donacionentidad:false}).count(),
	condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si",donacionentidad:true}).count(),
	aprove:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"no",tipoampolla:"abierta"}).count()-Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si",tipoampolla:"nueva"}).count(),
	consumo:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,tipoampolla:"nueva"}).count(),
  */
  all: re.allc,
  condona_enf:re.condona_enf,
  condona_ent:re.condona_ent,
  condona_tot:re.condona_tot,
  sin_dona:re.sin_dona,
  consumo:re.consumo,
  apro:re.apro,
  name:name,
  start: startdate,
  
  


};
  }
});  

