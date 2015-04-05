SC.initialize({
  client_id: "be2f745f816c1df784b23dc87a1fd65f",
  redirect_uri: "file:///Users/jcollyer/Documents/projects/soundCloud/index.html",
});

// SC.get("/groups/55517/tracks", {limit: 1}, function(tracks){
//   alert("Latest track: " + tracks[0].title);
// });


// SC.get('/tracks/293', function(track){
//   SC.oEmbed(track.permalink_url, document.getElementById('player'));
// })

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var tracks = document.getElementsByClassName("tracks");
var results = document.getElementById('results');

SC.stream('/tracks/293', function(sound) {

  start.onclick = function(e) {
    e.preventDefault();
    sound.start();
  };

  stop.onclick = function(e) {
    e.preventDefault();
    sound.stop();
  };

});

function playSomeSound(genre){
  SC.get("/tracks", {
    genres: genre,
    bmp: {
      from: 100
    }
  }, function(tracks) {
    var random = Math.floor(Math.random() * 49);
    SC.oEmbed(tracks[random].uri, { auto_play: true}, document.getElementById('target'));
  })
}


window.onload = function() {
  SC.initialize({
    client_id: "be2f745f816c1df784b23dc87a1fd65f"
    // redirect_uri: "file:///Users/jcollyer/Documents/projects/soundCloud/index.html",
  });

  var menuLinks = document.getElementsByClassName('genre');

  for (i = 0; i < menuLinks.length; i++){
    var menuLink = menuLinks[i];
    menuLink.onclick = function(e) {
      e.preventDefault;
      playSomeSound(menuLink.innerHTML);
    }
  }
}
