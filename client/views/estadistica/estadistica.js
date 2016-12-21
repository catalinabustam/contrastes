Template.estadistica.rendered = function () {

  
  $(document).ready(function() {

    Session.setDefault("startd", moment().subtract(1, 'month').format('MMMM D, YYYY'));
    Session.setDefault("endd", moment().format('MMMM D, YYYY'));

    $('#reportdate span').html(Session.get("startd") + ' - ' + Session.get("endd"));
 
    $('#reportdate').daterangepicker({
        format: 'MM/DD/YYYY',
        startDate: moment().subtract(1, 'month'),
        endDate: moment(),
        minDate: '01/01/2012',
        maxDate: '12/31/2017',
        showDropdowns: true,
        showWeekNumbers: true,
        timePicker: false,
        timePickerIncrement: 1,
        timePicker12Hour: true,
        ranges: {
           'Hoy': [moment(), moment()],
           'Ayer': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Últimos 7 Dias': [moment().subtract(6, 'days'), moment()],
           'Últimos 30 Dias': [moment().subtract(29, 'days'), moment()],
           'Este Mes': [moment().startOf('month'), moment().endOf('month')],
           'Mes Anterior': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        opens: 'center',
        drops: 'down',
        buttonClasses: ['btn', 'btn-sm'],
        applyClass: 'btn-primary',
        cancelClass: 'btn-default',
        separator: ' to ',
        locale: {
            applyLabel: 'Submit',
            cancelLabel: 'Cancel',
            fromLabel: 'From',
            toLabel: 'To',
            customRangeLabel: 'Custom',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            firstDay: 1
        } 
      },
        function(start, end, label) {
          console.log(start.toISOString(), end.toISOString(), label);
          $('#reportdate span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
          Session.set("startd", start._d);
          Session.set("endd", end._d);
          console.log(start._d);
          console.log(end._d);
         
        });
    
  });

};


//Template.estadistica.events({
//	        'click button.save-estadisticaDialogue': function(e, tmpl) {
//
//          // Get the date range selection from the session
//					var start = $('#reportdate').data("showEstadisticaDialogue_dateRangeStart");
//					var end = $('#reportdate').data("showEstadisticaDialogue_dateRangeEnd");
//
//          // Do something with the dates
//
//          // Clear the dates from the session now that we are done with them
//					          Session.set("showEstadisticaDialogue_dateRangeStart","");
//					          Session.set("showEstadisticaDialogue_dateRangeEnd","");
//
//          // Close the dialogue
//					          Session.set("showEstadisticaDialogue", false);
//				        }             
//				      });//
