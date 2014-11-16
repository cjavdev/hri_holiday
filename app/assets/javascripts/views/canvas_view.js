/*globals App, Backbone, window */
App.Views.CanvasView = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'all', this.render);
    this.ctx = this.el.getContext('2d');
    this.el.width = window.innerWidth;
    this.el.height = window.innerHeight;
    this.$el.css('background-color', '#6F3835');
    this.interval = setInterval(this.render.bind(this), 100);
    this.circle = new Circles.Circle(5, 5, 5, 'white');
  },

  render: function () {
    console.log('rendering');
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.circle.moveRandom(window.innerWidth, window.innerHeight);
    this.circle.render(this.ctx);
    return this;
  },
});


(function () {
  if (typeof Circles === "undefined") {
    window.Circles = {};
  }

  var Circle = Circles.Circle = function (centerX, centerY, radius, color) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
  };

  Circle.randomCircle = function (maxX, maxY, numCircles) {
    return new Circle(
      maxX * Math.random(),
      maxY * Math.random(),
      Circle.radius(maxX, maxY, numCircles),
      Circle.randomColor()
    );
  };

  var HEX_DIGITS = "0123456789ABCDEF";
  Circle.randomColor = function () {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += HEX_DIGITS[Math.floor((Math.random() * 16))];
    }

    return color;
  };

  Circle.radius = function (maxX, maxY, numCircles) {
    var targetCircleArea = (maxX * maxY) / numCircles;
    var targetRadius = Math.sqrt(targetCircleArea / Math.PI);
    return 2 * targetRadius;
  };

  Circle.prototype.moveRandom = function (maxX, maxY) {
    var dx = (Math.random() * 2) - 1;
    var dy = (Math.random() * 2) - 1;

    this.centerX = Math.abs((this.centerX + (dx * this.radius * 0.1)) % maxX);
    this.centerY = Math.abs((this.centerY + (dy * this.radius) * 0.1) % maxY);
  };

  Circle.prototype.render = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.centerX,
      this.centerY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };
})();
