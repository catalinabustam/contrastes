Meteor.methods({

query: function(name,seden,startdate,enddate){
var sede = new RegExp(seden)
return{
	 allc: Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name}).count(),
  	condona_enf:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si",donacionentidad:false}).count(),
  	condona_ent:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si",donacionentidad:true}).count(),
  	condona_tot:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si"}).count(),
  	sin_dona:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"no"}).count(),
  	consumo:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,tipoampolla:"nueva"}).count(),
  	apro:Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"no",tipoampolla:"abierta"}).count()-Contrasts.find({submitted: {$gte: startdate, $lt: enddate},sede:sede,nombre:name,donacion:"si",tipoampolla:"nueva"}).count(),
  	name:name,
  	sede:sede,
  	start: startdate,
  	end: enddate,
  	sede:seden
 }
}

  });