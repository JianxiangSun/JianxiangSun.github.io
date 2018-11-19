$(document).ready(function(){

  $("button#roll_up").click(function() {
       var table1_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appsW17MiCVbB2ngY/Top%209%20Museums%20in%20Hong%20Kong?api_key=keyAJxw8CDlX3pUko";
       var table1_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table1_items = [];
                  table1_items.push(value.fields.Museum_Name);
                  table1_items.push(value.fields.Admission_Fees);
                  table1_items.push(value.fields.Types);
                  table1_items.push(value.fields.Opening_Hours);
                  table1_items.push(value.fields.Address);
                  table1_items.push('<img src="' + value.fields.Image_url + '" width = "300px">');
                  table1_items.push(value.fields.Traveler_Overview);
                  table1_items.push(value.fields.Percentage_of_rating_Excellent);
                  table1_items.push(value.fields.Phone_Number);

                      table1_dataSet.push(table1_items);
                      console.log(table1_items);
               }); // end .each
              console.log(table1_dataSet);
         // Setup - add a text input to each footer cell
         $('#table1 tfoot td').each( function () {
             var title = $(this).text();
             $(this).html( '<input type="text" placeholder=" '+title+'" />' );
         } );

         $('#table1').DataTable( {

            data: table1_dataSet,
            scrollY:'100vh',
            "scrollX": true,
             scrollCollapse:true,
             paging:false,
             retrieve: true,
            columns: [
              { title: "Museum Name",
                defaultContent:"" },
              { title: "Admission Fees",
                  defaultContent:"" },
              { title: "Types",
                defaultContent:"" },
                { title: "Opening Hours",
                  defaultContent:""},
                { title: "Address",
                  defaultContent:""},
                { title: "Image",
                  defaultContent:""},
                { title: "Traveler Overview",
                defaultContent:""},
                { title: "% of rating “Excellent”",
                  defaultContent:""},
                { title: "Phone Number",
                  defaultContent:""},
             ]
         } );
  var table = $('#table1').DataTable();

  // Apply the search
  table.columns().every( function () {
      var that = this;

      $( 'input', this.footer() ).on( 'keyup change', function () {
          if ( that.search() !== this.value ) {
              that
                  .search( this.value )
                  .draw();
          }
      } );
  } );
} );
$("#search").show(3000);
$("#start_search").show(3000);

       var table2_items = [];
       var i = 0;
       var airtable_read_endpoint =
       "https://api.airtable.com/v0/appsW17MiCVbB2ngY/Top%209%20Museums%20in%20Hong%20Kong?api_key=keyAJxw8CDlX3pUko";
       var table2_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table2_items = [];
                      table2_items.push(value.fields.Museum_Name);
                      table2_items.push(value.fields.Percentage_of_rating_Excellent);
                      table2_dataSet.push(table2_items);
                      console.log(table2_items);
               }); // end .each
               console.log(table2_dataSet);
              $('#table2').DataTable( {
                  data: table2_dataSet,
                  retrieve: true,
                  ordering: false,
                  columns: [
                      { title: "Museum Name",
                        defaultContent:""},
                      { title: "Percentage of rating “Excellent” (%)",
                        defaultContent:""},
                    ] // rmf columns
                } ); // end dataTable

                var chart = c3.generate({
                  padding: {
                          right: 50,
                          left: 100,
                      },
                     size: {
                     height: 400,
                     width: 1060
                    },
                     data: {
                         columns: table2_dataSet,
                         type : 'bar',
                        labels: true
                     },

                     axis: {
                     x: {label: 'Museums'},
                         y: {
                           max: 70,
                           min: 0,
                           label: {
                           text: 'Percentage of rating “Excellent” (%)',
                           position: 'outer-top'
                         },

                           padding: {top:0, bottom:0}
                         }
                     },
                     tooltip: {
                     grouped: false
                     },

            } );
          }); // end .getJSON
       }); // end button

}); // document ready
