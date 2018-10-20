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
      
      

      var q2 = $("<div>").html("Which U.S. president was <b>not<b> born in the state of Virginia?");
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
      $(q2option1).html( "<input class='form-check-input option q2option' type='radio' name='inlineRadioOptions' id='inlineRadio1' value='correct'></input>");
      $(q2option1).append("<label class='form-check-label' for='inlineRadio1'>John Adams</label>");
      $(optionbox2).append(q2option1);
      
      
      var q2option2 = $("<div>");
      $()
      $(q2option2).attr('class','form-check');
      $(q2option2).attr('class','form-check-inline');
      $(q2option2).html( "<input class='form-check-input option q2option' type='radio' name='inlineRadioOptions' id='inlineRadio2' value='wrong'></input>");
      $(q2option2).append("<label class='form-check-label' for='inlineRadio2'>Thomas Jefferson</label>");
      $(optionbox2).append(q2option2);
      

      var q2option3 = $("<div>");
      $(q2option3).attr('class','form-check');
      $(q2option3).attr('class','form-check-inline');
      $(q2option3).html( "<input class='form-check-input option q2option' type='radio' name='inlineRadioOptions' id='inlineRadio3' value='wrong'></input>");
      $(q2option3).append("<label class='form-check-label' for='inlineRadio3'>James Monroe</label>");
      $(optionbox2).append(q2option3);

      var q2option4 = $("<div>");
      $(q2option4).attr('class','form-check');
      $(q2option4).attr('class','form-check-inline');
      $(q2option4).html( "<input class='form-check-input option q2option' type='radio' name='inlineRadioOptions' id='inlineRadio4' value='wrong'></input>");
      $(q2option4).append("<label class='form-check-label' for='inlineRadio4'>Abraham Lincoln</label>");
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
      $(q3option1).html( "<input class='form-check-input option q3option' type='radio' name='inlineRadioOptions' id='inlineRadio1' value='wrong'></input>");
      $(q3option1).append("<label class='form-check-label' for='inlineRadio1'>Texas</label>");
      $(optionbox3).append(q3option1);
      
      var q3option2 = $("<div>");
      $(q3option2).attr('class','form-check');
      $(q3option2).attr('class','form-check-inline');
      $(q3option2).html( "<input class='form-check-input option q3option' type='radio' name='inlineRadioOptions' id='inlineRadio2' value='wrong'></input>");
      $(q3option2).append("<label class='form-check-label' for='inlineRadio2'>Virgina</label>");
      $(optionbox3).append(q3option2);

      var q3option3 = $("<div>");
      $(q3option3).attr('class','form-check');
      $(q3option3).attr('class','form-check-inline');
      $(q3option3).html( "<input class='form-check-input option q3option' type='radio' name='inlineRadioOptions' id='inlineRadio3' value='correct'></input>");
      $(q3option3).append("<label class='form-check-label' for='inlineRadio3'>South Carolina</label>");
      $(optionbox3).append(q3option3);

      var q3option4 = $("<div>");
      $(q3option4).attr('class','form-check');
      $(q3option4).attr('class','form-check-inline');
      $(q3option4).html( "<input class='form-check-input option q3option' type='radio' name='inlineRadioOptions' id='inlineRadio4' value='wrong'></input>");
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
      $(q4option1).html( "<input class='form-check-input option q4option' type='radio' name='inlineRadioOptions' id='inlineRadio1' value='wrong'></input>");
      $(q4option1).append("<label class='form-check-label' for='inlineRadio1'>True</label>");
      $(optionbox4).append(q4option1);
      
      var q4option2 = $("<div>");
      $(q4option2).attr('class','form-check');
      $(q4option2).attr('class','form-check-inline');
      $(q4option2).html( "<input class='form-check-input option q4option' type='radio' name='inlineRadioOptions' id='inlineRadio2' value='correct'></input>");
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
      $(q5option1).html( "<input class='form-check-input option q5option' type='radio' name='inlineRadioOptions' id='inlineRadio1' value='wrong'></input>");
      $(q5option1).append("<label class='form-check-label' for='inlineRadio1'>1776</label>");
      $(optionbox5).append(q5option1);
      
      var q5option2 = $("<div>");
      $(q5option2).attr('class','form-check');
      $(q5option2).attr('class','form-check-inline');
      $(q5option2).html( "<input class='form-check-input option q5option' type='radio' name='inlineRadioOptions' id='inlineRadio2' value='wrong'></input>");
      $(q5option2).append("<label class='form-check-label' for='inlineRadio2'>1779</label>");
      $(optionbox5).append(q5option2);
  
      var q5option3 = $("<div>");
      $(q5option3).attr('class','form-check');
      $(q5option3).attr('class','form-check-inline');
      $(q5option3).html( "<input class='form-check-input option q5option' type='radio' name='inlineRadioOptions' id='inlineRadio3' value='wrong'></input>");
      $(q5option3).append("<label class='form-check-label' for='inlineRadio3'>1782</label>");
      $(optionbox5).append(q5option3);

      var q5option4 = $("<div>");
      $(q5option4).attr('class','form-check');
      $(q5option4).attr('class','form-check-inline');
      $(q5option4).html( "<input class='form-check-input option q5option' type='radio' name='inlineRadioOptions' id='inlineRadio4' value='correct'></input>");
      $(q5option4).append("<label class='form-check-label' for='inlineRadio4'>1783</label>");
      $(optionbox5).append(q5option4);
    
      $("#amy").append(optionbox5);
      $("#amy").append("<br>")


      function trivia() {

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

          clearInterval(count);
          console.log("DONE");
        }  
    }
     
countdown = setInterval(count, 1000);

var a1chosen = false;
var a2chosen = false;
var a3chosen = false;
var a4chosen = false;
var a5chosen = false;
    
var wrongcount = 0;
var correctcount = 0;

$(".option").on("click", function() {

  console.log("on click function started")
  
   var wrong;
   var correct;

  if ($(this).hasClass("q1option") && a1chosen == false) {

      correct = 0;
      wrong = 0;
      answer = $(this).val();
      a1chosen = true;
    
      if (answer == "wrong") {
        wrong = 1;
        console.log("The answer was wrong");
    }
      else if (answer == "correct") {
        correct = 1;
        console.log("The answer was correct");
        console.log(correct);
      }
      
          
          wrongcount += wrong;
          console.log(wrongcount);
          correctcount += correct;
          console.log(correctcount);

          }
          

  if ($(this).hasClass("q2option") && a2chosen == false) {

      correct = 0;
      wrong = 0;
      answer = $(this).val();
      a2chosen = true;
    
      if (answer == "wrong") {
        wrong = 1;
        console.log("The answer was wrong");
    }
      else if (answer == "correct") {
        correct = 1;
        console.log("The answer was correct");
      }
          
          wrongcount += wrong;
          console.log(wrongcount);
          correctcount += correct;
          console.log(correctcount);
  
          }
          
  if ($(this).hasClass("q3option") && a3chosen == false) {

            correct = 0;
            wrong = 0;
            answer = $(this).val();
            a3chosen = true;
          
            if (answer == "wrong") {
              wrong = 1;
              console.log("The answer was wrong");
          }
            else if (answer == "correct") {
              correct = 1;
              console.log("The answer was correct");
            }
            
                
                wrongcount += wrong;
                console.log(wrongcount);
                correctcount += correct;
                console.log(correctcount);
    
                }


    if ($(this).hasClass("q4option") && a4chosen == false) {

                  correct = 0;
                  wrong = 0;
                  answer = $(this).val();
                  a4chosen = true;
                
                  if (answer == "wrong") {
                    wrong = 1;
                    console.log("The answer was wrong");
                }
                  else if (answer == "correct") {
                    correct = 1;
                    console.log("The answer was correct");
                    console.log(correct);
                  }
                  
                      
                      wrongcount += wrong;
                      console.log(wrongcount);
                      correctcount += correct;
                      console.log(correctcount);
          
                      }


    if ($(this).hasClass("q5option") && a5chosen == false) {

                        correct = 0;
                        wrong = 0;
                        answer = $(this).val();
                        a5chosen = true;
                      
                        if (answer == "wrong") {
                          wrong = 1;
                          console.log("The answer was wrong");
                      }
                        else if (answer == "correct") {
                          correct = 1;
                          console.log("The answer was correct");
                          console.log(correct);
                        }
                        
                            
                            wrongcount += wrong;
                            console.log(wrongcount);
                            correctcount += correct;
                            console.log(correctcount);
                
                            }
  })


}

  trivia();

  })

}