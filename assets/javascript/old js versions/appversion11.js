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

      
      var q1 = $("<div>").text("Who is the youngest president in American history?");
      $(q1).attr('id','q1');
      $(q1).attr('class','question');
      $("#amy").append(q1);
      $("#amy").append("<br>");
      
      var optionbox1 = $("<div>");
      $(optionbox1).attr('id','optionbox1');

      var q1option1 = $("<div>");
      $(q1option1).attr('class','form-check');
      $(q1option1).attr('class','form-check-inline');
      $(q1option1).attr('id' ,'option1');
      $(q1option1).html( "<input class='form-check-input q1option option' type='radio' name='inlineRadioOptions' id= 'spongebob' value='wrong'></input>");
      $(q1option1).append("<label class='form-check-label' for='inlineRadio1'>Barack Obama</label>");
      $(optionbox1).append(q1option1);
      
      
      var q1option2 = $("<div>");
      $(q1option2).attr('class','form-check');
      $(q1option2).attr('class','form-check-inline');
      $(q1option2).attr('id' ,'option2');
      $(q1option2).html( "<input class='form-check-input q1option option' type='radio' name='inlineRadioOptions' id='inlineRadio2' value='correct'></input>");
      $(q1option2).append("<label class='form-check-label' for='inlineRadio2'>Theodore Roosevelt</label>");
      $(optionbox1).append(q1option2);
      
      var q1option3 = $("<div>");
      $(q1option3).attr('class','form-check');
      $(q1option3).attr('class','form-check-inline');
      $(q1option3).attr('id' ,'option3');
      $(q1option3).html( "<input class='form-check-input q1option option' type='radio' name='inlineRadioOptions' id='inlineRadio3' value='wrong'></input>");
      $(q1option3).append("<label class='form-check-label' for='inlineRadio3'>John F. Kennedy</label>");
      $(optionbox1).append(q1option3);
      

      var q1option4 = $("<div>");
      $(q1option4).attr('class','form-check');
      $(q1option4).attr('class','form-check-inline');
      $(q1option4).attr('id' ,'option4');
      $(q1option4).html( "<input class='form-check-input q1option option' type='radio' name='inlineRadioOptions' id='inlineRadio4' value='wrong'></input>");
      $(q1option4).append("<label class='form-check-label' for='inlineRadio4'>Abraham Lincoln</label>");
      $(optionbox1).append(q1option4);
  
      $("#amy").append(optionbox1);
      $("#amy").append("<br>")
      
      

      var q2 = $("<div>").html("Which U.S. president was not born in the state of Virginia?");
      $(q2).attr('id','q2');
      $(q2).attr('class','question');
      $("#amy").append(q2);
      $("#amy").append("<br>");
      
      
      var optionbox2 = $("<div>");
      $(optionbox2).attr('id','optionbox2');

      var q2option1 = $("<div>");
      $(q2option1).empty();
      $(q2option1).attr('class','form-check');
      $(q2option1).attr('class','form-check-inline');
      $(q2option1).html( "<input class='form-check-input option q2option' type='radio' name='inlineRadioOptions2' id='inlineRadio1' value='correct'></input>");
      $(q2option1).append("<label class='form-check-label' for='inlineRadio1'>John Adams</label>");
      $(optionbox2).append(q2option1);
      
      
      var q2option2 = $("<div>");
      $()
      $(q2option2).attr('class','form-check');
      $(q2option2).attr('class','form-check-inline');
      $(q2option2).html( "<input class='form-check-input option q2option' type='radio' name='inlineRadioOptions2' id='inlineRadio2' value='wrong'></input>");
      $(q2option2).append("<label class='form-check-label' for='inlineRadio2'>Thomas Jefferson</label>");
      $(optionbox2).append(q2option2);
      

      var q2option3 = $("<div>");
      $(q2option3).attr('class','form-check');
      $(q2option3).attr('class','form-check-inline');
      $(q2option3).html( "<input class='form-check-input option q2option' type='radio' name='inlineRadioOptions2' id='inlineRadio3' value='wrong'></input>");
      $(q2option3).append("<label class='form-check-label' for='inlineRadio3'>James Monroe</label>");
      $(optionbox2).append(q2option3);

      var q2option4 = $("<div>");
      $(q2option4).attr('class','form-check');
      $(q2option4).attr('class','form-check-inline');
      $(q2option4).html( "<input class='form-check-input option q2option' type='radio' name='inlineRadioOptions2' id='inlineRadio4' value='wrong'></input>");
      $(q2option4).append("<label class='form-check-label' for='inlineRadio4'>Woodrow Wilson</label>");
      $(optionbox2).append(q2option4);
      $("#amy").append(optionbox2);
      $("#amy").append("<br>")


      var q3 = $("<div>").html("What was the first state to secede from the Union before the Civil War?");
      $(q3).attr('id','q3');
      $(q3).attr('class','question');
      $("#amy").append(q3);
      $("#amy").append("<br>");
      
      var optionbox3 = $("<div>");
      $(optionbox3).attr('id','optionbox3');

      var q3option1 = $("<div>");
      $(q3option1).empty();
      $(q3option1).attr('class','form-check');
      $(q3option1).attr('class','form-check-inline');
      $(q3option1).html( "<input class='form-check-input option q3option' type='radio' name='inlineRadioOptions3' id='inlineRadio1' value='wrong'></input>");
      $(q3option1).append("<label class='form-check-label' for='inlineRadio1'>Texas</label>");
      $(optionbox3).append(q3option1);
      
      var q3option2 = $("<div>");
      $(q3option2).attr('class','form-check');
      $(q3option2).attr('class','form-check-inline');
      $(q3option2).html( "<input class='form-check-input option q3option' type='radio' name='inlineRadioOptions3' id='inlineRadio2' value='wrong'></input>");
      $(q3option2).append("<label class='form-check-label' for='inlineRadio2'>Virgina</label>");
      $(optionbox3).append(q3option2);

      var q3option3 = $("<div>");
      $(q3option3).attr('class','form-check');
      $(q3option3).attr('class','form-check-inline');
      $(q3option3).html( "<input class='form-check-input option q3option' type='radio' name='inlineRadioOptions3' id='inlineRadio3' value='correct'></input>");
      $(q3option3).append("<label class='form-check-label' for='inlineRadio3'>South Carolina</label>");
      $(optionbox3).append(q3option3);

      var q3option4 = $("<div>");
      $(q3option4).attr('class','form-check');
      $(q3option4).attr('class','form-check-inline');
      $(q3option4).html( "<input class='form-check-input option q3option' type='radio' name='inlineRadioOptions3' id='inlineRadio4' value='wrong'></input>");
      $(q3option4).append("<label class='form-check-label' for='inlineRadio4'>Georgia</label>");
      $(optionbox3).append(q3option4);
      $("#amy").append(optionbox3);
      $("#amy").append("<br>")

      var q4 = $("<div>").html("True or False - The seventh Ammendment to the Constitution bans cruel and unusual punishment.");
      $(q4).attr('id','q4');
      $(q4).attr('class','question');
      $("#amy").append(q4);
      $("#amy").append("<br>");
      
      var optionbox4 = $("<div>");
      $(optionbox4).attr('id','optionbox4');

      var q4option1 = $("<div>");
      $(q4option1).empty();
      $(q4option1).attr('class','form-check');
      $(q4option1).attr('class','form-check-inline');
      $(q4option1).html( "<input class='form-check-input option q4option' type='radio' name='inlineRadioOptions4' id='inlineRadio1' value='wrong'></input>");
      $(q4option1).append("<label class='form-check-label' for='inlineRadio1'>True</label>");
      $(optionbox4).append(q4option1);
      
      var q4option2 = $("<div>");
      $(q4option2).attr('class','form-check');
      $(q4option2).attr('class','form-check-inline');
      $(q4option2).html( "<input class='form-check-input option q4option' type='radio' name='inlineRadioOptions4' id='inlineRadio2' value='correct'></input>");
      $(q4option2).append("<label class='form-check-label' for='inlineRadio2'>False</label>");
      $(optionbox4).append(q4option2);
      $("#amy").append(optionbox4);
      $("#amy").append("<br>")

      var q5 = $("<div>").html("In what year did the American Revolutionary War end?");
      $(q5).attr('id','q5');
      $(q5).attr('class','question');
      $("#amy").append(q5);
      $("#amy").append("<br>");
      
      var optionbox5 = $("<div>");
      $(optionbox5).attr('id','optionbox5');

      var q5option1 = $("<div>");
      $(q5option1).empty();
      $(q5option1).attr('class','form-check');
      $(q5option1).attr('class','form-check-inline');
      $(q5option1).html( "<input class='form-check-input option q5option' type='radio' name='inlineRadioOptions5' id='inlineRadio1' value='wrong'></input>");
      $(q5option1).append("<label class='form-check-label' for='inlineRadio1'>1776</label>");
      $(optionbox5).append(q5option1);
      
      var q5option2 = $("<div>");
      $(q5option2).attr('class','form-check');
      $(q5option2).attr('class','form-check-inline');
      $(q5option2).html( "<input class='form-check-input option q5option' type='radio' name='inlineRadioOptions5' id='inlineRadio2' value='wrong'></input>");
      $(q5option2).append("<label class='form-check-label' for='inlineRadio2'>1779</label>");
      $(optionbox5).append(q5option2);
  
      var q5option3 = $("<div>");
      $(q5option3).attr('class','form-check');
      $(q5option3).attr('class','form-check-inline');
      $(q5option3).html( "<input class='form-check-input option q5option' type='radio' name='inlineRadioOptions5' id='inlineRadio3' value='wrong'></input>");
      $(q5option3).append("<label class='form-check-label' for='inlineRadio3'>1782</label>");
      $(optionbox5).append(q5option3);

      var q5option4 = $("<div>");
      $(q5option4).attr('class','form-check');
      $(q5option4).attr('class','form-check-inline');
      $(q5option4).html( "<input class='form-check-input option q5option' type='radio' name='inlineRadioOptions5' id='inlineRadio4' value='correct'></input>");
      $(q5option4).append("<label class='form-check-label' for='inlineRadio4'>1783</label>");
      $(optionbox5).append(q5option4);
    
      $("#amy").append(optionbox5);
      $("#amy").append("<br>")


    function trivia() {

    var wrongcount = 0;
    var correctcount = 0;
  
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


}

  trivia();

  })

}