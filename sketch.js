let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  if (mouseIsPressed) {
    let hit = createVector(-0.1, -0.1);
    ball.addForce(hit)
  }

//   let gravity = createVector(0, 0.3);
//   ball.addForce(gravity);

//  if (mouseIsPressed) {
//    let wind = createVector(0.1, 0);
//    ball.addForce(wind);
//  }

  ball.update();
  ball.show();
}