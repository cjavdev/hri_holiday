/*globals window, App, $, navigator */
window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var newWish = new App.Models.Wish();

    navigator.geolocation.getCurrentPosition(function (pos) {
      newWish.set(pos.coords);
      console.log(arguments);
    }, function () {
      console.log(arguments);
    }, {
      enableHighAccuracy: true,
			timeout: 10000000,
			maxaAge: 0
    });

    var sendWish = new App.Views.SendWish({ model: newWish });
    $('#new-wish').append(sendWish.render().$el);

    App.wishes.fetch();

    var treeView = new App.Views.TreeView({ collection: App.wishes });
    $('#main').append(treeView.render().$el);
  },
  initializeMap: function () {
    var mapView = new App.Views.MapView({ el: document.getElementById('map-canvas') });
  },
};
