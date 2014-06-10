function muteAudio() {
    document.getElementById('audio').muted = !document.getElementById('audio').muted;
    var btnAudio = document.getElementById('audioControl');
    if (btnAudio.innerHTML === 'Mute') {
        btnAudio.innerHTML = 'Unmute';
    } else {
        btnAudio.innerHTML = 'Mute'
    }
}