/*globals Detector, window, document, App, $, navigator */
window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var newWish = new App.Models.Wish();

    navigator.geolocation.getCurrentPosition(function (pos) {
      newWish.set(pos.coords);
    }, function () {
      console.log('geolocation error');
    }, {
      enableHighAccuracy: true,
      timeout: 10000000,
      maxaAge: 0
    });

    var sendWish = new App.Views.SendWish({
      model: newWish
    });
    $('#new-wish').append(sendWish.render().$el);

    App.wishes.fetch();
    var treeView = new App.Views.TreeView({
      collection: App.wishes
    });
    $('#main').append(treeView.render().$el);
  },

  initializeMap: function () {
    App.wishes.fetch();
    var mapView = new App.Views.MapView({
      collection: App.wishes,
      el: document.getElementById('map-canvas')
    });
  },

  initializeCanvas: function () {
    App.wishes.fetch();

    var canvasView = new App.Views.CanvasView({
      collection: App.wishes,
      el: document.getElementById('canvas')
    });
  },

  initializeGlobe: function () {
    if (!Detector.webgl) {
      Detector.addGetWebGLMessage();
    } else {
      var container = document.getElementById('container');
      var globe = new DAT.Globe(container);

      var i, tweens = [];
      var settime = function (globe, t) {
        return function () {
          new TWEEN.Tween(globe).to({
            time: t / 3
          }, 500).easing(TWEEN.Easing.Cubic.EaseOut).start();
        };
      };

      TWEEN.start();

      App.wishes.fetch().then(function () {
        globe.addData(App.wishes.withMagnitude(), {
          format: 'legend',
          name: 'Holiday Cheer',
          animated: true
        });

        globe.createPoints();
        settime(globe, 0)();
        globe.animate();
        document.body.style.backgroundImage = 'none'; // remove loading
      });
    }
  }
};

function noImage(img) {
  img.src = STAR_IMG;
}
