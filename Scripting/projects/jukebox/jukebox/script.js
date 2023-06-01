var jukebox = document.querySelector('ul.player');
var first = second = third = fourth = 0;
jukebox.addEventListener('click', function (e) {
  var sname = e.target.getAttribute('data-src');
  var isPlaying = document.querySelector('#player');
  if (isPlaying) {
    if (sname === isPlaying.getAttribute('src')) {
      if (isPlaying.paused) {
        isPlaying.play();
        e.target.id = 'playing';
      } else {
        isPlaying.pause();
        e.target.id = 'paused';
      }
    }
    else {
      isPlaying.src = sname;
      isPlaying.play();
      if (document.querySelector('#playing')) {
        document.querySelector('#playing').id = "";
        e.target.id = 'playing';
      }
      else {
        document.querySelector('#paused').id = "";
        e.target.id = 'playing';
      }
      switch (sname) {
        case "David Bowie - Changes.mp3": first++; break;
        case "David Bowie - Life on Mars.mp3": second++; break;
        case "David Bowie - Starman.mp3": third++; break;
        case "David Bowie - Suffragette city.mp3": fourth++; break;
        default: break;
      }
      favourite();
    }
  }
  else {
    var audioPlayer = document.createElement('audio');
    audioPlayer.id = 'player';
    e.target.id = 'playing';
    audioPlayer.src = sname;
    document.body.appendChild(audioPlayer);
    audioPlayer.play();
    switch (sname) {
      case "David Bowie - Changes.mp3": first++; break;
      case "David Bowie - Life on Mars.mp3": second++; break;
      case "David Bowie - Starman.mp3": third++; break;
      case "David Bowie - Suffragette city.mp3": fourth++; break;
      case "Jaymes Young - Infinity.mp3": fifth++; break;
      default: break;
    }
    favourite();
    audioPlayer.addEventListener('ended', function () {
      audioPlayer.parentNode.removeChild(audioPlayer);
      e.target.id = '';
    }, false);
  }

}, false);
function favourite() {
  document.getElementById("changes").innerHTML = ("Changes Played " + first + ' Times');
  document.getElementById("mars").innerHTML = ("Life on Mars Played " + second + ' Times');
  document.getElementById("starman").innerHTML = ("Starman Played " + third + ' Times');
  document.getElementById("suff").innerHTML = ("Suffragette city Played " + fourth + ' Times');
  let temp;
  if (first > second && first > third && first > fourth) {
    temp = ("Favourite song is Changes! It Played " + first + ' Times');
    document.getElementById("name").innerHTML = temp;
  }
  else if (second > third && second > fourth) {
    temp = ("Favourite song is Life on Mars! It Played " + second + ' Times');
    document.getElementById("name").innerHTML = temp;
  }
  else if (third > fourth) {
    temp = ("Favourite song is Starman! It Played " + third + ' Times');
    document.getElementById("name").innerHTML = temp;
  }
  else {
    temp = ("Favourite song is Suffragette city It Played " + fourth + ' Times');
    document.getElementById("name").innerHTML = temp;
  }
  console.log(first, second, third, fourth);
}