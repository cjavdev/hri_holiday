/*global JST, App, Backbone */
App.Views.TreeView = Backbone.View.extend({
  className: 'wishes',

  initialize: function () {
    this.subViews = {};
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addWish);
  },

  addWish: function (wish) {
    var wishView = this.subViews[wish.id];

    if(!wishView) {
      wishView = new App.Views.WishView({ model: wish });
      this.subViews[wish.id] = wishView;
    }

    setTimeout(function () {
      this.$el.append(wishView.render().$el);
    }.bind(this), randomInt(10, 100));
  },

  render: function () {
    var view = this;

    this.collection.each(function (wish) {
      setTimeout(function () {
        view.addWish(wish);
      }, randomInt(100, 500));
    });

    return this;
  }
});
