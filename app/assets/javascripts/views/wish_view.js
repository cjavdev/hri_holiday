/*global JST, App, Backbone, _ */
App.Views.WishView = Backbone.View.extend({
  className: 'wish',

  events: {
    'mouseenter i': 'showCard',
    'mouseleave i': 'hideCard',
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    setTimeout(function() {
      this.shootStar();
    }.bind(this), randomInt(500, 3000));
  },

  template: JST['wish_view'],

  shootStar: function () {
    var tenPerH = parseInt(window.innerHeight / 10, 10);
    if(this.$el.css('bottom') === 'auto' || this.$el.css('bottom') == '0px') {
      this.$el.css('bottom', randomInt(130 + tenPerH, window.innerHeight - tenPerH));
      this.$el.css('left', randomInt(10, window.innerWidth - 100));
    }
  },

  render: function () {
    var content = this.template({ wish: this.model });
    this.$el.html(content);
    return this;
  },

  showCard: function () {
    var $div = $('<div class="note">');
    $div.css('background-color', randomColor());
    $div.text(this.model.escape('note'));
    this.$el.addClass('tippy');
    this.$el.append($div);
  },

  hideCard: function () {
    this.$el.removeClass('tippy');
    this.$('.note').remove();
  }
});

function randomColor () {
  return _.sample(["#C21F1F","#E34446", "#E36D6F"]);
}
