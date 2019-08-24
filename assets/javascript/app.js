window.onload = function game () {

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
        options: [{option_text: 'True', value: 'wrong', radio_id: 'inlineRadio1'}, {option_text: 'False', value: 'correct', radio_id: 'inlineRadio2' }],
    },

    {
        name: 'question_5',
        question_text: "In what year did the American Revolutionary War end?",
        option_class: 'q5option',
        radio_name: 'inlineRadioOptions5',
        options: [{option_text: '1776', value: 'wrong', radio_id: 'inlineRadio1'}, {option_text: '1779', value: 'wrong', radio_id:'inlineRadio2'}, {option_text: '1782', value: 'wrong', radio_id: 'inlineRadio3'}, {option_text: '1783', value: 'correct', radio_id:'inlineRadio4'}],
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

    $("#start").click(function() {
     
      $("#start").hide("400", function() {
  
      $("#amy").append("<br><br>");
      var tr = $("<div>").html("Time Remaining:&nbsp");
      $(tr).attr('id','tr');
      $("#amy").append(tr);
      var time = $("<div>").text("01:00");
      $(time).attr('id','time');
      $("#amy").append(time);
      $("#amy").append("<br><br>");

      makeoptions(question_array, addtodiv);

  function trivia() {

    $(".question").attr("data-answered", false);

    var wrongcount = 0;
    var correctcount = 0;
    var uacount = 0;

    var a1blank = 0;
    var a2blank = 0;
    var a3blank = 0;
    var a4blank = 0;
    var a5blank = 0;

    var a1answered = false;
    var a2answered = false;
    var a3answered = false;
    var a4answered = false;
    var a5answered = false;
  
      var timeup = false;

      console.log(timeup);
     
      var countdown;
  
      var time = 60;
  
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
      
        else if (time == 0) {

        clearInterval(countdown);
        console.log("DONE");

        console.log("How now brown cow");

        var foo = document.getElementsByClassName("q1option");
                        for (var i = 0; i < foo.length; i++) {
                            if (foo[i].checked) {
                            a1answered = true;
                            console.log("question 1 was answered.")
                            }
                        }
                        console.log(a1answered);

                        if (a1answered == false) 
                            {
                                a1blank = 1;
                                console.log("QUESTION 1 NOT ANSWERED")
                            }
                    
        var moo = document.getElementsByClassName("q2option");
                        for (var i = 0; i < moo.length; i++) {
                                if (moo[i].checked) {
                                a2answered = true;
                                console.log("question 2 was answered.")
                                }
                            }
                            console.log(a2answered);
    
                            if (a2answered == false) 
                                {
                                    a2blank = 1;
                                }

        var goo = document.getElementsByClassName("q3option");
                        for (var i = 0; i < goo.length; i++) {
                                    if (goo[i].checked) {
                                    a3answered = true;
                                    console.log("question 3 was answered.")
                                    }
                                }
                                console.log(a3answered);
        
                                if (a3answered == false) 
                                    {
                                        a3blank = 1;
                                    }

        var boo = document.getElementsByClassName("q4option");
                            for (var i = 0; i < boo.length; i++) {
                                        if (boo[i].checked) {
                                        a4answered = true;
                                        console.log("question 4 was answered.")
                                        }
                                    }
                                    console.log(a4answered);
            
                                    if (a4answered == false) 
                                        {
                                            a4blank = 1;
                                        }     

        var hoo = document.getElementsByClassName("q5option");
                                for (var i = 0; i < hoo.length; i++) {
                                                    if (hoo[i].checked) {
                                                    a5answered = true;
                                                    console.log("question 5 was answered.")
                                                    }
                                                }
                                                console.log(a5answered);
                        
                                                if (a5answered == false) 
                                                    {
                                                        a5blank = 1;
                                                        console.log(a5blank);
                                                    }     
                    console.log("UNDERPANTS");
                    uacount += a1blank + a2blank + a3blank + a4blank + a5blank;
                   
                console.log("There were" + " " + uacount + " " + "unanswered questions");

                $("#tr").hide();
                $("#time").hide();
                $(".question").hide();
                $("#optionbox1").hide();
                $("#optionbox2").hide();
                $("#optionbox3").hide();
                $("#optionbox4").hide();
                $("#optionbox5").hide();
                $(".form-check-inline").hide();
                $(".option").hide();
                $(".form-check-label").hide();
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

var a1chosen = false;  
var a2chosen = false;
var a3chosen = false;
var a4chosen = false;
var a5chosen = false;

var answer1;
var answer2;
var answer3;
var answer4;
var answer5;

$(".option").on("click", function() {

  console.log("on click function started")
  
   var wrong;
   var correct;
   
   console.log(answer1);

  if ($(this).hasClass("q1option")) {
    
    correct = 0;
    wrong = 0;

    if (a1chosen == false) { 
      
      answer1 = $(this).val();
      console.log(answer1);
      a1chosen = true;
      console.log("an answer for q1 has been chosen");
    
      if (answer1 == "wrong") {
        wrong = 1;
        console.log("The answer was wrong");
    }
      else if (answer1 == "correct") {
        correct = 1;
        console.log("The answer was correct");
      }
      

    }

    else if ((a1chosen == true) && answer1 =="correct") {

      console.log(answer1);
      correctcount--;
      console.log(correctcount);
      console.log("made it here");

    }

      else if ((a1chosen == true) && answer1 == "wrong") {
        
        console.log(answer1);
        wrongcount--;
        console.log(wrongcount);
        console.log("made it here too");
      }

      answer1 = $(this).val();
      console.log(answer1);
      a1chosen = true;
    
      if (answer1 == "wrong") {
        wrong = 1;
        console.log("The answer was wrong");

    }
      else if (answer1 == "correct") {
        correct = 1;
        console.log("The answer was correct");
      }

     
          wrongcount += wrong;
          console.log(wrongcount);
          correctcount += correct;
          console.log(correctcount);
          console.log(a1chosen);
          console.log(answer1);

          }
          
  else if ($(this).hasClass("q2option")) {
    
            correct = 0;
            wrong = 0;
        
            if (a2chosen == false) { 
              
              answer2 = $(this).val();
              console.log(answer2);
              a2chosen = true;
              console.log("an answer for q2 has been chosen");
            
              if (answer2 == "wrong") {
                wrong = 1;
                console.log("The answer was wrong");
            }
              else if (answer2 == "correct") {
                correct = 1;
                console.log("The answer was correct");
              }
              
        
            }
        
            else if ((a2chosen == true) && answer2 =="correct") {
        
              console.log(answer2);
              correctcount--;
              console.log(correctcount);
              console.log("made it here")
        
            }
        
              else if ((a2chosen == true) && answer2 == "wrong") {
                console.log(answer2);
                wrongcount--;
                console.log(wrongcount);
                console.log("made it here too");
              }
        
              answer2 = $(this).val();
              console.log(answer2);
              a1chosen = true;
            
              if (answer2 == "wrong") {
                wrong = 1;
                console.log("The answer was wrong");
        
            }
              else if (answer2 == "correct") {
                correct = 1;
                console.log("The answer was correct");
              }
        
             
                  wrongcount += wrong;
                  console.log(wrongcount);
                  correctcount += correct;
                  console.log(correctcount);
                  console.log(a2chosen);
                  console.log(answer2);


        
                  }
            
    else if ($(this).hasClass("q3option")) {
    
                    correct = 0;
                    wrong = 0;
                
                    if (a3chosen == false) { 
                      
                      answer3 = $(this).val();
                      console.log(answer3);
                      a3chosen = true;
                    
                      if (answer3 == "wrong") {
                        wrong = 1;
                        console.log("The answer was wrong");
                    }
                      else if (answer3 == "correct") {
                        correct = 1;
                        console.log("The answer was correct");
                      }
                      
                
                    }
                
                    else if ((a3chosen == true) && answer3 =="correct") {
                
                      console.log(answer3);
                      correctcount--;
                      console.log(correctcount);
                      console.log("made it here");
                
                    }
                
                      else if ((a3chosen == true) && answer3 == "wrong") {
                        
                        console.log(answer3);
                        wrongcount--;
                        console.log(wrongcount);
                        console.log("made it here too");
                      }
                
                      answer3 = $(this).val();
                      console.log(answer3);
                      a3chosen = true;
                    
                      if (answer3 == "wrong") {
                        wrong = 1;
                        console.log("The answer was wrong");
                
                    }
                      else if (answer3 == "correct") {
                        correct = 1;
                        console.log("The answer was correct");
                      }
                
                     
                          wrongcount += wrong;
                          console.log(wrongcount);
                          correctcount += correct;
                          console.log(correctcount);
                          console.log(a3chosen);
                          console.log(answer3);
                
                          }

     else if ($(this).hasClass("q4option")) {
    
                            correct = 0;
                            wrong = 0;
                        
                            if (a4chosen == false) { 
                              
                              answer4 = $(this).val();
                              console.log(answer4);
                              a4chosen = true;
                            
                              if (answer4 == "wrong") {
                                wrong = 1;
                                console.log("The answer was wrong");
                            }
                              else if (answer4 == "correct") {
                                correct = 1;
                                console.log("The answer was correct");
                              }
                              
                        
                            }
                        
                            else if ((a4chosen == true) && answer4 =="correct") {
                        
                              console.log(answer4);
                              correctcount--;
                              console.log(correctcount);
                              console.log("made it here");
                        
                            }
                        
                              else if ((a4chosen == true) && answer4 == "wrong") {
                                
                                console.log(answer4);
                                wrongcount--;
                                console.log(wrongcount);
                                console.log("made it here too");
                              }
                        
                              answer4 = $(this).val();
                              console.log(answer4);
                              a4chosen = true;
                            
                              if (answer4 == "wrong") {
                                wrong = 1;
                                console.log("The answer was wrong");
                        
                            }
                              else if (answer4 == "correct") {
                                correct = 1;
                                console.log("The answer was correct");
                              }
                        
                             
                                  wrongcount += wrong;
                                  console.log(wrongcount);
                                  correctcount += correct;
                                  console.log(correctcount);
                                  console.log(a4chosen);
                                  console.log(answer4);
                        
                                  }

     else if ($(this).hasClass("q5option")) {
    
                                    correct = 0;
                                    wrong = 0;
                                
                                    if (a5chosen == false) { 
                                      
                                      answer5 = $(this).val();
                                      console.log(answer5);
                                      a5chosen = true;
                                    
                                      if (answer5 == "wrong") {
                                        wrong = 1;
                                        console.log("The answer was wrong");
                                    }
                                      else if (answer5 == "correct") {
                                        correct = 1;
                                        console.log("The answer was correct");
                                      }
                                      
                                
                                    }
                                
                                    else if ((a5chosen == true) && answer5 == "correct") {
                                
                                      console.log(answer5);
                                      correctcount--;
                                      console.log(correctcount);
                                      console.log("made it here");
                                
                                    }
                                
                                      else if ((a5chosen == true) && answer5 == "wrong") {
                                        
                                        console.log(answer5);
                                        wrongcount--;
                                        console.log(wrongcount);
                                        console.log("made it here too");
                                      }
                                
                                      answer5 = $(this).val();
                                      console.log(answer5);
                                      a5chosen = true;
                                    
                                      if (answer5 == "wrong") {
                                        wrong = 1;
                                        console.log("The answer was wrong");
                                
                                    }
                                      else if (answer5 == "correct") {
                                        correct = 1;
                                        console.log("The answer was correct");
                                      }
                                     
                                          wrongcount += wrong;
                                          console.log(wrongcount);
                                          correctcount += correct;
                                          console.log(correctcount);
                                          console.log(a5chosen);
                                          console.log(answer5);
                                
                                          }

                })
  
    }   


};

  trivia();

    })

  })

}