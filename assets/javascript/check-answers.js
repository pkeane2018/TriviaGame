function check_answers() {

    var options = docuemnt.getElementsByClassName("option");
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
           console.log(options[i].parent().attr("data-chosen"));
        }
    }
}

$(".option").on("click", function() {
    console.log(options[i].parent().attr("data-answered"));
})