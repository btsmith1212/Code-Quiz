var pos = 0, quiz, quiz_status, question, selectedAnswer, options, optionA, optionB, optionC, optionD, correct = 0;

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
    answer: "C"
    },

];

// this get function is short for the getElementById function	
function get(x){
    return document.getElementById(x);
  }
  
  // this function renders a question for display on the page
  function renderQuestion(){
    quiz = get("quiz");
    if(pos >= questions.length){
      quiz.innerHTML = "<h2>You answered "+correct+" of "+questions.length+" questions correctly.</h2><br><button onclick='renderQuestion()'>Play again</button>";
      get("quiz_status").innerHTML = "Quiz completed";
      // resets the variable to allow users to restart the quiz
      pos = 0;
      correct = 0;
      // stops rest of renderQuestion function running when quiz is completed
      return false;
    }
  
    get("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    
    question = questions[pos].question;
    optionA = questions[pos].a;
    optionB = questions[pos].b;
    optionC = questions[pos].c;
    optionD = questions[pos].d;
  
    // display the current question
    quiz.innerHTML = "<h3>"+question+"</h3>";
  

    // display the answer options
    // the += appends to the data we started on the line above
    quiz.innerHTML += "<label> <input type='button' name='options' value="+optionA+"></label><br>";
    quiz.innerHTML += "<label> <input type='button' name='options' value="+optionB+"></label><br>";
    quiz.innerHTML += "<label> <input type='button' name='options' value="+optionC+"></label><br>";
    quiz.innerHTML += "<label> <input type='button' name='options' value="+optionD+"></label><br><br>";
    quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    
  }
  
  function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    options = document.getElementsByName("options");
    for(var i=0; i < options.length; i++){
      if(options[i].checked){
        selectedAnswer = options[i].value;
      }
    }
    // checks if selected answer matches the correct answer
    if(selectedAnswer == questions[pos].answer){
      //each time there is a correct answer this value increases
      correct++;
    }
    // changes position of which questions user is up to
    pos++;
    // then the renderQuestion function is called again to go to next question
    renderQuestion();
  }
  // Add event listener to call renderQuestion on page load event
  window.addEventListener("load", renderQuestion);

