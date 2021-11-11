var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
document.getElementById("tetbox").innerHTML="";
recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("tetbox").innerHTML=content;
if (content=="take my selfie"){
    speak();
   
}


    
}
function speak(){
    var synth=window.speechSynthesis;
          speak_data="taking your selfie in 10000millisec";
                                                                                                              
                                                                var utterthis=new SpeechSynthesisUtterance(speak_data);                                                      
synth.speak(utterthis);
Webcam.attach(camera);
setTimeout(function(){
    take_snapshot();
    save();
},10000);
}
camera=document.getElementById("camera");
Webcam.set({
                width: 350,
                height: 250,
                      image_format: 'jpg',
                      jpg_quality: 90
});
function take_snapshot(){
Webcam.snap(function(data_uri){
                                       document.getElementById("result").innerHTML='<img id="SCOTLAND" src="'+data_uri+'">';



})
}




function save(){
    link=document.getElementById("link");
    image=document.getElementById("SCOTLAND").src;
    link.href=image;
    link.click();
}
