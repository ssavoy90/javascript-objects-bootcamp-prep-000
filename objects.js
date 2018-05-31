var playlist = {artist: "song title"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete artist.song;
  return playlist
}