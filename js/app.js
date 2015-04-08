var toggle = document.getElementById('toggle');
var tracks = document.getElementsByClassName("tracks");
var results = document.getElementById('results');
var target = document.getElementById('target');
var playlist = [];

// according to docs: https://developers.soundcloud.com/docs/api/html5-widget
var iframe   = document.querySelector('iframe');
var iframeID = iframe.id;
var player   = SC.Widget(iframe);
var player2  = SC.Widget(iframeID);
// widget1 === widget2


// var iframe = document.getElementById('soundcloud_widget');
// var player = SC.Widget(iframe);

function showTrackList(genre) {
  SC.get('/tracks', { genres: genre }, function(tracks) {
    tracks.forEach(function(track, index) {
      results.innerHTML = results.innerHTML + '<li onclick="playTrack('+track.id+')"><img src="'+track.artwork_url+'" /><p>'+track.title+'</p>  </li>';
      playlist.push(track.id);
    });
  });
}

function playTrack(id) {
  // var src = 'http://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/'+id+'&show_artwork=false&liking=false&sharing=false&auto_play=false" width="420" height="120" frameborder="no"'
  // iframe.setAttribute("src", src);
  url = "https://api.soundcloud.com/tracks/"+id+"";
  player.load(url, {
    auto_play: true
  });
  player.bind(SC.Widget.Events.READY, function() {
    playerReady();
  });

  player.bind(SC.Widget.Events.FINISH, function() {
    console.log("track finished!");
  });

  player.bind(SC.Widget.Events.PLAY_PROGRESS, function() {
    console.log("progress: ");
  });

  // player.bind(SC.Widget.Events.LOAD_PROGRESS, function() {
  //   console.log("loaded: " player.getLoaded());
  // });
}

toggle.onclick = function(e) {
  e.preventDefault();
  player.toggle();
};

showList = function(genre) {
  results.innerHTML = "";
  console.log(genre);
  showTrackList(genre);
}

window.onload = function() {
  SC.initialize({
    client_id: "be2f745f816c1df784b23dc87a1fd65f"
    // redirect_uri: "file:///Users/jcollyer/Documents/projects/soundCloud/index.html",
  });



}//window.onload
