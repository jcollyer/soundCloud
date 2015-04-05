SC.initialize({
  client_id: "be2f745f816c1df784b23dc87a1fd65f",
  redirect_uri: "file:///Users/jcollyer/Documents/projects/soundCloud/index.html",
});

SC.get("/groups/55517/tracks", {limit: 1}, function(tracks){
  alert("Latest track: " + tracks[0].title);
});
