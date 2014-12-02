/*globals Detector, window, document, App, $, navigator, TWEEN, DAT */
window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  coords: {},
  initialize: function () {
    App.locateUser();
    App.installWishForm();
    App.installTreeView();
    App.installNav();
  },

  installNav: function () {
    var nav = new App.Views.Nav({ collection: App.wishes });
    $('#nav').html(nav.render().$el);
  },

  locateUser: function () {
    navigator.geolocation.getCurrentPosition(function (pos) {
      App.coords = pos.coords;
    }, function () {
      console.log('geolocation error');
    }, {
      enableHighAccuracy: true,
      timeout: 10000000,
      maxaAge: 0
    });
  },

  installTreeView: function () {
    App.wishes.fetch();
    var treeView = new App.Views.TreeView({
      collection: App.wishes
    });
    $('#main').append(treeView.render().$el);
  },

  installWishForm: function () {
    var newWish = new App.Models.Wish({
      note: 'Wishing you a holiday season filled with peace, joy and happiness. Share the spirit and add your cheer to the season!'
    });
    var sendWish = new App.Views.SendWish({
      model: newWish,
      collection: App.wishes
    });
    $('#new-wish').append(sendWish.render().$el);
  },

  initializeGlobe: function () {
    if (!Detector.webgl) {
      Detector.addGetWebGLMessage();
    } else {
      var container = document.getElementById('container');
      var globe = new DAT.Globe(container);

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
