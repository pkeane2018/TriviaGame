window.onload = function game() {

    var question_array = ["Who is the youngest president in American history?", "Which U.S. president was not born in the state of Virginia?", "What was the first state to secede from the Union before the Civil War?", "True or False - The seventh Ammendment to the Constitution bans cruel and unusual punishment.","In what year did the American Revolutionary War end?"]

    function makequestions(array) {
        for (i = 0; i < array.length; i++) {
            var questiondiv = $("<div>");
            $(questiondiv).text(array[i]);
            console.log($(questiondiv).text());
            var j = i + 1;
            j = j.toString();
            j = 'q' + j;
            $(questiondiv).attr('id', j);
            console.log(j);
            $(questiondiv).attr('class', 'question');
            addtoamy(questiondiv);
    };
        
    };

    function addtoamy(thing) {
        $("#amy").append(thing);
        $("#amy").append("<br><br>");
    };

    $("#start").click(function () {
        $("#start").hide("200 milliseconds" , function () {
            makequestions(question_array)
        });

    });

}

