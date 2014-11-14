App.Collections.Wishes = Backbone.Collection.extend({
  url: '/wishes',
  model: App.Models.Wish
});

App.wishes = new App.Collections.Wishes()
