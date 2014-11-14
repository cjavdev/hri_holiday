/*globals window, App, $ */
window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    $('button').on('click', function (event) {
      event.preventDefault();
      var wish = new App.Models.Wish();
      App.wishes.add(wish);
    });

    var sendWish = new App.Views.SendWish();
    $('#new-wish').append(sendWish.render().$el);

    App.wishes.fetch();

    var treeView = new App.Views.TreeView({ collection: App.wishes });
    $('#main').append(treeView.render().$el);
  }
};
