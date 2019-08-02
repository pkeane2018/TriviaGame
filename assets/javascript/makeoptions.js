window.onload = function game() {

    function makeoptions(option_class, option_id, option_name, radio_id, option_value, option_text, cb) {
        var option_div = $("<div>");
        $(option_div).attr('class', 'form-check');
        $(option_div).attr('class', 'form-check-inline');
        $(option_div).attr('id', option_id);
        $(option_div).html("<input class='form-check-input " + option_class + " option' type='radio' name= " + option_name + " id=" + radio_id + " value=" + option_value + "></input>");
        $(option_div).append("<label class='form check-label' for=" + radio_id + ">" + option_text + "</label>");
        // $("#amy").append("<br><br>")
        // $("#amy").append(option_div);
        cb(option_div);
    };

    function addtoamy(thing) {
        $("#amy").append(thing)
    };

    $("#start").click(function () {

        $("#start").hide("slow", function () {

            makeoptions('q1option', 'option1', 'inlineRadioOptions', 'inlineRadio1', 'wrong', 'Barack Obama', addtoamy);

            // var q1 = $("<div>").text("Who is the youngest president in American history?");
            // $(q1).attr('id', 'q1');
            // $(q1).attr('class', 'question');
            // $("#amy").append(q1);
            // $("#amy").append("<br>");
            // $("#amy").append("<br><br>");
            // $("#amy").append("<h1>It worked!</h1>")
           
        // });
        console.log("HOOCHY MAMA!");
        // $("#amy").append(bob);
    });

}); 

};