/*global JST, App, Backbone */
App.Views.TreeView = Backbone.View.extend({
  className: 'wishes',

  events: {
    'mousemove': 'handleMouse'
  },

  handleMouse: function (e) {
    this.i++;

  },

  initialize: function () {
    this.i = 0;
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
    this.$el.append(wishView.render().$el);
    return wishView;
  },

  render: function () {
    var view = this;
    this.collection.each(view.addWish.bind(this));
    return this;
  }
});
