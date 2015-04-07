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

var toggle = document.getElementById('toggle');
var tracks = document.getElementsByClassName("tracks");
var results = document.getElementById('results');
var target = document.getElementById('target');
var playlist = [];
var iframe = document.getElementById('soundcloud_widget');
var player = SC.Widget(iframe);



// function playSomeSound(genre){
//   SC.get("/tracks", {
//     genres: genre,
//     bmp: {
//       from: 100
//     }
//   }, function(tracks) {
//     var random = Math.floor(Math.random() * 49);
//     SC.oEmbed(tracks[random].uri, { auto_play: true}, document.getElementById('target'));
//   })
// }


function showTrackList(genre) {
  SC.get('/tracks', { genres: genre }, function(tracks) {

      tracks.forEach(function(track, index) {
        // console.log(track);

        results.innerHTML = results.innerHTML + '<li onclick="playTrack('+track.id+')"><img src="'+track.artwork_url+'" /><p>'+track.title+'</p>  </li>';

        playlist.push(track.id);
        console.log(track.id)
      });
    });
}

function playTrack(id) {
  var track = '/tracks/'+id;
  console.log(track)
  // SC.stream(track, function(sound) {
  //   start.onclick = function(e) {
  //     e.preventDefault();
  //     sound.start();
  //   };

  //   stop.onclick = function(e) {
  //     e.preventDefault();
  //     sound.stop();
  //   };
  // });
  // target.innerHTML = '<iframe id="soundcloud_widget" src="http://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/'+id+'&show_artwork=false&liking=false&sharing=false&auto_play=false" width="420" height="120" frameborder="no"></iframe>'
  var src = 'http://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/'+id+'&show_artwork=false&liking=false&sharing=false&auto_play=false" width="420" height="120" frameborder="no"'
  iframe.setAttribute("src", src);

  player.bind(SC.Widget.Events.READY, function() {
    // setInfo();
    // player.play();
    alert("ready!");
  });
}




window.onload = function() {
  SC.initialize({
    client_id: "be2f745f816c1df784b23dc87a1fd65f"
    // redirect_uri: "file:///Users/jcollyer/Documents/projects/soundCloud/index.html",
  });

  var menuLinks = document.getElementsByClassName('genre');
  var results = document.getElementById('results');


  toggle.onclick = function(e) {
    e.preventDefault();
    player.toggle();
  };

  next.onclick = function(e) {

  }

  showList = function(genre) {
    results.innerHTML = "";
    console.log(genre);
    showTrackList(genre);
  }

}//window.onload
