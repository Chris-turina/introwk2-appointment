//var appStartTime
//var appEndTime

$(document).ready(function() {
  $("form#appointments").submit(function(event) {
    event.preventDefault();
   var fullName =$("input#fullname").val();
   var appDescription =$("input#appdescription").val();
   var appDate =$("input#appdate").val();
   var appStartTime =$("input#appstarttime").val();
   var appEndTime =$("input#appendtime").val();

   $(".fullname").text(fullName);
   $(".appdescription").text(appDescription);
   $(".appdate").text(appDate);
   $(".appstarttime").text(appStartTime);
   $(".appendtime").text(appEndTime);


   $("#appointments").hide();
   $("#title").hide();
   $(".toggle").show();
   $("#hideable").hide();

   var symptoms = $("#symptoms").val();
   $("#show-symptoms").show();

   var flavor = $("input:radio[name=flavor]:checked").val();

   $(".radio").show();




  });
});
