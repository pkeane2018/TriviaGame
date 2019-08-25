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
            options: [{ option_text: 'Texas', value: 'wrong', radio_id: 'inlineRadio1' }, { option_text: 'Virgina', value: 'wrong', radio_id: 'inlineRadio2' }, { option_text: 'South Carolina', value: 'correct', radio_id: 'inlineRadio3' }, { option_text: 'Georgia', value: 'wrong', radio_id: 'inlineRadio4' }],
        },

        {
            name: 'question_4',
            question_text: "True or False - The seventh Ammendment to the Constitution bans cruel and unusual punishment.",
            option_class: 'q4option',
            radio_name: 'inlineRadioOptions4',
            options: [{ option_text: 'True', value: 'wrong', radio_id: 'inlineRadio1' }, { option_text: 'False', value: 'correct', radio_id: 'inlineRadio2' }],
        },

        {
            name: 'question_5',
            question_text: "In what year did the American Revolutionary War end?",
            option_class: 'q5option',
            radio_name: 'inlineRadioOptions5',
            options: [{ option_text: '1776', value: 'wrong', radio_id: 'inlineRadio1' }, { option_text: '1779', value: 'wrong', radio_id: 'inlineRadio2' }, { option_text: '1782', value: 'wrong', radio_id: 'inlineRadio3' }, { option_text: '1783', value: 'correct', radio_id: 'inlineRadio4' }],
        },
    ];

    function makeoptions(array_name, cb) {

        for (i = 0; i < array_name.length; i++) {
            var question_div = $("<div>");
            $(question_div).attr('class', 'question-div');
            var question_text = $("<p>");
            $(question_text).text(array_name[i].question_text);

            console.log($(question_text).text());

            var j = i + 1;
            j = j.toString();
            j = 'q' + j;
            $(question_text).attr('id', j);
            console.log(j);
            $(question_text).attr('class', 'question');
            // addtodiv(question_div, question_text);
            $(question_div).append(question_text);
            // $(question_div).append("<br>");

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
            };

            $(question_div).append(optionbox);
            cb($("#amy"), question_div);
        };

    };

    function addtodiv(parent_div, child_div) {
        $(parent_div).append(child_div);
        $(parent_div).append("<br>");
    };

    $("#start").click(function () {

        $("#start").hide("400", function () {

            $("#amy").append("<br><br>");
            var tr = $("<div>").html("Time Remaining:&nbsp");
            $(tr).attr('id', 'tr');
            $("#amy").append(tr);
            var time = $("<div>").text("01:00");
            $(time).attr('id', 'time');
            $("#amy").append(time);
            $("#amy").append("<br><br>");

            makeoptions(question_array, addtodiv);
            $(".question-div").attr("data-answered", false);

            trivia();

            function trivia() {

                var wrongcount = 0;
                var correctcount = 0;
                // var uacount = 0;
                var answer;

                function checkanswer(answer_param) {

                    console.log("The answer is " + answer_param);

                    if (answer_param === "wrong") {
                        
                        wrongcount++;
                        console.log("There are " + correctcount + " correct answers.")
                        console.log("There are " + wrongcount + " wrong answers.")
                    }

                    else if (answer_param === "correct") {
                        correctcount ++;
                        console.log("There are " + correctcount + " correct answers.");
                        console.log("There are " + wrongcount + " wrong answers.")
                    }

                    console.log("\n");
                }

                var countdown;
                var time = 20;

                function Converter(t) {
  
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
                  }

                  function count() {

                    if ( time > 0) {
                        time--;
                        var converted = Converter(time);

                        $("#time").text(converted);

                      }

                      else if (time === 0) {
                        clearInterval(countdown);
                        console.log("DONE");

                    var uacount = $("#amy div").filter(function() {
                        return ($(this).attr("data-answered") === "false");
                    }).length;

                    console.log("There were " + uacount + " unanswered questions.");

                    $("#tr").hide();
                    $("#time").hide();
                    $(".question-div").hide();
                    $("br").hide();

                    console.log("The question page elements are gone.")
                    $("#amy").append("<br><br>");
                    var gameover = $("<p>").text("Game over");
                    $(gameover).attr('id','gameover');
                    $("#amy").append(gameover);
                    $("#amy").append("<br>");
                    var correctans = $("<p>").html("Correct Answers:&nbsp;");
                    $(correctans).attr('id', 'correctans');
                    $("#amy").append(correctans);
                    var correctnum = $("<p>").html(correctcount);
                    $(correctnum).attr('id','correctnum');
                    $("#amy").append(correctnum);
                    $("#amy").append("<br>");
                    var incorrectans = $("<p>").html("Incorrect Answers:&nbsp;");
                    $(incorrectans).attr('id','incorrectans');
                    $("#amy").append(incorrectans);
                    var incorrectnum = $("<p>").html(wrongcount);
                    $(incorrectnum).attr('id','incorrectnum');
                    $("#amy").append(incorrectnum);
                    $("#amy").append("<br>");
                    var unanswered = $("<p>").html("Unanswered Questions:&nbsp;");
                    $(unanswered).attr('id','unanswered');
                    $("#amy").append(unanswered); 
                    var uanum = $("<p>").html(uacount);
                    $(uanum).attr('id', 'uanum');
                    $("#amy").append(uanum);  

                    }
                   
                  }

                  countdown = setInterval(count, 1000);

                  if (time > 0) {
                    $(".option").on("click", function () {

                        var question = $(this).parent().parent().parent();
                        console.log("Has the question already been answered? " + (question.attr("data-answered")));
                        console.log("The answer is " + answer);
    
                        if ((question.attr("data-answered")) === "false") {
                            answer = $(this).val();
                            console.log("HOOCHY MAMA!");
                        }
    
                        else if (((question.attr("data-answered")) === "true") && answer === "correct" ) {
                            correctcount--;
                            console.log(correctcount);
                        }
    
                        else if (((question.attr("data-answered")) === "true") && answer === "wrong") {
                            wrongcount--;
                            console.log(wrongcount);
                        }
    
                        $(this).parent().parent().parent().attr("data-answered", true);
                        console.log("Has the question been answered? " + (question.attr("data-answered")));
                        answer = $(this).val();
                        // console.log("The answer is " + answer);
    
                        checkanswer(answer);
                    });
                  }
            }
        })
    })
}