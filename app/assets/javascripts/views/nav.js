/*globals App, Backbone, JST */
App.Views.Nav = Backbone.View.extend({
  template: JST['nav'],
  className: 'hide',

  initialize: function () {
    this.listenTo(this.collection, 'add', this.bumpCount);
  },

  options: {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    prefix: '',
    suffix: ' Cheers!',
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    setTimeout(function () {
      this.$el.removeClass('hide');
      this.$el.addClass('animated bounceInUp');
      this.countCheers();
    }.bind(this), 5000);

    return this;
  },

  bumpCount: function () {
    var demo = new countUp("counter", this.collection.length-1, this.collection.length, 0, 2.5, this.options);
    demo.start();
  },

  countCheers: function () {
    setTimeout(function () {
      var demo = new countUp("counter", 0, this.collection.length, 0, 2.5, this.options);
      demo.start();
    }.bind(this), 500);
  }
});
