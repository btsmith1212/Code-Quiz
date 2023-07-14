var pos = 0, quiz, quiz_status, question, selectedAnswer, options, optionA, optionB, optionC, optionD, correct = 0;
var countSpan = document.getElementById("count");
var feedback = document.getElementById("feedback");
//added global variables
var questions = [
    {
    question: "Commonly used data types do NOT include:",
    a: "strings",
    b: "booleans",
    c: "alerts",
    d: "numbers",
    answer:"C"
    },

    {
    question: "The condition in an if / else statement is enclosed with:",
    a: "quotes",
    b: "curly brackets",
    c: "parenthesis",
    d: "square brackets",
    answer: "B"
    },

    {
    question: "Arrays in JavaScript can be used to store:",
    a: "numbers and strings",
    b: "other arrays",
    c: "booleans",
    d: "all of the above",
    answer: "D"
    },

    {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    a: "commas",
    b: "curly brackets",
    c: "quotes",
    d: "parenthesis",
    answer: "C"
    },

    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: "JavaScript",
    b: "terminal/bash",
    c: "for loops",
    d: "console.log",
    answer: "D"
    },
];
// set questions as arrays
function get(x){
    return document.getElementById(x);
  }
  //master function
  function newQuestion(){
    quiz = get("quiz");
    if(pos >= questions.length){
      quiz.innerHTML = "<h2>You answered "+correct+" of "+questions.length+" questions correctly.</h2><br><button onclick='newQuestion()', button onclick=clearinterval(counter)>Play again</button>";
      get("quiz_status").innerHTML = "Quiz completed";
      pos = 0;
      correct = 0;
      countSpan.innerHTML = "";
      return false;

    }
    //results function
    get("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    //details where on quiz you are
    question = questions[pos].question;
    optionA = questions[pos].a;
    optionB = questions[pos].b;
    optionC = questions[pos].c;
    optionD = questions[pos].d;
  
    quiz.innerHTML = "<h3>"+question+"</h3>";
  

    quiz.innerHTML += "<label> <input type='radio' name='options' value='A'> "+optionA+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='options' value='B'> "+optionB+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='options' value='C'> "+optionC+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='options' value='D'> "+optionD+"</label><br><br>";
    quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    //main quiz body, draws questions and options from array
  }
  
  function checkAnswer(){
    options = document.getElementsByName("options");
    for(var i=0; i < options.length; i++){
      if(options[i].checked){
        selectedAnswer = options[i].value;
      }
    }
    if(selectedAnswer == questions[pos].answer){
      correct++;
      feedback.textContent = "Correct"
    }
    else{
      feedback.textContent = "Wrong"
    }
    pos++;
    newQuestion();
  }
  //checks if answer is correct, adds to total
  //added feedback based on prior questions answer
  window.addEventListener("load", newQuestion);
  //loads new question

  function startTimer(){
    var counter = 60;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        countSpan.innerHTML = counter;
      }
      if (counter === 0) {
          alert('Out of time!');
          clearInterval(counter);
      }

    }, 1000);
  }
  //added timer
  function start(){
      document.getElementById("count").style="color:black;";
      startTimer();
  };

  function show() {
    var hid = document.getElementsByClassName("exp");
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
}

//hid quiz until start button is selected
