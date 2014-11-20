/*global JST, App, Backbone, _ */
App.Views.WishView = Backbone.View.extend({
  className: 'wish',

  events: {
    'mouseenter i': 'showCard',
    'mouseleave i': 'hideCard',
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);

    if(this.model.id % 9 == 0) {
      setTimeout(function () {
        this.shootStar(15);
      }.bind(this), randomInt(300, 3000));
    } else {
      this.shootStar((this.model.id % 8) + 3);
    }
  },

  template: JST['wish_view'],

  shootStar: function (size) {
    var tenPerH = parseInt(window.innerHeight / 10, 10);
    var bottom = this.$el.css('bottom');
    if(bottom === 'auto' || bottom == '0px' || bottom === '') {
      this.$el.css('transform','translate(' + randomInt(20, window.innerWidth + 80)+ 'px, -' + randomInt(130 + tenPerH, window.innerHeight)+ 'px)');
      this.$el.css('font-size', (size * 1.5) + 'px');
    }

    setTimeout(function () {
      this.$('i').css('transform', 'scale(0.75)');
    }.bind(this), 1000);
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
    var diff = window.innerWidth - this.$el.offset().left;
    if(diff < 200) {
      $div.css('margin-left','-200px');
    }
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
