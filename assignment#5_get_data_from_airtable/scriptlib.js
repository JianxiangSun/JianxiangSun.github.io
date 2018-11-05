function free() {
         document.getElementById("sorry").style.display = 'block';

}


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
                   table1_items.push('<td><img src="' + value.fields.Images2 + '" style="width: 350px;"/></td>');
                   table1_items.push(value.fields.Traveler_Overview);
                   table1_items.push(value.fields.Percentage_of_rating_Excellent);
                   table1_items.push(value.fields.Opening_Hours);
                   table1_items.push(value.fields.Phone_Number);
                   table1_items.push(value.fields.Address);

                   table1_dataSet.push(table1_items);
                   console.log(table1_items);

            }); // end .each

         $('#table1').DataTable( {
            data: table1_dataSet,
            scrollY:'80vh',
            "scrollX": true,
            scrollCollapse:false,
            paging:false,
             retrieve: true,
             columns: [
                 { title: "Museum Name",
                   defaultContent:""},
                 { title: "Admission Fees",
                     defaultContent:"" },
                 { title: "Types",
                   defaultContent:"" },
                   { title: "Image",
                     defaultContent:""},
                 { title: "Traveler Overview",
                   defaultContent:""},
                   { title: "% of rating “Excellent”",
                     defaultContent:""},
                 { title: "Opening Hours",
                   defaultContent:""},
                   { title: "Phone Number",
                     defaultContent:""},
                     { title: "Address",
                       defaultContent:""},


             ]
         } );
    }); // end .getJSON



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
                          top: 100,
                          right: 200,
                          bottom: 100,
                          left: 200,
                      },
                     size: {
                     height: 350,
                     width: 1260
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
                     donut: {
                         title: "Tasks for Each Stage:",
                     }
                 });

          }); // end .getJSON
       }); // end button

        // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {

}); // document ready
