/*global JST, App, Backbone */
App.Views.WishView = Backbone.View.extend({
  className: 'animated bounceInUp fa fa-star wish',

  attributes: function () {
    return {
      'style': this.styleAttrs()
    };
  },

  events: {
    'mouseenter': 'showCard',
    'mouseleave': 'hideCard',
  },

  styleAttrs: function () {
    return [
      'top:' + randomInt(100, 500) + 'px',
      'bottom:' + randomInt(100, 500) + 'px',
      'left:' + randomInt(100, 500) + 'px',
      'right:' + randomInt(100, 500) + 'px',
      'color: white',
      'position: fixed'
    ].join(';');
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  template: JST['wish_view'],

  render: function () {
    var content = this.template({ wish: this.model });
    this.$el.html(content);

    return this;
  },

  showCard: function () {
    this.$('.note').addClass('show');
  },

  hideCard: function () {
    this.$('.note').removeClass('show');
  }
});
