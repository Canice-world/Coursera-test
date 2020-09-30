(function (window) {
var speakergoodbye ="Goodbye";
var byeSpeaker ={};
byeSpeaker.speak=function(name){
 console.log(speakergoodbye + " " + name);
 }
window.byeSpeaker=byeSpeaker;
})(window);