Webcam.set({
    width:500,
    height:500,
    image_format:'jpg',
    jpg_quality:100
});
camera = document.getElementById("webcam");
Webcam.attach('#webcam');

function snapshot()
{
  Webcam.snap(function(data_uri)
  {
      document.getElementById("result").innerHTML = '<img id="capture" src="'+data_uri+'">';
  });
}

console.log('ml5 version     ',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KcPEtE7G4/model.json' , modelLoaded);

function modelLoaded()
{
    console.log("modelLoaded");
}

function check()
{
    img = document.getElementById("capture");
    classifier.classify(gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
      console.error(error);
    }
    else
    {
      console.log(results);
      document.getElementById("object_name").innerHTML = results[0].label;
      document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(4);
    }
}