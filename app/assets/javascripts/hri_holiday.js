window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    $('form').on('submit', function (event) {
      event.preventDefault();

      var $form = $(event.currentTarget);
      var content = $form.serializeJSON();
      var wish = new App.Models.Wish(content);

      wish.save().then(function () {
        console.log("success");
      }, function () {
        console.log("error");
      });
    });

    App.wishes.fetch();
    var treeView = new App.Views.TreeView({ collection: App.wishes });
    $('#main').append(treeView.render().$el);
  }
};
