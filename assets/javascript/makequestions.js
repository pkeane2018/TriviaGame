window.onload = function game() {

    function makequestions(question, q_id, cb) {
        var questiondiv = $("<div>");
        $(questiondiv).text(question);
        $(questiondiv).attr('id', q_id);
        $(questiondiv).attr('class', 'question');
        cb(questiondiv);
    };

    function addtoamy(thing) {
        $("#amy").append(thing)
    };

    $("#start").click(function () {
        $("#start").hide("200 milliseconds" , function () {
            makequestions("Who is the youngest president in U.S. history?", 'q1', addtoamy)
        });

    });

}

