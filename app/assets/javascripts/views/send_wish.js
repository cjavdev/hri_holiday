/*globals App, Backbone, JST */
App.Views.SendWish = Backbone.View.extend({
  formTemplate: JST['send_wish'],
  sentTemplate: JST['sent_wish'],

  className: 'send-wish-form hide',
  tagName: 'form',

  events: {
    'submit': 'sendWish',
    'click button.restart': 'restart'
  },

  render: function () {
    if(!this.sent) {
      var content = this.formTemplate({
        current_email: 'happy@holidays.com'
      });
    } else {
      var content = this.sentTemplate();
    }

    this.$el.html(content);

    setTimeout(function () {
      this.$el.removeClass('hide');
      this.$el.addClass('animated bounceInUp');
    }.bind(this), 5000);

    return this;
  },

  restart: function () {
    this.sent = false;
    this.model = new App.Models.Wish();
    this.render();
  },

  sendWish: function (event) {
    event.preventDefault();
    var content = this.$el.serializeJSON();
    this.model.set(App.coords);
    this.model.save(content).then(function () {
      this.sent = true;
      this.render();
      console.log("success");
    }.bind(this), function () {
      console.log("error");
    });
  },
});
