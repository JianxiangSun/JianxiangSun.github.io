$(document).ready(function(){
  $("button#english").click(function() {
  $("#versionchoice").slideToggle(300);
$("#mainland").slideToggle(300);
  });
});

$(document).ready(function(){
$("button#airtable").click(function() {
    $(".airtable-embed").slideToggle(300);
    $("button#api").slideToggle(300);
});

$("button#mainland").click(function() {
    $("#versionchoice2").slideToggle(300);
    $("#english").slideToggle(300);
});

$("button#airtable2").click(function() {
    $(".airtable-embed2").slideToggle(300);
    $("button#api2").slideToggle(300);
});


  $("button#get_data").click(function() {
  var airtable_read_endpoint = "https://api.airtable.com/v0/appM38HXlEVhxmnqx/Design%20Projects?api_key=keyTcsTzckqyBTlk8";

  $.getJSON(airtable_read_endpoint, function(data) {
          $("#items").append('<div class="row">');
         $.each(data.records.fields, function(key,value) {
             // $("#lesson").append("<li>"+value.title+"</li>");
             $("#items").append('<div class=".col-md-4">');
             $("#items").append("<h4>"+value.Name+"</h4>");
              $("#items").append('</div>');
             $("#items").append('<div class=".col-md-4">');
             $("#items").append("<p>"+value.About +"</p>");
              $("#items").append('</div>');
             $("#items").append('<div class=".col-md-4">');
             $("#items").append("<p>"+value.CreatedTime +"</p>");
             $("#items").append('</div>');
       }); // end .each
        }); // end .getJSON
   }); // end button

}); // document ready
