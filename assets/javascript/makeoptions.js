window.onload = function game() {

    var question_array = [
        {
            name: 'question_1',
            question_text: "Who is the youngest president in American history?",
            option_class: 'q1option',
            radio_name: 'inlineRadioOptions',
            options: [{ option_text: 'Barack Obama', value: 'wrong', radio_id: 'inlineRadio1' }, { option_text: 'Theodore Roosevelt', value: 'correct', radio_id: 'inlineRadio2' }, { option_text: 'John F. Kennedy', value: 'wrong', radio_id: 'inlineRadio3' }, { option_text: 'Abraham Lincoln', value: 'wrong', radio_id: 'inlineRadio4' }]
        },
        {
            name: 'question_2',
            question_text: "Which U.S. president was not born in the state of Virginia?",
            option_class: 'q2option',
            radio_name: 'inlineRadioOptions2',
            options: [{ option_text: 'John Adams', value: 'correct', radio_id: 'inlineRadio1' }, { option_text: 'Thomas Jefferson', value: 'wrong', radio_id: 'inlineRadio2' }, { option_text: 'James Monroe', value: 'wrong', radio_id: 'inlineRadio3' }, { option_text: 'Woodrow Wilson', value: 'wrong', radio_id: 'inlineRadio4' }],
        },

        {
            name: 'question_3',
            question_text: "What was the first state to secede from the Union before the Civil War?",
            option_class: 'q3option',
            radio_name: 'inlineRadioOptions3',
            options: [{option_text: 'Texas', value: 'wrong', radio_id: 'inlineRadio1'}, {option_text: 'Virgina', value: 'wrong', radio_id: 'inlineRadio2'}, {option_text: 'South Carolina', value: 'correct', radio_id: 'inlineRadio3' }, {option_text: 'Georgia', value: 'wrong', radio_id:'inlineRadio4'}],
        },

        {
            name: 'question_4',
            question_text: "True or False - The seventh Ammendment to the Constitution bans cruel and unusual punishment.",
            option_class: 'q4option',
            radio_name: 'inlineRadioOptions4',
            options: [{option_text: 'True', value: 'wrong', radio_id: 'inlineRadio1'}, {option_text: 'False', value: 'right', radio_id: 'inlineRadio2' }],
        },

        {
            name: 'question_5',
            question_text: "In what year did the American Revolutionary War end?",
            option_class: 'q5option',
            radio_name: 'inlineRadioOptions5',
            options: [{option_text: '1776', value: 'wrong', radio_id: 'inlineRadio1'}, {option_text: '1779', value: 'wrong', radio_id:'inlineRadio2'}, {option_text: '1782', value: 'wrong', radio_id: 'inlineRadio3'}, {option_text: '1783', value: 'correct', radio_id:'inlineRadio4'}],
        },
    ];

    //after looking at the last version of app.js, it seems that adding an option id, e.g. option1 is not necessary, so I won't include it here, may change that later if it seems to affect functionality

    // function makeoptions(option_class, option_id, option_name, radio_id, option_value, option_text, cb) {

    // function makeoptions(option_class, radio_name, radio_id, option_value, option_text, cb) {
    //     var option_div = $("<div>");
    //     $(option_div).attr('class', 'form-check');
    //     $(option_div).attr('class', 'form-check-inline');
    //     $(option_div).attr('id', option_id);
    //     $(option_div).html("<input class='form-check-input " + option_class + " option' type='radio' name= " + radio_name + " id=" + radio_id + " value=" + option_value + "></input>");
    //     $(option_div).append("<label class='form check-label' for=" + radio_id + ">" + option_text + "</label>");
    //     // $("#amy").append("<br><br>")
    //     // $("#amy").append(option_div);
    //     cb(option_div);
    // };

    function makeoptions(array_name, cb) {

        for (i = 0; i < array_name.length; i++) {
            var questiondiv = $("<div>");
            $(questiondiv).text(array_name[i].question_text);
            console.log($(questiondiv).text());
            var j = i + 1;
            j = j.toString();
            j = 'q' + j;
            $(questiondiv).attr('id', j);
            console.log(j);
            $(questiondiv).attr('class', 'question');
            // addtoamy(questiondiv);
            $("#amy").append(questiondiv);
            $("#amy").append("<br>");

            var optionbox = $("<div>");
            var x = i + 1;
            x = x.toString();
            var optionbox_id = 'optionbox' + x;
            $(optionbox).attr('id', optionbox_id);

            for (q = 0; q < array_name[i].options.length; q++) {
                var option_div = $("<div>");
                $(option_div).attr('class', 'form-check');
                $(option_div).attr('class', 'form-check-inline');
                $(option_div).html("<input class='form-check-input " + array_name[i].option_class + " option' type='radio' name= " + array_name[i].radio_name + " id=" + array_name[i].options[q].radio_id + " value=" + array_name[i].options[q].value + "></input>");
                $(option_div).append("<label class='form check-label' for=" + array_name[i].options[q].radio_id + ">" + array_name[i].options[q].option_text + "</label>");
                $(optionbox).append(option_div);
                // $("#amy").append("<br><br>")
                // $("#amy").append(option_div);
            };

            cb(optionbox);
        };

    };

    function addtoamy(thing) {
        $("#amy").append(thing);
        $("#amy").append("<br><br>");
    };

    $("#start").click(function () {

        $("#start").hide("slow", function () {

            // makeoptions('q1option', 'option1', 'inlineRadioOptions', 'inlineRadio1', 'wrong', 'Barack Obama', addtoamy);

            // makeoptions('q1option', 'inlineRadioOptions', 'inlineRadio1', 'wrong', 'Barack Obama', addtoamy);

            makeoptions(question_array, addtoamy);

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