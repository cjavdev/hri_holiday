/*globals window, App, $, navigator */
window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    navigator.geolocation.getCurrentPosition(function () {
      console.log(arguments);
    }, function () {
      console.log(arguments);
    }, {
      enableHighAccuracy: true,
			timeout: 10000000,
			maxaAge: 0
    });


    // $('button').on('click', function (event) {
    //   event.preventDefault();
    //   var wish = new App.Models.Wish();
    //   App.wishes.add(wish);
    // });

    var sendWish = new App.Views.SendWish();
    $('#new-wish').append(sendWish.render().$el);

    App.wishes.fetch();

    var treeView = new App.Views.TreeView({ collection: App.wishes });
    $('#main').append(treeView.render().$el);
  }
};
