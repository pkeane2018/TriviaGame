window.onload = function game () {

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

}
