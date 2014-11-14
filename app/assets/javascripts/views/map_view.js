/*globals App, Backbone, google, window */
App.Views.MapView = Backbone.View.extend({
  initialize: function () {
    window.map = this.map = new google.maps.Map(this.el, this.mapOptions());
    this.setMapStyle();
  },

  setMapStyle: function () {},

  mapOptions: function () {
    var darkBlue = "#273F5A"
    var styles = [{
      stylers: [{
        hue: darkBlue
      }, {
        lightness: -70
      }, {
        saturation: 20
      }]
    }, {
      featureType: "all",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "water",
      stylers: [{
        hue: darkBlue
      }, {
        lightness: -80
      }, {
        saturation: 20
      }]
    }, {
      featureType: "landscape",
      stylers: [{
        hue: darkBlue
      }, {
        lightness: -40
      }, {
        saturation: 20
      }]
    }, {
      featureType: "poi",
      stylers: [{
        hue: darkBlue
      }, {
        lightness: -70
      }, {
        saturation: 20
      }]
    }, {
      featureType: "administrative",
      stylers: [{
        hue: darkBlue
      }, {
        lightness: -40
      }, {
        saturation: 20
      }]
    }, {
      featureType: "transit",
      stylers: [{
        hue: darkBlue
      }, {
        lightness: -40
      }, {
        saturation: 20
      }]
    }];

    return {
      center: new google.maps.LatLng(46.119651304573964, -93.076703125),
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
