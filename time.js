//eq= myTime(m) - timeZone(t) = gTime
//    (if gTime>24 == (gTime-12))
//    newTime(n) - gTime = newZone(z)
jQuery(document).ready(function($){
  $("form").submit(function(event){
    event.preventDefault();
    console.log("form submitted!");

  });
  $("#button").click(function(){
  var m = $("#myTime").val();
  var t = $("#timeZone").val();

  var g = (m - t);
  var gAdjusted = ((m - t) - 12);
  var gTime;
    if (g >= 24) {
      gTime = gAdjusted;
    } else {
      gTime = g;
    };
    var n = $("#newTime").val();
    /*var nAdjusted = (n - 12);
    var usualTime;
      if (n >= 24) {
        usualTime = nAdjusted;
      } else {
        usualTime = n;
      };*/
    var z = (n - gTime);

  var zoneResult;
  if ((z == -11) || (z == 13)){
    zoneResult = ("Alofi, Nieue");
  } else if ((z == -10) || (z== 14)){
    zoneResult = ("Honolulu, Hawai'i");
  } else if (z == -9) {
    zoneResult = ("Adak, Alaska");
  } else if (z == -8) {
    zoneResult = ("Anchorage, Alaska");
  } else if (z == -7) {
    zoneResult = ("Anchorage, Alaska");
  } else if (z == -6) {
    zoneResult = ("Guatamala");
  } else if (z == -5) {
    zoneResult = ("Kingston, Jamaica");
  } else if (z == -4) {
    zoneResult = ("Havana, Cuba");
  } else if (z == -3) {
    zoneResult = ("Halifax, Canada");
  } else if (z == -2) {
    zoneResult = ("King Edward Point, South Georgia/Sandwich Islands");
  } else if (z == -1) {
    zoneResult = ("Ittoqqortoormiit, Greenland");
  } else if (z == 0) {
    zoneResult = ("Reykjavik, Iceland");
  } else if (z == 1) {
    zoneResult = ("Amsterdam, The Netherlands");
  } else if (z == 2) {
    zoneResult = ("Cairo, Egypt");
  } else if (z == 3) {
    zoneResult = ("Baghdad, Iraq");
  } else if (z == 4) {
    zoneResult = ("Dubai, UAE");
  } else if (z == 5) {
    zoneResult = ("Islamabad, Pakistan");
  } else if (z == 6) {
    zoneResult = ("Thimphu, Bhutan");
  } else if (z == 7) {
    zoneResult = ("Phnom Penh, Cambodia");
  } else if ((z == 8) || (z == -16)) {
    zoneResult = ("Kuala Lumpur, Malasia");
  } else if ((z == 9) || (z == -15)) {
    zoneResult = ("Tokyo, Japan");
  } else if ((z == 10) || (z == -14)) {
    zoneResult = ("Port Moresby, Papua New Guinea");
  } else if ((z == 11) || (z == -13)) {
    zoneResult = ("Canberra, Australia");
  } else if ((z == 12) || (z == -12)) {
    zoneResult = ("Tarawa, Kiribati");
  }
  else {
    zoneResult = ("You are no where!");
  };

  $("#result").text("In " + zoneResult + "!  ");
  $("#result2").text("So, if someone asks, you're not late, or early, you're on " + zoneResult + " time.");
  console.log (m);
  console.log (t);
  console.log (gTime);
  console.log (n);
  console.log (z);
});

    //$("select").change(showTime);



//var timeArray = [AKDT, AST, CST, CKT, EDT, EST, HAST, NZDT, NUT, PDT, PST];
});
