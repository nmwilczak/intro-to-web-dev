/* GLOBAL VARIABLES */
var quizTable;
var quizOutcomes;
var quizData;
var noPriorSubmit = true;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$.getJSON("./gravity-falls-quiz.json", function(data) {
    quizData = data;
    populateQuiz();
    populateHeader();

    // initialize hash map
    quizTable = new Map();
    var questions = data["questions"];
    var responseOptions = data["questions"][0]["responseOptions"];
    for (var i = 0; i < questions.length; i++) {
        for (var j = 0; j < responseOptions.length; j++) {
            var key = data["questions"][i]["responseOptions"][j]["caption"];
            var value = data["questions"][i]["responseOptions"][j]["pointsFor"];
            quizTable.set(key,value);
        }
    }

    // initialize map of outcomes -- an outcome
    // is key-value pair -- see example below:
    // { key : "Stan", value: "5" }
    quizOutcomes = new Map();
    var outcomes = Object.keys(data["outcomes"]);
    for (var i = 0; i < outcomes.length; i++) {
        var key = outcomes[i];
        quizOutcomes.set(key,0);
    }
    
    addSubmitBtn();
    checkSubmitStatus();
});

function populateHeader() {
    $("#quiz-title").html(quizData["quizTitle"]);
    var questions = quizData["questions"];
    for (var i = 1; i <= questions.length; i++) {
        var selector = "#question-" + i;
        var image = questions[i-1]["backgroundImage"];
        $(selector).css("background-image", "url(" + image + ")");
    }
}

function populateQuiz() {
    var numOfQuestions = quizData["questions"].length;
    for (var i = 0; i < numOfQuestions; i++) {
        var question = quizData["questions"][i]["questionTitle"];
        var responseOptions = quizData["questions"][i]["responseOptions"];
        var numOfResponses = responseOptions.length;
        var nameValue = "question-" + (i + 1) + "-response";
        var imageClass= "images-class-" + (i + 1) + "-group";
        var responseOptionsHTML = "";
        for (var j = 0; j < numOfResponses; j++) {
            var imgUrl = responseOptions[j]["imgUrl"];
            var caption = responseOptions[j]["caption"];
            responseOptionsHTML += "<label>" +
                                        "<div class='image-container'>" +
                                            "<img class='" + imageClass + "'" +
                                                " src='" + imgUrl + "' onmouseover='displayCaption(this)'" +
                                                                     " onmouseout='hideCaption(this)'" +
                                                                     " onmouseleave='checkSubmitStatus()'" +
                                                                     " onclick='toggleCheckedClass(this)' />" +
                                            "<p class='image-caption'>" + caption + "</p>" +
                                            "<p class='checked-image-caption'>" + caption + "</p>" +
                                            "<input type='radio'" +
                                                  " value='" + caption + "'" + 
                                                  " name='" + nameValue + "' />" +
                                        "</div>" + 
                                   "</label>";    
        }
        if (responseOptionsHTML) {
            $("body").append("<div class='question-container'>" +
                                "<div class='question' id='" + "question-" + (i + 1) + "'>" +
                                    "<h3 class='question-label'>" +
                                        "Question " + (i + 1) + "/" + numOfQuestions +
                                    "</h3>" +
                                    "<h3 class='question-statement'>" + question + "</h3>" +
                                "</div>" +    
                                "<div class='options-grid'>" +
                                    responseOptionsHTML +
                                "</div>" +
                            "</div>");
        }
    }
}

function displayCaption(image) {
    var caption = image.nextSibling;
    caption.style.display = "block";
    caption.style.pointerEvents = 'none';
}

function hideCaption(image) {
    var caption = image.nextSibling;
    caption.style.display = "none";
}

function toggleCheckedClass(image) {
    var imageClassName = image.classList.item(0);
    var imageClassArray = document.getElementsByClassName(imageClassName);
    
    for (var i = 0 ; i < imageClassArray.length; i++) {
        var currImageElement = imageClassArray[i];
        if (currImageElement.classList.contains("checked")) {
            currImageElement.classList.remove("checked");
            currImageElement.nextSibling.nextSibling.style.display = "none";
        }
    }

    image.classList.add("checked");
    var checkedImageArray = document.getElementsByClassName("checked");
    for (var i = 0; i < checkedImageArray.length; i++) {
        var currCheckedImageElement = checkedImageArray[i];
        var secondCaption = currCheckedImageElement.nextElementSibling.nextElementSibling;
        secondCaption.style.display = "block";
    }
}

function checkSubmitStatus() {
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
        return $(radio).val();
    }).toArray();

    var numOfQuestions = quizData["questions"].length;

    if (choices.length == numOfQuestions) {
        $("#btn-submit-quiz").css("pointer-events","auto");
    } else {
        $("#btn-submit-quiz").css("pointer-events","none");
    }
}

function addSubmitBtn() {
    $("body").append("<button onclick='submitQuiz()' id='btn-submit-quiz'>Submit Quiz</button>");
}

function showResults(outcome) {
    if (noPriorSubmit) {
        var quizTitle = quizData["quizTitle"];
        var quizOutcome = quizData["outcomes"][outcome]["text"];
        var quizOutcomeImage = quizData["outcomes"][outcome]["imgUrl"];
        var quizOutcomeDescription = quizData["outcomes"][outcome]["description"];
        $("body").append(
            "<div id='results-container'>" +
                "<div id='results-top-labeling'>" +
                    "<span id='results-top-labeling-left'>" +
                        "<i class='fa fa-arrow-circle-up'></i>" +
                        "<span id='results-quiz-title'>" + quizTitle + "</span>" +
                    "</span>" +
                    "<span id='results-top-labeling-right'>" +    
                        "<i onclick='refreshPage()' class='fa fa-refresh'></i>" +
                        "<span onclick='refreshPage()' id='btn-retake-quiz'>Retake Quiz</span>" +
                    "</span>" +    
                "</div>" +
                "<div id='results-bottom-content'>" + 
                    "<div id='results-bottom-left'>" + 
                        "<h4 id='results'>" + quizOutcome + "</h4>" +
                        "<p id='results-description'>" + quizOutcomeDescription + "</p>" +
                    "</div>" +
                    "<div id='results-bottom-right'>" +
                        "<img id='results-image' src='" + quizOutcomeImage + "'/>" +
                    "</div>" +
                "</div>" + 
            "</div>");
        noPriorSubmit = false;
    }
}

function refreshPage() {
    location.reload();
}

function submitQuiz() {
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
        return $(radio).val();
    }).toArray();

    // tally the results
    for (var i = 0; i < choices.length; i++) {
        var key = quizTable.get(choices[i]);
        if (quizOutcomes.has(key)) {
            var value = quizOutcomes.get(key) + 1;
            quizOutcomes.set(key,value);
        }
    }

    // find the outcome
    var max = -1;
    var outcome;
    for (var [key,value] of quizOutcomes.entries()) {
        if (value > max) {
            max = value;
            outcome = key;
        }
    }

    showResults(outcome);
}