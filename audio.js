function muteAudio() {
    var audio =  document.getElementById('audio');
    audio.muted = !audio.muted;
    var icon = document.getElementById('sound-icon');
    var btnAudio = document.getElementById('audioControl');
    
    if (audio.muted === false) {
        icon.src = 'images/unmuted.png';
    } else {
        icon.src = 'images/muted.png';
    }
    
}