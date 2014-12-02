/*global JST, App, Backbone */
App.Views.TreeView = Backbone.View.extend({
  className: 'wishes',

  initialize: function () {
    this.subViews = {};
    this.listenTo(this.collection, 'sync', this.render);
  },

  addWish: function (wish, wishNum) {
    var wishView = this.subViews[wish.id];
    var shoot = (wishNum > this.collection.length - 5);
    if(!wishView) {
      wishView = new App.Views.WishView({ model: wish, shoot: shoot });
      this.subViews[wish.id] = wishView;
    }
    this.$el.append(wishView.render().$el);
    return wishView;
  },

  render: function () {
    console.log('rendering');
    var view = this;
    this.collection.each(view.addWish.bind(this));

    if(this.collection.length > 0) {
      this.listenTo(this.collection, 'add', function (wish) {
        console.log('from add');
        this.addWish(wish, this.collection.length);
      }.bind(this));
    }
    return this;
  }
});
