/*global JST, App, Backbone */
App.Views.WishView = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  template: JST['wish_view'],

  render: function () {
    var content = this.template({ wish: this.model });
    this.$el.html(content);
    return this;
  }
});
