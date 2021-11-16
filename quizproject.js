let currentQuestion = 0; // question the user is on
let score = 0; // number of correct answer

let timeLeft = 0;

let timer;//this wi be the time function

let numHintsLeft = 2;//allows user to use 2 Hints
let questions = [
   {
	"question": "What is the name of the Japanese capital? ",
	"a": "Tokyo",
	"b": "Osaka",
	"c": "Soul",
	"d": "Ottawa",
	"image":"quizimages/japan.png",
	"answer": "a",
	"hint": "Soul and Ottawa are not Japanese city"
   },
   {
	"question": "What is the name of the highest building in Japan?",
	"a": "Tokyo skytree",
	"b": "Tokyo tower",
	"c": "Burj Khalifa",
	"d": "Shanghai tower",
	"image":"quizimages/tokyoskytree.jpg",
	"answer": "a",
	"hint": "Tokyo tower is not the highest building in Japan"
   },
    {
	"question": "Where is the best Japanese city for people wathching anime or playing video games?",
	"a": "Shinjuku",
	"b": "Meguro",
	"c": "Shibuya",
	"d": "Akihabara",
	"image":"quizimages/akihabara.jpeg",
	"answer": "d",
	"hint": "This city is famous for maid cafe"
   },
    {
	"question": "What is the name of Japanese sword?",
	"a": "Claymore",
	"b": "Katana",
	"c": "Cutlass",
	"d": "Gladius",
	"image":"quizimages/Katana.png",
	"answer": "b",
	"hint": "Samurai wear this sword"
   },
    {
	"question": "What do Japanese people eat as their staple food? ",
	"a": "Rice",
	"b": "Bread",
	"c": "Ramen",
	"d": "Sereal",
	"image":"quizimages/kaiseki.jpg",
	"answer": "a",
	"hint": "Sushi is made of this food"
   },
    {
	"question": "What is the name of the higest mountain in Japan? ",
	"a": "Everest",
	"b": "Asama",
	"c": "Fuji",
	"d": "Kita",
	"image":"quizimages/fuji.jpg",
	"answer": "c",
	"hint": "This mountain sounds like the name of japanse flour."
   },
    {
	"question": "Which number is considered unlucky in Japan",
	"a": "100",
	"b": "7",
	"c": "1",
	"d": "4",
	"image":"quizimages/Numbers.png",
	"answer": "d",
	"hint": "The number sounds like death in Japanese"
   },
    {
	"question": "When wil the entrance ceremony be held in Japan?",
	"a": "December",
	"b": "April",
	"c": "September",
	"d": "January",
	"image":"quizimages/nyuugakushiki.jpg",
	"answer": "b",
	"hint": "Japanese semister finish at March"
   },
    {
	"question": "What should not do in the manners when eating food in Japan?",
	"a": "Make a souud when eat ramen and udon",
	"b": "Take a bowl and eat ",
	"c": "Pass the food from chopsticks to chopsticks",
	"d": "Refills",
	"image":"quizimages/food.jpg",
	"answer": "c",
	"hint": "Making a sound when eat noodles is not bad in Japan"
   },
    {
	"question": "Which one can you do from the age of 18 in Japan? ",
	"a": "Drink alcohol",
	"b": "Smoke",
	"c": "Drive",
	"d": "Vote",
	"image":"quizimages/japan18.jpg",
	"answer": "d",
	"hint": "Drink alcohol and smoke is allowed when people become 20 years old"
   },
 ];
 
 
 function loadQuestion() {
	 
	 // if a timer is running from pwevious question,stop it
	 if (timeLeft >= 0) {
		 clearInterval(timer);
	 }
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       message = "You are awesome or not, whatever, I'm so happy you could learn iformatin about Japan!";
    } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
	console.log("Current Question")
	//if a new question is loaded, start timer when Lightbox closed
	if (currentQuestion<questions.length == 1) {
	console.log("just closed light box and about to start timer")
		startTimer();
	}
 } // closeLightbox
 
 function startTimer() {
	 timeLeft = 10;// seconds
	 timer = setInterval( function(){
		 document.getElementById("countdown").innerHTML = timeLeft;
		 timeLeft --;
		 console.log("timer" + timeLeft);
		 if (timeLeft < 0) {
			 clearInterval(timer);
			 
			 let message = "Time over. Moving to next question.";
			  document.getElementById("lightbox").style.display = "block";
              document.getElementById("message").innerHTML = message;
			  currentQuestion++;
			  loadQuestion();
		 }//if
	 },1000);
 }//startTimer
 
 function showHint() {
	 let message = "";
	  
	 if (numHintsLeft > 0) {
		 
		 message = questions[currentQuestion].hint;
		 numHintsLeft--;
	 }else {
		 message = "Sorry, all your hints have been used up."
	 }
	 
	 document.getElementById("lightbox").style.display = "block";
	 document.getElementById("message").innerHTML = message;
 }
	 
 
 
 
 
 
 
 
 
 
 
 
 
   
