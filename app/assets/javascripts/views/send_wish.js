/*globals App, Backbone, JST */
App.Views.SendWish = Backbone.View.extend({
  template: JST['send_wish'],
  className: 'send-wish-form hide',
  tagName: 'form',

  events: {
    'submit': 'sendWish'
  },

  render: function () {
    var content = this.template({
      current_email: 'happy@holidays.com'
    });
    this.$el.html(content);

    setTimeout(function () {
      this.$el.removeClass('hide');
      this.$el.addClass('animated bounceInUp');
    }.bind(this), 5000);

    return this;
  },

  sendWish: function (event) {
    event.preventDefault();

    var content = this.$el.serializeJSON();
    var wish = new App.Models.Wish(content);

    wish.save().then(function () {
      console.log("success");
    }, function () {
      console.log("error");
    });
  },
});
