function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4fkt49QnI/', modelReady);
}

function modelReady(){
classifier.classify(gotResults)
}