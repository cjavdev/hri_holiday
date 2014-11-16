App.Collections.Wishes = Backbone.Collection.extend({
  url: '/wishes',
  model: App.Models.Wish,

  withMagnitude: function () {
    return _(this.map(function (wish) {
      return [wish.get('latitude'), wish.get('longitude'), 0.10];
    })).flatten();
  }
});

App.wishes = new App.Collections.Wishes()
