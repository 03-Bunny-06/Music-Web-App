**Music Album Player**

Project Description:

This project is a simple web-based music album audio player built using JavaScript. The script dynamically links album names to audio files, allowing users to play or pause songs by clicking on corresponding album elements on the webpage.

<hr/>

Features:

* Interactive Music Albums: Users can click on an album to play or pause the associated song.
* Dynamic Audio Mapping: Each album element is mapped to a specific audio file.
* Play/Pause Toggle: Clicking on the same album toggles between playing and pausing the audio.

<hr/>

How It Works:

1. The script waits for the DOM content to fully load.
2. Each album element is linked to an audio file using the audioFiles object.
3. When an album is clicked:
  * If the song is not already playing, a new Audio instance is created, and playback starts.
  * If the song is already playing, it pauses playback.
4. The album's visual state (e.g., adding a playing class) updates to reflect whether the song is playing or paused.

<hr/>

Requirements:

* A web page containing elements with the class music-album.
* The text content of the album's adjacent sibling element should match the song name in the audioFiles object.
* The corresponding .mp3 files should be present in the same directory as the script or accessible via the given path.

<hr/>

Usage:

1. Add the script to your HTML file.
2. Include div elements with the class music-album in your markup for each album.
3. Place the song name as the text content of the sibling element adjacent to the music-album element.
4. Ensure all .mp3 files are available in the specified location.


![image](https://github.com/user-attachments/assets/64ad167e-adac-41ba-b15d-9bc36b5a6e43)

![image](https://github.com/user-attachments/assets/994d6289-5ac6-4fe2-9625-939887041585)
