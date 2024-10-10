/*document.addEventListener('DOMContentLoaded', () => {
    const albums = document.querySelectorAll('.music-album');

    const audioFiles = {
      'Big Dawgs': '1.mp3'
    };

    albums.forEach((album) => {
      let isPlaying = false;
      let audio = null;

      album.addEventListener('click', function(){
        const songName = document.getElementById('songName1');

        if(!audio){
          audio = new Audio(audioFiles[songName])
        }

        if(!isPlaying){
          audio.play();
          this.classList.add('playing')
        }

        else{
          audio.pause();
          this.classList.remove('playing')
        }

        isPlaying = !isPlaying;
      });
    });
  });*/

/*document.addEventListener('DOMContentLoaded', () => {
    const albums = document.querySelectorAll('.music-album');
  
    // Object that stores the audio file paths mapped by song names
    const audioFiles = {
      'Big Dawgs': '1.mp3',
      'Sorry': '2.mp3',
      'Girls Like You': '3.mp3'
      // Add more songs here
    };
  
    albums.forEach((album) => {
      let isPlaying = false; // Track whether the audio is playing
      let audio = null; // Placeholder for the audio element
  
      album.addEventListener('click', function () {
        // Get the song name from the <h2> element next to the clicked album cover
        const songName = this.nextElementSibling.textContent.trim();
  
        // If audio is not already loaded, create an audio object with the song's path
        if (!audio) {
          const audioPath = audioFiles[songName]; // Match the song name to the audio file
          if (audioPath) {
            audio = new Audio(audioPath);
          } else {
            console.error(`No audio file found for song: ${songName}`);
            return; // Exit if no matching audio file
          }
        }
  
        // Toggle play/pause based on the current state
        if (!isPlaying) {
          audio.play();
          this.classList.add('playing'); // Add a class to indicate playing state
        } else {
          audio.pause();
          this.classList.remove('playing'); // Remove the class when paused
        }
  
        isPlaying = !isPlaying; // Toggle the play state
      });
    });
  });
  */

/*document.addEventListener('DOMContentLoaded', () => {
    const albums = document.querySelectorAll('.music-album');
  
    // Object that stores the audio file paths mapped by song names
    const audioFiles = {
      'Big Dawgs': '1.mp3',
      'Sorry': '2.mp3',
      'Girls Like You': '3.mp3'
      // Add more songs here
    };
  
    let currentAudio = null; // Track the currently playing audio
    let currentlyPlayingAlbum = null; // Track the currently playing album
  
    albums.forEach((album) => {
      let audio = null;
  
      album.addEventListener('click', function () {
        const songName = this.nextElementSibling.textContent.trim();
  
        // Stop the currently playing audio if another album is clicked
        if (currentAudio && currentAudio !== audio) {
          currentAudio.pause();
          currentAudio.currentTime = 0; // Reset the audio to the beginning
          if (currentlyPlayingAlbum) {
            currentlyPlayingAlbum.classList.remove('playing'); // Remove the 'playing' class
          }
        }
  
        // If this album's song is not already loaded, create a new audio object
        if (!audio) {
          const audioPath = audioFiles[songName];
          if (audioPath) {
            audio = new Audio(audioPath);
          } else {
            console.error(`No audio file found for song: ${songName}`);
            return;
          }
        }
  
        // If this song is currently playing, pause it
        if (currentAudio === audio && !audio.paused) {
          audio.pause();
          this.classList.remove('playing');
        } else {
          // Otherwise, play this song
          audio.play();
          this.classList.add('playing');
        }
  
        // Set the current audio and album to this one
        currentAudio = audio;
        currentlyPlayingAlbum = this;
      });
    });
  });
  */

document.addEventListener('DOMContentLoaded', () => {
  const albums = document.querySelectorAll('.music-album')
  const audioFiles = {
    'Big Dawgs': '1.mp3', 'Sorry': '2.mp3', 'Girls Like You': '3.mp3', 'Blinding Lights': '4.mp3', 'Perfect': '5.mp3', 'Señorita': '6.mp3',
    'Happier': '7.mp3', 'I Wanna Be Yours': '8.mp3', 'Yummy': '9.mp3', 'Love Me Like You Do': '10.mp3', 'Baby': '11.mp3', 'Havana': '12.mp3',
    'Dandellons': '13.mp3', 'Night Changes': '14.mp3', 'Whenever, Whenever': '15.mp3', 'Treat You Better': '16.mp3', 'Safari': '17.mp3', 'Everything Sucks': '18.mp3',
    'Unstoppable': '19.mp3', 'Industry Baby': '20.mp3', 'Falling': '21.mp3', 'Astronaut Ocean': '22.mp3', 'Shape of You': '23.mp3', 'Lovely': '24.mp3',
    'Despasito': '25.mp3', 'El Dorado': '26.mp3', 'Cradles': '27.mp3', 'Love Your Voice': '28.mp3', 'Thunder': '29.mp3', 'Alone': '30.mp3'
  };

  albums.forEach((album) => {
    let isPlaying = false;
    let audio = null;
    album.addEventListener('click', function(){
      const songName = this.nextElementSibling.textContent.trim();
      if(!audio){
        audio = new Audio(audioFiles[songName])
      }
      if(!isPlaying){
        audio.play()
        this.classList.add('playing')
      }
      else{
        audio.pause()
        this.classList.remove('playing')
      }
      isPlaying = !isPlaying
    })
  })
})