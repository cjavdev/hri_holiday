/*global JST, App, Backbone */
App.Views.TreeView = Backbone.View.extend({
  className: 'wishes',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addWish);
  },

  addWish: function (wish) {
    var wishView = new App.Views.WishView({ model: wish });
    setTimeout(function () {
      this.$el.append(wishView.render().$el);
    }.bind(this), randomInt(100, 1000));
  },

  render: function () {
    var view = this;

    this.collection.each(function (wish) {
      setTimeout(function () {
        view.addWish(wish);
      }, randomInt(1000, 5000));
    });

    return this;
  }
});
