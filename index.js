const button=document.getElementById("button11");
var textshow=document.getElementById("textshow");
button.addEventListener("click",runSpeechRecognition)
function runSpeechRecognition() {
   
    var output = document.getElementById("output");
  
    var action = document.getElementById("action");
        
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
    
        recognition.onstart = function() {
            action.innerHTML = "<small>listening, please speak...</small>";
        };
        
        recognition.onspeechend = function() {
            action.innerHTML = "<small>stopped listening, hope you are done...</small>";
            recognition.stop();
        }
      
        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
            output.innerHTML =transcript ;
            const response = process(transcript);
            speechSynthesis.speak(new SpeechSynthesisUtterance(response));

            output.classList.remove("hide");
        };
       
         recognition.start();
         

  }
  function process(rawText) {
    let text = rawText.replace(/\s/g, "");
    text = text.toLowerCase();
    let response = null;
    switch(text) {
        case "hello":
            response = "hi sujeet"; break;
        case "what'syourname":
            response = "My name's ajeet.";  break;
        case "howareyou":
            response = "I'm good."; break;
        case "who are you":
            response = new Date().toLocaleTimeString(); break;
        case "stop":
            response = "Bye";
            toggleBtn();
    }
    if (!response) {
        window.open(`http://google.com/search?q=${rawText.replace("search", "")}`, "_blank");
        return `I found some information for ${rawText}`;
    }
    return response;
}
 
