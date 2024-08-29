function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

img = "";
status = "";
object = [];

function peload()
{
img = "dog_cat.jpg";
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke('#FF0000')
    rect(30, 60, 450,350);

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000")
    rect(300, 90, 270, 320);

    if(status != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            nofill();
            stroke("#FF0000");
            rect(object[i].x, objects[i].y, objects[i].width, object[i].height);
        }
    }
}

function modelLoaded()
{
console.log("Model Loaded!")
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}