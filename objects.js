var playlist = { bruno: "finesse" };
function updatePlaylist(playlist, bruno, thatsWhatILike) {
  return object.assign( {}, playlist, { [bruno]: thatsWhatILike });
} 
function removeFromPlaylist()