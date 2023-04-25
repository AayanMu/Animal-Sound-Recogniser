
function start(){
 navigator.mediaDevices.getUserMedia({audio:true});
 classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/tLmAx_KIM/model.json",modelReady);  
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
if(error){
console.error(error);
}
else{
    r= Math.floor(Math.random()*255) + 1;
    g=Math.floor(Math.random()*255) + 1;
    b=Math.floor(Math.random()*255) + 1;

    console.log(results);
    document.getElementById('result').innerHTML="I can hear: "+ results[0].label;
    x= Math.floor(results[0].confidence* 100);
    document.getElementById('accuracy').innerHTML="Accuracy: "+x+'%';
    document.getElementById('result').style.color= "rgb("+r+","+g+","+b+")";
    document.getElementById('accuracy').style.color= "rgb("+r+","+g+","+b+")";
    

   if(results[0].label== "Barking"){
    document.getElementById("listener").src='Dog.webp';
   }

   else if(results[0].label== "Meowing"){
    document.getElementById("listener").src='Cat.webp';
   }

   else if(results[0].label== "Mooing "){
    document.getElementById("listener").src='Cow.jpg';
   }

   else if(results[0].label== "Background Noise"){
    document.getElementById("listener").src='Ear1.webp';
   }

}
}

