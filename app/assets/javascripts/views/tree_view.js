/*global JST, App, Backbone */
App.Views.TreeView = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync add', this.render);
  },

  template: JST['tree_view'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function (model) {
      var wishView = new App.Views.WishView({ model: model });
      this.$('.wishes').append(wishView.render().$el);
    }.bind(this));
    return this;
  }
});
