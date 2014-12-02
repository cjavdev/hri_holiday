var pusher = new Pusher('54ccd206c7afdbd20456');
var channel = pusher.subscribe('cheer_channel');

channel.bind('wish_sent', function (data) {
  App.wishes.add(data.wish);
  console.log(data.wish);
});
