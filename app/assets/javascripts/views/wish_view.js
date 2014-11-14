/*global JST, App, Backbone */
App.Views.WishView = Backbone.View.extend({
  className: 'animated bounceInDown fa fa-star wish',

  attributes: function () {
    return {
      'style': this.styleAttrs()
    };
  },

  styleAttrs: function () {
    return [
      'top:' + randomInt(100, 500) + 'px',
      'bottom:' + randomInt(100, 500) + 'px',
      'left:' + randomInt(100, 500) + 'px',
      'right:' + randomInt(100, 500) + 'px',
      'height:' + randomInt(30, 50) + 'px',
      'width:' + randomInt(30, 50) + 'px',
      'color: white',
      'position: fixed'
    ].join(';');
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  template: JST['wish_view'],

  render: function () {
    return this;
  }
});

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
