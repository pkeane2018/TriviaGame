window.onload = function game () {

    $("#start").click(function() {
     
      $("#start").hide();
  
      $("#amy").append("<br><br>");
      var tr = $("<div>").html("Time Remaining:&nbsp");
      $(tr).attr('id','tr');
      $("#amy").append(tr);
      var time = $("<div>").text("01:00");
      $(time).attr('id','time');
      $("#amy").append(time);
      $("#amy").append("<br><br>");
      var q1 = $("<div>").text("Question 1");
      $(q1).attr('id','q1');
      $(q1).attr('class','question');
      $("#amy").append(q1);

      var countdown;

      var clock = {
  
      time : 60,
  
      Converter: function(t) {
  
          var minutes = Math.floor(t / 60);
          var seconds = t - (minutes * 60);
      
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
      
          if (minutes === 0) {
            minutes = "00";
          }
          else if (minutes < 10) {
            minutes = "0" + minutes;
          }
      
          return minutes + ":" + seconds;
        },
  
      count: function() {
      
          clock.time--;
          console.log(clock.time);
          var converted = clock.Converter(clock.time);
          $("#time").text(converted);
      }
     
     }
  
      countdown = setInterval(clock.count, 1000);

    })
   

}
