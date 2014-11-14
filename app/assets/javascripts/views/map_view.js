/*globals App, Backbone, google, window */
App.Views.MapView = Backbone.View.extend({
  initialize: function () {
    window.map = this.map = new google.maps.Map(this.el, this.mapOptions());
    this.setMapStyle();
  },

  setMapStyle: function () {},

  mapOptions: function () {
    var styles = [{
      stylers: [{

      }, {
        lightness: -50
      }]
    }, {
      featureType: "all",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }];

    return {
      center: new google.maps.LatLng(-34.397, 150.644),
      zoom: 4,
      backgroundColor: 'black',
      styles: styles
    };
  },

  template: JST['map_view'],

  render: function () {
    return this;
  },
});
