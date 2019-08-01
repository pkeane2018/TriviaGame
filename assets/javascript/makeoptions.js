window.onload = function game() {

    // function makeoptions(option_class, option_id, option_name, radio_id, option_value, option_text) {
    //     var option_div = $("div");
    //     $(option_div).attr('class', 'form-check');
    //     $(option_div).attr('class', 'form-check-inline');
    //     $(option_div).attr('id', option_id);
    //     $(option_div).html("<input class='form-check-input " + option_class + " option' type='radio' name= " + option_name + " id=" + radio_id + " value=" + option_value + "></input>");
    //     $(option_div).append("<label class='form check-label' for=" + radio_id + ">" + option_text + "</label>");
    //     $("#amy").append("<br><br>")
    //     $("#amy").append(option_div);
    // };

    $("#start").click(function () {

        $("#start").hide("slow", function () {
            // makeoptions('q1option', 'option1', 'inlineRadioOptions', 'inlineRadio1', 'wrong', 'Barack Obama');
            $("#amy").append("<br><br>");
            $("#amy").append("<h1>It worked!</h1>")
        });

    }

    )

};