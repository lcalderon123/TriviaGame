$(document).ready(function () {

    /* INITIAL LOAD */

    //Hide sections on initial load
    $(".score").hide();
    $(".timer").hide();

    /* VARIABLES */

    //Creates variable to hold the time limit amount
    var counter = 120;

    // Creates variable to hold questions
    var questions = [
       
        {
            "id": 0,
            "image_loc": "assets/images/1.jpg",
            "description": "Blizzards hit PvP FPS",
            "choices": ["Overwatch", "Dota", "Heroes of the Storm"],
            //location of answer in choices array
            "answer": 0,
            "status": '',
       },
       
        {
            "id": 1,
            "image_loc": "assets/images/2.jpg",
            "description": "The most well known MOBA in the world",
            "choices": ["Starcraft", "League of Legends", "Path of Exile"],
            //location of answer in choices array
            "answer": 1,
            "status": '',
       },
        
        {
            "id": 2,
            "image_loc": "assets/images/3.jpg",
            "description": "Top down Hack and Slash",
            "choices": ["Diablo", "Path of Exile", "Bloodborne"],
            //location of answer in choices array
            "answer": 1,
            "status": '',
       },
        
        {
            "id": 3,
            "image_loc": "assets/images/4.jpg",
            "description": "Three part cult classic boss battle RPG",
            "choices": ["World of Warcraft", "Dark Souls", "Demon Souls"],
            //location of answer in choices array
            "answer": 1,
            "status": '',
       },
        
        {
            "id": 4,
            "image_loc": "assets/images/5.jpg",
            "description": "Revisited classic",
            "choices": ["Horizon Zero Dawn", "God of War", "Monster Hunter: World"],
            //location of answer in choices array
            "answer": 2,
            "status": '',
       },
        
        {
            "id": 5,
            "image_loc": "assets/images/6.jpg",
            "description": "PS4 Exclusive",
            "choices": ["Horizon Zero Dawn", "Demon Souls", "Legend of Zelda"],
            //location of answer in choices array
            "answer": 0,
            "status": '',
       },
        
        {
            "id": 6,
            "image_loc": "assets/images/7.jpg",
            "description": "Breakout battle royale game",
            "choices": ["H1Z1", "Starcraft", "Fortnite","PlayerUnknown's Battlegrounds"],
            //location of answer in choices array
            "answer": 3,
            "status": '',
       },
        
        {
            "id": 6,
            "image_loc": "assets/images/8.jpg",
            "description": "Called the samurai version of Bloodborne",
            "choices": ["Nioh", "Prey", "Assasins Creed"],
            //location of answer in choices array
            "answer": 0,
            "status": '',
       },
        
        {
            "id": 6,
            "image_loc": "assets/images/9.jpg",
            "description": "Indie side scroller",
            "choices": ["Hellblade", "Rime", "Little Nightmares"],
            //location of answer in choices array
            "answer": 2,
            "status": '',
       },
        
        {
            "id": 6,
            "image_loc": "assets/images/10.jpg",
            "description": "Also a TV Show, shooter MMO",
            "choices": ["Defiance", "For Honor", "Dishonored"],
            //location of answer in choices array
            "answer": 0,
            "status": '',
       },
        
        {
            "id": 6,
            "image_loc": "assets/images/11.jpg",
            "description": "Blizzards most well known MMO",
            "choices": ["Warframe", "World of Warcraft", "Mass Effect"],
            //location of answer in choices array
            "answer": 1,
            "status": '',
       },
        
        {
            "id": 6,
            "image_loc": "assets/images/12.jpg",
            "description": "Nintendo Exclusive",
            "choices": ["Pyre", "Fortnite", "Super Mario Brothers","Legend of Zelda"],
            //location of answer in choices array
            "answer": 3,
            "status": '',
       },
       
        {
            "id": 6,
            "image_loc": "assets/images/13.jpg",
            "description": "Horror RPG",
            "choices": ["Resident Evil", "The Evil Within", "Torment"],
            //location of answer in choices array
            "answer": 0,
            "status": '',
       },
       
        {
            "id": 6,
            "image_loc": "assets/images/14.jpg",
            "description": "World of Skyrim MMO",
            "choices": ["Shadow of Colossus", "Elder Scrolls Online", "DragonAge"],
            //location of answer in choices array
            "answer": 1,
            "status": '',
       },
   
        {
            "id": 6,
            "image_loc": "assets/images/15.jpg",
            "description": "tbd",
            "choices": ["Metal Gear Solid", "Skyrim", "BioShock"],
            //location of answer in choices array
            "answer": 2,
            "status": '',
       },
        
        {
            "id": 6,
            "image_loc": "assets/images/16.jpg",
            "description": "Game of the Year RPG",
            "choices": ["The Last of Us", "Persona", "Call of Duty","The Witcher"],
            //location of answer in choices array
            "answer": 3,
            "status": '',
       },
        
        {
            "id": 6,
            "image_loc": "assets/images/17.jpg",
            "description": "Called one of the hardes games of all time",
            "choices": ["Bloodborne", "Nioh", "Half-Life"],
            //location of answer in choices array
            "answer": 0,
            "status": '',
       },
       
        {
            "id": 6,
            "image_loc": "assets/images/18.jpg",
            "description": "Apocolyptic action RPG",
            "choices": ["Mass Effect", "Red Dead Redemption", "Grand Theft Auto","Fallout"],
            //location of answer in choices array
            "answer": 3,
            "status": '',
       },
        
        {
            "id": 6,
            "image_loc": "assets/images/19.jpg",
            "description": "Was the highest grossing MMO for several years",
            "choices": ["Age of Conan", "Star Wars", "Final Fantasy"],
            //location of answer in choices array
            "answer": 2,
            "status": '',
       },
       
        {
            "id": 6,
            "image_loc": "assets/images/20.jpg",
            "description": "Virtual Leggos",
            "choices": ["Tetris", "Minecraft", "The Sims"],
            //location of answer in choices array
            "answer": 1,
            "status": '',
       },
        
        {
            "id": 6,
            "image_loc": "assets/images/21.jpg",
            "description": "Tom Clancy",
            "choices": ["Gears of War", "The Division", "Far Cry"],
            //location of answer in choices array
            "answer": 1,
            "status": '',
       }
    ];

    // Creates variable to hold number of correct answers
    var correctAnswers = 0;
    // Creates variable to hold number of wrong answers
    var incorrectAnswers = 0;
    // Creates variable to hold number of un-answered questions
    var unansweredQuestions = questions.length;


    console.log(unansweredQuestions);

    /* FUNCTIONS */

    // Function to check if element is empty
    function isEmpty(el) {
        return !$.trim(el.html())
    }

    // Function to empty all the game populated sections
    function clearGameDivs() {
        $('#question-area').empty();

    }

    // Function to hide a specific element or section
    function hideItem(tag) {
        $(tag).addClass('hidden');
    }

    // Function to un-hide a specific element or section
    function unhideItem(tag) {
        $(tag).removeClass('hidden');
    }

    // Function to create Questions
    function questionCreation() {
        for (var i = 0; i < questions.length; i++) {
            // Create an showChar
            var showImage = $("<img>");

            // Add css image classes to image
            showImage.addClass("show-image img-rounded img-responsive");

            // Each showChar will be given a src link to the current questions's image
            showImage.attr("src", questions[i].image_loc);

            var questionOuterDiv = $("<div>");
            questionOuterDiv.addClass("panel panel-default");

            var questionHeaderText = "<div class='panel-heading bg-black'><h3 class='panel-title'>Game " + (i + 1) + "</h3></div>";

            var questionAnswerList = $("<ul>");
            questionAnswerList.addClass("list-group answer-list").attr("questnum", i);

            for (var a = 0; a < questions[i].choices.length; a++) {
                var newChoice = $("<li>");
                newChoice.addClass("list-group-item answer").attr("indexnum", a).text(questions[i].choices[a]);
                questionAnswerList.append(newChoice);
            }
            var questionInnerBlock = $("<div>");
            questionInnerBlock.addClass("question-block");

            var questionDescription = "<p class='question-text'>" + questions[i].description + "</p>";
            questionInnerBlock.append(showImage, questionDescription, "<h4 class='question-title'>Select Answer Below</h4>", questionAnswerList);

            var questionInnerDiv = $("<div>");
            questionInnerDiv.addClass("question-box panel-body");
            questionInnerDiv.append(questionInnerBlock);

            questionOuterDiv.append(questionHeaderText, questionInnerDiv);

            $(".questions").append(questionOuterDiv);
        }
    }

    // Function that resets the game back to the starting point
    function reset() {

        //Set time to 30 seconds
        counter = 60;

        // Remove previous game data
        clearGameDivs();

        // Create Questions
        questionCreation();

        //Start Timer
        timerWrapper();

        //Hide score section
        $(".score").hide();
        $(".timer").show();
        $(".questions").show();
    }


    /* TIMER STUFF*/

    function timerWrapper() {
        clock = setInterval(countDown, 1000);

        function countDown() {
            if (counter === 0) {
                clearInterval(clock);
                console.log("timeout");
                $(".questions").hide();
                $(".score").show();
                document.querySelector('.correctCnt').innerHTML = correctAnswers;
                document.querySelector('.incorrectCnt').innerHTML = incorrectAnswers;
                document.querySelector('.unansweredCnt').innerHTML = unansweredQuestions;
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer-box").html(timeConverter(counter));
        }

        function timeConverter(t) {
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes === 0) {
                minutes = "00";
            } else if (minutes < 10) {
                minutes = "0" + minutes;
            }
            return minutes + ":" + seconds;
        }
    }




    /* ON CLICK EVENTS */

    $("#question-area").on("click", ".answer", function () {

        console.log("test");
        $(this).parent().find('li').removeClass('active');
        $(this).addClass("active");

        var answerId = $(this).attr("indexnum");
        answerId = parseInt(answerId);

        var questionId = $(this).parent().attr("questnum")

        var currentStatus = "";
        console.log('correct ' + correctAnswers);
        console.log('incorrect ' + incorrectAnswers);


        if (answerId === questions[questionId].answer) {
            currentStatus = "c";
        } else {
            currentStatus = "i";
        }
        console.log(currentStatus);
        console.log(questions[questionId].status);

        if (currentStatus === questions[questionId].status) {
            console.log('same status');
        } else if (questions[questionId].status === '') {
            questions[questionId].status = currentStatus;
            console.log('first try');
            unansweredQuestions--;
            if (currentStatus === 'c') {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        } else {
            questions[questionId].status = currentStatus;
            console.log('changed');
            if (currentStatus === 'c') {
                correctAnswers++;
                incorrectAnswers--;
            } else {
                correctAnswers--;
                incorrectAnswers++;
            }
        }
        console.log('correct ' + correctAnswers);
        console.log('incorrect ' + incorrectAnswers);
        console.log('-----------');
    });

    // On Restart Game Button Click
    $(".btn-restartGame").click(function () {
        $("#start-game").hide();
        reset();
    });




});