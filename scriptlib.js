$(document).ready(function(){
  var  items = [];
  var i = 0;
  var airtable_read_endpoint = "https://api.airtable.com/v0/appf1f9Jo9tPha7wJ/museum?api_key=keyLZQGPBz655pCmy";
  var dataSet = [];
  $.getJSON(airtable_read_endpoint, function(result) {
         $.each(result.records, function(key,value) {
           items = [];
           items.push(value.fields.ranking_by_us);
           items.push(value.fields.name);
           items.push('<img src="' + value.fields.image_url + '" width = "80px">');
            items.push(value.fields.suggested_duration);
            items.push(value.fields.rough_add);
            items.push(value.fields.type);
            items.push(value.fields.opening_hours);
            items.push(value.fields.contact_number);


            dataSet.push( items);
          }); // end .each
       $("#table1").DataTable( {
           data:  dataSet,
           scrollY:'100vh',
           "scrollX": true,
           scrollCollapse:true,
           retrieve: true,
           columns: [
             { title: "Ranking",
                 defaultContent:"" },
             { title: "Museum Name",
               defaultContent:"" },
             { title: "Image",
               defaultContent:""},
             { title: "Suggested Duration",
             defaultContent:""},
             { title: "Address",
               defaultContent:"" },
             { title: "Types",
               defaultContent:"" },
             { title: "Opening Hours",
               defaultContent:""},
             { title: "Contact Number",
               defaultContent:""},
            ],
            initComplete: function () {
             this.api().columns().every( function () {
             var column = this;
             var select = $('<select><option value=""></option></select>')
                 .appendTo( $(column.footer()).empty() )
                 .on( 'change', function () {
                     var val = $.fn.dataTable.util.escapeRegex(
                         $(this).val()
                     );

                     column
                         .search( val ? '^'+val+'$' : '', true, false )
                         .draw();
                 } );

             column.data().unique().sort().each( function ( d, j ) {
                 select.append( '<option value="'+d+'">'+d+'</option>' )
             } );
             } );
             }
             } );
        }); // end .getJSON


              $("button#get_result").click(function() {
              var table3_items = [];
              var i = 0;
              var airtable_read_endpoint =
              "https://api.airtable.com/v0/appDdtSXGZCSxIRLx/The%20Quality%20of%20Museums?api_key=keyLZQGPBz655pCmy";
              var table3_dataSet = [];
              $.getJSON(airtable_read_endpoint, function(result) {
                     $.each(result.records, function(key,value) {
                         table3_items = [];
                             table3_items.push(value.fields.Quality);
                             table3_items.push(value.fields.Quantity);

                             table3_dataSet.push(table3_items);
                             console.log(table3_items);
                      }); // end .each
                      console.log(table3_dataSet);
                     $('#table3').DataTable( {
                         data: table3_dataSet,
                         retrieve: true,
                         ordering: false,
                         columns: [
                             { title: "Museum Quality",
                               defaultContent:""},
                             { title: "Museum Quantity",
                               defaultContent:""},
                           ] // rmf columns
                       } ); // end dataTable

                var chart = c3.generate({

                     size: {
                     height: 400,
                     width: 1060
                    },
                     data: {
                     columns: table3_dataSet,
                     type : 'bar',
                     labels: true
                     },

                     axis: {
                     x: {label: 'Museums Quality'},
                     y: {label: 'Quantity'},
                     },
                     tooltip: {
                     grouped: false
                     },

            } );
            setTimeout(function () {
                chart.transform('pie', table3_dataSet);
            }, 1000);


          }); // end .getJSON
  });// end button
}); // document ready
