Template.visualizarestadistica.helpers({
	cont_hosp: [
    	{namec: "GADOVIST", sede:"HOSPITAL"},
    	{namec: "DOTAREM", sede:"HOSPITAL"},
    	{namec: "PRIMOVIST", sede:"HOSPITAL"},
      {namec: "MULTIHANCE_05", sede:"HOSPITAL"}
  	],
  	cont_cdr: [
      {namec: "GADOVIST", sede:"CDR"},
      {namec: "DOTAREM", sede:"CDR"},
      {namec: "PRIMOVIST", sede:"CDR"},
  		{namec: "XENETIX_300", sede:"CDR"},
  		{namec: "XENETIX_350", sede:"CDR"},
  		{namec: "GASTROVIEW", sede:"CDR"},
  		{namec: "MULTIHANCE_05", sede:"CDR"}

  	],
  	cont_80: [
  		{namec: "GADOVIST", sede:"La80"},
		  {namec: "DOTAREM", sede:"La80"},
		  {namec: "PRIMOVIST", sede:"La80"},
		  {namec: "MAGNEVIST", sede:"La80"},
      {namec: "MULTIHANCE_05", sede:"La80"}

  	],
      cont_pob: [
      {namec: "GADOVIST", sede:"POBLADO"},
      {namec: "DOTAREM", sede:"POBLADO"},
      {namec: "PRIMOVIST", sede:"POBLADO"},
      {namec: "MULTIHANCE_05", sede:"POBLADO"}
    ],

      cont_all: [
      {namec: "GADOVIST", sede:".*.*"},
      {namec: "DOTAREM", sede:".*.*"},
      {namec: "PRIMOVIST", sede:".*.*"},
      {namec: "MAGNEVIST", sede:".*.*"},
      {namec: "XENETIX_300", sede:".*.*"},
      {namec: "XENETIX_350", sede:".*.*"},
      {namec: "GASTROVIEW", sede:".*.*"},
      {namec: "MULTIHANCE_05", sede:".*.*"}
    ]
});

Template.visualizarestadistica.rendered = function () {
    $(document).ready(function () {

    function exportTableToCSV($table1, $table2, $table3, $table4, $table5, filename) {
       
        var $rows1 = $table1.find('tr:has(td)')
        var $rows2 = $table2.find('tr:has(td)')
        var $rows3 = $table3.find('tr:has(td)')
        var $rows4 = $table4.find('tr:has(td)')
        var $rows5 = $table5.find('tr:has(td)')
       


        console.log($rows1)

        function rowmap($rows){



            // Temporary delimiter characters unlikely to be typed by keyboard
            // This is to avoid accidentally splitting the actual contents
            tmpColDelim = String.fromCharCode(11), // vertical tab character
            tmpRowDelim = String.fromCharCode(0), // null character

            // actual delimiter characters for CSV format
            colDelim = '","',
            rowDelim = '"\r\n"',

            // Grab text from table into CSV formatted string
            csv = '"' + $rows.map(function (i, row) {
                var $row = $(row),
                    $cols = $row.find('td');

                return $cols.map(function (j, col) {
                    var $col = $(col),
                        text = $col.text();

                    return text.replace(/"/g, '""'); // escape double quotes

                }).get().join(tmpColDelim);

            }).get().join(tmpRowDelim)
                .split(tmpRowDelim).join(rowDelim)
                .split(tmpColDelim).join(colDelim) + '"',

                console.log(csv)
                return csv

              }
              header="Nombre, Donacion enfermeria, Donacion Entidad, Total donados, Total cobrados, Total, Inventario consumo, Inventario existencia, Aprovechamiento"

              csv=header + "\r\n" + "HOSPITAL"+"\r\n"+rowmap($rows1)+ "\r\n" + "POBLADO"+"\r\n"+ rowmap($rows2)+ "\r\n" + "CDR"+"\r\n"+rowmap($rows3)+ "\r\n"+ "LA80"+"\r\n"+ rowmap($rows4)+ "\r\n" + "TODAS LAS SEDES"+"\r\n"+ rowmap($rows5)
              console.log(csv)





            // Data URI
            csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);

        $(this)
            .attr({
            'download': filename,
                'href': csvData,
                'target': '_blank'
        });
    }

    // This must be a hyperlink
    $(".export").on('click', function (event) {
        // CSV
        exportTableToCSV.apply(this, [$('#dhospital>table'),$('#dpoblado>table'),$('#dcdr>table'),$('#d80>table'), $('#dall>table'), 'estadisticas_contraste.csv']);
 
        // IF CSV, don't do event.preventDefault() or return false
        // We actually need this to be a typical hyperlink
    });
});
};

