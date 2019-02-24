// constructor function
var Game = function () {
  this.table = new Table();
  //TODO write a nice thing for automatically positioning the balls instead of this hardcoded crap?
  var X_offset = Table.LEN_X / 4;
  var X_offset_2 = 1.72; // this controls how tightly the balls are packed together on the x-axis

  this.balls = [
    new WhiteBall(),

    // First row

    new Ball(X_offset, Ball.RADIUS, 4 * Ball.RADIUS, 'whiteball',0xff0000),
    new Ball(X_offset, Ball.RADIUS, 2 * Ball.RADIUS, 'whiteball',0xff0000),
    new Ball(X_offset, Ball.RADIUS, 0, 'whiteball',0xff0000),
    new Ball(X_offset, Ball.RADIUS, -2 * Ball.RADIUS, 'whiteball',0xff0000),
    new Ball(X_offset, Ball.RADIUS, -4 * Ball.RADIUS, 'whiteball',0xff0000),

    // 2nd row
    new Ball(X_offset - X_offset_2 * Ball.RADIUS, Ball.RADIUS, 3 * Ball.RADIUS, 'whiteball',0xff0000),
    new Ball(X_offset - X_offset_2 * Ball.RADIUS, Ball.RADIUS, Ball.RADIUS, 'whiteball',0xff0000),
    new Ball(X_offset - X_offset_2 * Ball.RADIUS, Ball.RADIUS, -1 * Ball.RADIUS, 'whiteball',0xff0000),
    new Ball(X_offset - X_offset_2 * Ball.RADIUS, Ball.RADIUS, -3 * Ball.RADIUS, 'whiteball',0xff0000),

    // 3rd row
    new Ball(X_offset - X_offset_2 * 2 * Ball.RADIUS, Ball.RADIUS, 2 * Ball.RADIUS, 'whiteball',0xff0000),
    new Ball(X_offset - X_offset_2 * 2 * Ball.RADIUS, Ball.RADIUS, 0, 'whiteball',0xff0000),
    new Ball(X_offset - X_offset_2 * 2 * Ball.RADIUS, Ball.RADIUS, -2 * Ball.RADIUS, 'whiteball',0xff0000),

    //4th row
    new Ball(X_offset - X_offset_2 * 3 * Ball.RADIUS, Ball.RADIUS, Ball.RADIUS, 'whiteball',0xff0000),
    new Ball(X_offset - X_offset_2 * 3 * Ball.RADIUS, Ball.RADIUS, -1 * Ball.RADIUS, 'whiteball',0xff0000),

    //5th row
    new Ball(X_offset - X_offset_2 * 4 * Ball.RADIUS, Ball.RADIUS, 0, 'whiteball',0xff0000),
    new Ball(X_offset - X_offset_2 * 5 * Ball.RADIUS,Ball.RADIUS, 0, 'whiteball',0xff69b4),
    new Ball(X_offset - X_offset_2 * 20 * Ball.RADIUS,Ball.RADIUS, 0, 'whiteball',0x997103),
    new Ball(X_offset - X_offset_2 * 20 * Ball.RADIUS,Ball.RADIUS,20, 'whiteball',0x0059ff),
    new Ball(X_offset - X_offset_2 * 20 * Ball.RADIUS,Ball.RADIUS,-20, 'whiteball',0xffff00),
    new Ball(X_offset - X_offset_2 * -4 * Ball.RADIUS,Ball.RADIUS,0, 'whiteball',0x000000),
  
  ];
}

Game.prototype.tick = function (dt) {
  for (var i in this.balls) {
    this.balls[i].tick(dt);
  }
};

/** Hit the ball with the given strength. This
 will make the ball move towards it's current "forward" direction, which
 is determined by the camera position / angle */
Game.prototype.ballHit = function (strength) {
  if (this.balls[0].rigidBody.sleepState == CANNON.Body.SLEEPING) {
    this.balls[0].hitForward(strength);
  }
};
