var yPos; var yDir; var yws;

function setup()
{
  createCanvas(760, 380);
  yPos = 760; yDir = 5; yws = 0;
}
function draw()
{
    background(255);
    for (var i = 0; i < width  ; i += 1)
    {
      stroke(int(random(255)),int(random(255)),int(random(255)) );
      line(width, i, 0 , height);
    }
    for (var i = 0; i < width  ; i += 1)
    {
      stroke(int(random(255)),int(random(255)),int(random(255)) );
      line(width, -i, 0 , height);
    }
    noStroke();
    fill(200);
    ellipse(yPos, yws ,45,45);
    rect(yPos - 13 , yws - 22 ,40,40);
    yPos = yPos - yDir;
    yws = yws + yDir;
}