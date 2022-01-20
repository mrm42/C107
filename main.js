https://teachablemachine.withgoogle.com/models/O4oqHBf1o/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/madels/kA4F-80yW/model.json', modelReady);



}

function modelReady(){
    classifier.classify(gotResults);
}