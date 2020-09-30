(function (window){

var speakerWord="Hello";
var helloSpeaker= {}
helloSpeaker.speak=function(name) {
 console.log(speakerWord + " " + name );} 
 
 window.helloSpeaker=helloSpeaker;
 })(window);
 

