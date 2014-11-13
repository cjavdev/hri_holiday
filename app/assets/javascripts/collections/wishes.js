App.Collections.Wishes = Backbone.Collection.extend({
  url: '/wishes',
  model: App.Models.Wish
});
