Template.visualizarestadistica.helpers({
	cont_hosp: [
    	{namec: "GADOVIST", sede:"HOSPITAL"},
    	{namec: "DOTAREM", sede:"HOSPITAL"},
    	{namec: "PRIMOVIST", sede:"HOSPITAL"}
  	],
  	cont_cdr: [
      {namec: "GADOVIST", sede:"CDR"},
      {namec: "DOTAREM", sede:"CDR"},
      {namec: "PRIMOVIST", sede:"CDR"},
  		{namec: "XENETIX_300", sede:"CDR"},
  		{namec: "XENETIX_350", sede:"CDR"},
  		{namec: "GASTROVIEW", sede:"CDR"},
  		{namec: "HEXABRIX_320", sede:"CDR"}

  	],
  	cont_80: [
  		{namec: "GADOVIST", sede:"La80"},
		  {namec: "DOTAREM", sede:"La80"},
		  {namec: "PRIMOVIST", sede:"La80"},
		  {namec: "MAGNEVIST", sede:"La80"}

  	],
      cont_pob: [
      {namec: "GADOVIST", sede:"POBLADO"},
      {namec: "DOTAREM", sede:"POBLADO"},
      {namec: "PRIMOVIST", sede:"POBLADO"}
    ],

      cont_all: [
      {namec: "GADOVIST", sede:/.*.*/},
      {namec: "DOTAREM", sede:/.*.*/},
      {namec: "PRIMOVIST", sede:/.*.*/},
      {namec: "MAGNEVIST", sede:/.*.*/},
      {namec: "XENETIX_300", sede:/.*.*/},
      {namec: "XENETIX_350", sede:/.*.*/},
      {namec: "GASTROVIEW", sede:/.*.*/},
      {namec: "HEXABRIX_320", sede:/.*.*/}
    ]
});
