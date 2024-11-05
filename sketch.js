let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  // let took = createVector();
  ball.pos
  let mv = createVector(mouseX, mouseY);

//   let gravity = createVector(0, 0.3);
//   ball.addForce(gravity); 중력

//  if (mouseIsPressed) {
//    let wind = createVector(0.1, 0);
//    ball.addForce(wind);
//  } 바람

  ball.update();
  ball.show();
}