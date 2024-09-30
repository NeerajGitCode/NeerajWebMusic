// Get the elements
const mainBox = document.querySelector(".section-one");
const anotherSlide = document.getElementById("a-slider");
const disturb = document.querySelector(".disturb");
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openBtn");
const playbox = document.querySelector(".play-box");
const songList = document.getElementById("songList");
const playPauseBtn = document.getElementById("playPause");
const prevSongBtn = document.getElementById("prevSong");
const nextSongBtn = document.getElementById("nextSong");
const seekBar = document.getElementById("seekBar");
const volumeControl = document.getElementById("volumeControl");
const playImg = document.getElementById("play-img");
const currentAlbumCover = document.getElementById("currentAlbumCover");
const currentSongTitle = document.getElementById("currentSongTitle");
const currentSongArtist = document.getElementById("currentSongArtist");
const currentAlbumCover2 = document.getElementById("a-currentAlbumCover");
const currentSongTitle2 = document.getElementById("a-currentSongTitle");
const currentSongArtist2 = document.getElementById("a-currentSongArtist");
const allBtn = document.querySelector(".all-btn");
const timeline = document.getElementById("timeline"); // Get the timeline element
const carts = document.querySelectorAll(".cart");
const carts2 = document.querySelectorAll(".cart2");
const t = document.querySelector(".song-title");
const startTime = document.querySelector("#startTime");
const endTime = document.querySelector("#endTime");
const home = document.querySelector(".home");
const english = document.querySelector("#english");
const dhanda = document.querySelector("#dhanda");
const Bintu = document.querySelector("#Bintu");
const laddi = document.querySelector("#laddi");
const shubh = document.querySelector("#shubh");
const sidhu = document.querySelector("#sidhu");
const hindi = document.querySelector("#hindi");
const lofi = document.querySelector("#lofi");

let currentSongIndex = 0; // Initialize the index
let currentAudio = null; // Variable to hold the current audio object
const songs = [
  {
    name: "Up To U",
    artist: "Dhanda Nyoliwala",
    albumCover: "Album/uptoyou.jpeg",
    src: "songs/song9.mp3",
  },
  {
    name: "Middle Finger",
    artist: "Khasa Aala Chahar",
    albumCover: "Album/middlefinger.jpeg",
    src: "songs/song2.mp3",
  },
  {
    name: "Dabya Ni Karde",
    artist: "Bintu Pabra",
    albumCover: "Album/dabeya.jpeg",
    src: "songs/song3.mp3",
  },
  {
    name: "Haryane Ka Jaat",
    artist: "Raju Panjabi",
    albumCover: "Album/jaat.jpeg",
    src: "songs/song4.mp3",
  },
  {
    name: "Rubicone",
    artist: "Dhanda Nyoliwala",
    albumCover: "Album/rabian.jpeg",
    src: "songs/song5.mp3",
  },
  {
    name: "Death Row",
    artist: "Dhanda Nyoliwala",
    albumCover: "Album/death.jpeg",
    src: "songs/song6.mp3",
  },
  {
    name: "bLock",
    artist: "Dhanda Nyoliwala",
    albumCover: "Album/block.jpeg",
    src: "songs/song1.mp3",
  },
  {
    name: "Russian Bandana",
    artist: "Dhanda Nyoliwala",
    albumCover: "Album/rusian.jpeg",
    src: "songs/song7.mp3",
  },
  {
    name: "Ha Ha Ha",
    artist: "Dhanda Nyoliwala",
    albumCover: "Album/haha.jpeg",
    src: "songs/song8.mp3",
  },
  {
    name: "NO MERCY",
    artist: "Dhanda Nyoliwala",
    albumCover: "Album/nomercy.jpeg",
    src: "songs/song10.mp3",
  },
  {
    name: "Unstoppable",
    artist: "Dhanda Nyoliwala",
    albumCover: "Album/unstopable.jpeg",
    src: "songs/song11.mp3",
  },
  {
    name: "4 Days",
    artist: "Dhanda Nyoliwala",
    albumCover: "Album/4day.jpeg",
    src: "songs/song12.mp3",
  },
  {
    name: "Ego Killer",
    artist: "Dhanda Nyoliwala",
    albumCover: "Album/ego.jpeg",
    src: "songs/song13.mp3",
  },
];
const additionalSongs1 = [
  {
    name: "Alone , Pt",
    artist: "Alan Walker",
    albumCover: "englishAlbum/alone.jpg",
    src: "english/song1.mp3",
  },
  {
    name: "Love Story",
    artist: "Indila",
    albumCover: "englishAlbum/indila.jpeg",
    src: "english/song2.mp3",
  },
  {
    name: "Don Omar",
    artist: "Danza Kuduro",
    albumCover: "englishAlbum/danza.jpeg",
    src: "english/song3.mp3",
  },
  {
    name: "Summertime Sadness",
    artist: "Lana Del Rey -",
    albumCover: "englishAlbum/song4.jpeg",
    src: "english/song4.mp3",
  },
  {
    name: "Infinity Lofi",
    artist: "Jaymes Young-",
    albumCover: "englishAlbum/song5.jpeg",
    src: "english/song5.mp3",
  },
  {
    name: "Faded",
    artist: "Alan Walker",
    albumCover: "englishAlbum/song6.jpeg",
    src: "english/song6.mp3",
  },
  {
    name: "My Heart Will Go On",
    artist: "Céline Dion, James",
    albumCover: "englishAlbum/song7.jpeg",
    src: "english/song7.mp3",
  },
  {
    name: "Mary On A Cross",
    artist: "Ghost .",
    albumCover: "englishAlbum/song8.jpeg",
    src: "english/song8.mp3",
  },
  {
    name: "Unstoppable",
    artist: "Sea - (slowed-reverb)",
    albumCover: "englishAlbum/song9.jpeg",
    src: "english/song9.mp3",
  },
  {
    name: "Bloody Mary",
    artist: "Lady Gaga",
    albumCover: "englishAlbum/song10.jpeg",
    src: "english/song10.mp3",
  },
  {
    name: "Fearless Pt. II",
    artist: "Lost Sky",
    albumCover: "englishAlbum/song11.jpeg",
    src: "english/song11.mp3",
  },
];

const additionalSongs2 = [
  {
    name: "Roots",
    artist: "Bintu Pabraa & KP",
    albumCover: "bintuAlbum/s1.jpeg",
    src: "bintu/s1.mp3",
  },
  {
    name: "Kah Diye",
    artist: "Manisha Sharma - Bintu",
    albumCover: "bintuAlbum/s2.jpeg",
    src: "bintu/s2.mp3",
  },
  {
    name: "Yari",
    artist: "Bintu Pabra KP Kundu",
    albumCover: "bintuAlbum/s3.jpeg",
    src: "bintu/s3.mp3",
  },
  {
    name: "Goli",
    artist: "Sahil Dhull & Nonu Rana ft.",
    albumCover: "bintuAlbum/s4.jpeg",
    src: "bintu/s4.mp3",
  },
];

const additionalSongs3 = [
  {
    name: "RUBICON DRILL",
    artist: "Laddi Chahal.",
    albumCover: "laddiAlbum/s1.jpeg",
    src: "laddi/s1.mp3",
  },
  {
    name: "FARMING",
    artist: "Laddi Chahal ft Permish",
    albumCover: "laddiAlbum/s3.jpeg",
    src: "laddi/s2.mp3",
  },
  {
    name: "Aam Jahe Munde",
    artist: "Laddi Chahal ft Permish",
    albumCover: "laddiAlbum/s2.jpeg",
    src: "laddi/s3.mp3",
  },
  {
    name: "Check It Out",
    artist: "Parmish Verma, Paradox",
    albumCover: "laddiAlbum/s4.jpeg",
    src: "laddi/s4.mp3",
  },
  {
    name: "Nature",
    artist: "Kabira, NJ Nindaniya",
    albumCover: "laddiAlbum/s5.jpeg",
    src: "laddi/s5.mp3",
  },
  {
    name: "Lafander ",
    artist: "Vipin Mehandipuria",
    albumCover: "laddiAlbum/s6.jpeg",
    src: "laddi/s6.mp3",
  },
  {
    name: "Z - Black",
    artist: "Haryanvi Song",
    albumCover: "laddiAlbum/s7.jpeg",
    src: "laddi/s7.mp3",
  },
  {
    name: "Over Confidence",
    artist: "Billa Sonipat Ala",
    albumCover: "laddiAlbum/s8.jpeg",
    src: "laddi/s8.mp3",
  },
];
const additionalSongs4 = [
  {
    name: "King Shit",
    artist: "Shubh",
    albumCover: "shubhAlbum/s1.jpeg",
    src: "shubh/s1.mp3",
  },
  {
    name: "You And Me",
    artist: "Shubh",
    albumCover: "shubhAlbum/s2.jpeg",
    src: "shubh/s2.mp3",
  },
  {
    name: "One Love",
    artist: "Shubh",
    albumCover: "shubhAlbum/s3.jpeg",
    src: "shubh/s3.mp3",
  },
  {
    name: "Bandana",
    artist: "Shubh",
    albumCover: "shubhAlbum/s4.jpeg",
    src: "shubh/s4.mp3",
  },
  {
    name: "Elevated",
    artist: "Shubh",
    albumCover: "shubhAlbum/s5.jpeg",
    src: "shubh/s5.mp3",
  },
];
const additionalSongs5 = [
  {
    name: "Old Skool",
    artist: "Sidhu Moose Wala",
    albumCover: "sidhuAlbum/s1.jpeg",
    src: "sidhu/s1.mp3",
  },
  {
    name: "295",
    artist: "Sidhu Moose Wala",
    albumCover: "sidhuAlbum/s2.jpeg",
    src: "sidhu/s2.mp3",
  },
  {
    name: "Born to Shine",
    artist: "Diljit Dosanjh",
    albumCover: "sidhuAlbum/s3.jpeg",
    src: "sidhu/s3.mp3",
  },
  {
    name: "Same Beef",
    artist: "Sidhu Moose Wala",
    albumCover: "sidhuAlbum/s4.jpeg",
    src: "sidhu/s4.mp3",
  },
  {
    name: "Just Listen",
    artist: "Sidhu Moose Wala",
    albumCover: "sidhuAlbum/s5.jpeg",
    src: "sidhu/s5.mp3",
  },
  {
    name: "Game",
    artist: "Sidhu Moose Wala",
    albumCover: "sidhuAlbum/s6.jpeg",
    src: "sidhu/s6.mp3",
  },
];

const additionalSongs6 = [
  {
    name: "Admirin' You ",
    artist: "Karan Aujla, Ikky",
    albumCover: "bollywoodAlbum/s1.jpeg",
    src: "bollywood/s1.mp3",
  },
  {
    name: "Millionaire ",
    artist: "Yo Yo Honey Singh",
    albumCover: "bollywoodAlbum/s2.jpeg",
    src: "bollywood/s2.mp3",
  },
  {
    name: "Farmaish ",
    artist: "Laddi Chahal, Parmish Verma",
    albumCover: "bollywoodAlbum/s3.jpeg",
    src: "bollywood/s3.mp3",
  },
  {
    name: "Tip Tip Barsa",
    artist: "Udit Narayan",
    albumCover: "bollywoodAlbum/s4.jpeg",
    src: "bollywood/s4.mp3",
  },
  {
    name: "Tip Tip Song",
    artist: "Akshya Kumar",
    albumCover: "bollywoodAlbum/s5.jpeg",
    src: "bollywood/s5.mp3",
  },
  {
    name: "Nashe Si Chadh Gayi",
    artist: "Vishal-Shekhar, Arijit Singh",
    albumCover: "bollywoodAlbum/s6.jpeg",
    src: "bollywood/s6.mp3",
  },
  {
    name: "To Chalun",
    artist: "Roop Kumar Rathod",
    albumCover: "bollywoodAlbum/s7.jpeg",
    src: "bollywood/s7.mp3",
  },
  {
    name: "Pyar Ki Kashti Mein",
    artist: "Udit Narayan",
    albumCover: "bollywoodAlbum/s8.jpeg",
    src: "bollywood/s8.mp3",
  },
  {
    name: "Tu Jaane Na",
    artist: "Atif Aslam",
    albumCover: "bollywoodAlbum/s9.jpeg",
    src: "bollywood/s9.mp3",
  },
  {
    name: "Mere Nishaan",
    artist: "Kailash Kher, Meet Bros Anjjan",
    albumCover: "bollywoodAlbum/s10.jpeg",
    src: "bollywood/s10.mp3",
  },
  {
    name: "Srivalli ",
    artist: "Javed Ali - Puspa",
    albumCover: "bollywoodAlbum/s11.jpeg",
    src: "bollywood/s11.mp3",
  },
  {
    name: "Tere Ishq Mein  ",
    artist: "Kumar Sanu",
    albumCover: "bollywoodAlbum/s12.jpeg",
    src: "bollywood/s12.mp3",
  },
  {
    name: "Mera Chand ",
    artist: "Kumar Sanu",
    albumCover: "bollywoodAlbum/s13.jpeg",
    src: "bollywood/s13.mp3",
  },
  {
    name: "Akhiyaan Milaoo",
    artist: "Alka Yagnik",
    albumCover: "bollywoodAlbum/s14.jpeg",
    src: "bollywood/s14.mp3",
  },
];

const additionalSongs7 = [
  {
    name: "Ranjhna ",
    artist: "slowed - reverb ",
    albumCover: "slowedAlbum/s1.jpeg",
    src: "slowed/s1.mp3",
  },
  {
    name: "Zara Zara - Lofi",
    artist: "Bombay Jayashri, DJ Aftab",
    albumCover: "slowedAlbum/s2.jpeg",
    src: "slowed/s2.mp3",
  },
  {
    name: "Teri Ore",
    artist: "VIBIE",
    albumCover: "slowedAlbum/s3.jpeg",
    src: "slowed/s3.mp3",
  },
  {
    name: "Tune Jo Na Kaha",
    artist: "Pritam LoFi Mix",
    albumCover: "slowedAlbum/s4.jpeg",
    src: "slowed/s4.mp3",
  },
  {
    name: "Dekhne Walon Ne",
    artist: "Udit Narayan",
    albumCover: "slowedAlbum/s5.jpeg",
    src: "slowed/s5.mp3",
  },
  {
    name: "Pehli Pehli Baar",
    artist: "Kumar Sanu",
    albumCover: "slowedAlbum/s6.jpeg",
    src: "slowed/s6.mp3",
  },
  {
    name: "Main Rang Sharbaton Ka",
    artist: "Pritam",
    albumCover: "slowedAlbum/s7.jpeg",
    src: "slowed/s7.mp3",
  },
  {
    name: "Shaam Bhi Khoob Hai",
    artist: "Kumar Sanu",
    albumCover: "slowedAlbum/s8.jpeg",
    src: "slowed/s8.mp3",
  },
  {
    name: "Chori Chori Dil Tera",
    artist: "Kumar Sanu",
    albumCover: "slowedAlbum/s9.jpeg",
    src: "slowed/s9.mp3",
  },
  {
    name: "Andekhi Anjaani",
    artist: "Rahul Sharma",
    albumCover: "slowedAlbum/s10.jpeg",
    src: "slowed/s10.mp3",
  },
  {
    name: "Ek Dilruba Hai",
    artist: "Udit Narayan",
    albumCover: "slowedAlbum/s11.jpeg",
    src: "slowed/s11.mp3",
  },
  {
    name: "Saiyaara",
    artist: "Prince Bharti",
    albumCover: "slowedAlbum/s12.jpeg",
    src: "slowed/s12.mp3",
  },
  {
    name: "Main Dhoondne",
    artist: "Arijit Singh",
    albumCover: "slowedAlbum/s13.jpeg",
    src: "slowed/s13.mp3",
  },
  {
    name: "Aaja We Mahiya",
    artist: "Vikash Pandey",
    albumCover: "slowedAlbum/s14.jpeg",
    src: "slowed/s14.mp3",
  },
  {
    name: "Get Ready ",
    artist: "Lofi Dark",
    albumCover: "slowedAlbum/s15.jpg",
    src: "slowed/s15.mp3",
  },
  {
    name: "Kar Her M Fateh",
    artist: "Lofi ",
    albumCover: "slowedAlbum/s16.jpeg",
    src: "slowed/s16.mp3",
  },
  {
    name: "Pani Da Rang",
    artist: "Lofi- mix ",
    albumCover: "slowedAlbum/s17.jpeg",
    src: "slowed/s17.mp3",
  },
  {
    name: "Gani",
    artist: "Lofi- mix ",
    albumCover: "slowedAlbum/s18.jpeg",
    src: "slowed/s18.mp3",
  },
  {
    name: "Divane Hm Nhi",
    artist: "Lofi-(Slow and Reverb)",
    albumCover: "slowedAlbum/s19.jpeg",
    src: "slowed/s19.mp3",
  },
  {
    name: "Khamoshiyan",
    artist: "Lofi Flip",
    albumCover: "slowedAlbum/s20.jpeg",
    src: "slowed/s20.mp3",
  },
  {
    name: "Labon Ko ",
    artist: "Lofi Lo-Fi",
    albumCover: "slowedAlbum/s21.jpeg",
    src: "slowed/s21.mp3",
  },
  {
    name: "Dekh Lena",
    artist: "Lofi Mix",
    albumCover: "slowedAlbum/s22.jpeg",
    src: "slowed/s22.mp3",
  },
];

// Load songs into the song list
if (songs.length > 0) {
  songs.forEach((song, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
          <div>
            <img src="${song.albumCover}" alt="${song.name}">
            <div class="song-info">
                <div class="song-title">${song.name}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <div class="song-icon ">
               <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          <div>
        `;

    listItem.addEventListener("click", () => {
      playSong(index); // Play the song on click
    });
    songList.appendChild(listItem);
  });
}
function getAverageColor(imgElement, callback) {
  imgElement.onload = function () {
    const colorThief = new ColorThief(); // Initialize ColorThief instance
    const dominantColor = colorThief.getColor(imgElement); // Get the dominant color from the image

    // Convert the array [R, G, B] to a CSS-friendly color string
    const bgColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;

    callback(bgColor); // Pass the background color to the callback
  };

  imgElement.crossOrigin = "anonymous"; // Make sure the image is allowed for cross-origin processing
}

let currentSongList = songs;
// Play a song by its index
function playSong(index, songList) {
  currentSongIndex = index;
  currentSongList = songList;
  const currentSong = currentSongList[index];

  // Select the list

  // Update the album cover and song information in the now-playing section
  currentAlbumCover.src = currentSong.albumCover;
  currentSongTitle.innerText = currentSong.name;
  currentSongArtist.innerText = currentSong.artist;
  currentAlbumCover2.src = currentSong.albumCover;
  currentSongTitle2.innerText = currentSong.name;
  currentSongArtist2.innerText = currentSong.artist;

  if (currentAudio) {
    currentAudio.pause(); // Pause the currently playing song
  }

  // Create a new audio object and play the selected song
  currentAudio = new Audio(currentSong.src); // Ensure the path is correct
  currentAudio
    .play()
    .then(() => {
      playPauseBtn.className = "fa-solid fa-pause"; // Change to pause ico
      updateButtonsState(); // Update button states
    })
    .catch((error) => {
      if (error.name !== "AbortError") {
        console.error("Error playing audio:", error); // Log other errors
      }
    });

  // Set the initial value of the seek bar
  seekBar.value = 0;
  startTime.innerText = "0:00";
  // When the metadata is loaded, update the seek bar's max value and listen for time updates
  currentAudio.addEventListener("loadedmetadata", () => {
    seekBar.max = currentAudio.duration; // Set seek bar max to song duration
    endTime.innerText = formatTime(currentAudio.duration); // Update end time
  });

  // Add event listener to update the seek bar and timeline as the song plays
  currentAudio.addEventListener("timeupdate", () => {
    // Calculate the progress as a percentage
    const progress = (currentAudio.currentTime / currentAudio.duration) * 100;

    // Update the visual timeline
    timeline.style.width = progress + "%"; // Update timeline width

    // Update seek bar to reflect current time in seconds
    seekBar.value = currentAudio.currentTime;
    startTime.innerText = formatTime(currentAudio.currentTime); // Update start time display
  });
  currentAudio.addEventListener("ended", () => {
    if (currentSongIndex < currentSongList.length - 1) {
      playSong(currentSongIndex + 1, currentSongList); // Play the next song
    } else {
      currentAudio.pause(); // Stop the song
      currentAudio.currentTime = 0; // Reset song to the beginning
      playPauseBtn.className = "fa-solid fa-play"; // Change to play icon
    }
  });

  // Handle seeking functionality (jumping to a specific part of the song)
  seekBar.addEventListener("input", () => {
    if (currentAudio) {
      currentAudio.currentTime = seekBar.value; // Set the current time based on seek bar input
      startTime.innerText = formatTime(currentAudio.currentTime); // Update start time
    }
  });
  getAverageColor(currentAlbumCover, (bgColor) => {
    anotherSlide.style.backgroundColor = bgColor;

    anotherSlide.style.boxShadow = `20px 30px 100px -20px ${bgColor}`;
    currentAlbumCover.style.border = `1px solid black`; // Change playbox background color

    if (window.matchMedia("(max-width: 1300px)").matches) {
      playbox.style.backgroundColor = bgColor; // Change playbox background color for small screens
    }
  });
}
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`; // Format time
}
// Update button states based on the current song index
function updateButtonsState() {
  prevSongBtn.disabled = currentSongIndex === 0; // Disable if at the first song
  nextSongBtn.disabled = currentSongIndex === currentSongList.length - 1; // Disable if at the last song
}

// Handle play/pause button click
playPauseBtn.addEventListener("click", () => {
  if (currentAudio) {
    if (currentAudio.paused) {
      currentAudio.play();
      playPauseBtn.className = "fa-solid fa-pause"; // Change to pause icon
    } else {
      currentAudio.pause();
      playPauseBtn.className = "fa-solid fa-play"; // Change to play icon
    }
  }
});

// Handle next song functionality
// Handle next song functionality
nextSongBtn.addEventListener("click", () => {
  if (currentSongIndex < currentSongList.length - 1) {
    playSong(currentSongIndex + 1, currentSongList); // Pass the current song list
    anotherSlide.style.opacity = "1";
    mainBox.style.marginTop = "250px";
    anotherSlide.style.zIndex = "10";
    disturb.style.opacity = "0";
  }
});

// Handle previous song functionality
prevSongBtn.addEventListener("click", () => {
  if (currentSongIndex > 0) {
    playSong(currentSongIndex - 1, currentSongList); // Pass the current song list
  }
});

// Handle volume control
volumeControl.addEventListener("input", (event) => {
  const volume = event.target.value;
  if (currentAudio) {
    currentAudio.volume = volume; // Set volume for the currently playing audio
  }

  // Change the color of the volume control to green
  volumeControl.style.background = `linear-gradient(to right, green ${
    volume * 100
  }%, #ccc ${volume * 100}%)`;
});

const toggleBtn = document.querySelector(".toggle-btn");
const leftBox = document.getElementById("leftBox");

const mainBox2 = document.querySelector(".main-box2");
const closeBtn = document.querySelector("#close-btn");

function openes() {
  leftBox.style.width = "431px";
  leftBox.style.minWidth = "431px";
  leftBox.style.maxWidth = "431px";
  leftBox.style.opacity = "1";
  leftBox.style.zIndex = "20";
  toggleBtn.style.right = "0";
  mainBox2.style.width = "100vw";
  mainBox2.style.marginLeft = "";
}

window.onload = function () {
  loadSongs(songs);
  // Functionality for the leftBox toggle
  const leftBox = document.getElementById("leftBox");

  const mainBox2 = document.querySelector(".main-box2");
  const closeBtn = document.querySelector("#close-btn");

  function openLeftBox() {
    leftBox.style.width = "431px";
    leftBox.style.minWidth = "431px";
    leftBox.style.maxWidth = "431px";
    leftBox.style.opacity = "1";
    leftBox.style.zIndex = "20";
    toggleBtn.style.right = "0";
    mainBox2.style.width = "100vw";
    mainBox2.style.marginLeft = "";
    // toggleBtn.style.display = "none";
  }

  function closeLeftBox() {
    leftBox.style.width = "0";
    leftBox.style.minWidth = "0";
    leftBox.style.maxWidth = "0";
    leftBox.style.opacity = "0";
    mainBox2.style.width = "100vw";
    mainBox2.style.marginLeft = "0";
    leftBox.style.zIndex = "-20";
    // toggleBtn.style.display = "block";
  }
  currentAlbumCover.onclick = function () {
    if (leftBox.style.width === "0px" || leftBox.style.width === "") {
      openLeftBox();
    } else {
      closeLeftBox();
    }
  };
  currentSongTitle.onclick = function () {
    if (leftBox.style.width === "0px" || leftBox.style.width === "") {
      openLeftBox();
    } else {
      closeLeftBox();
    }
  };
  currentSongArtist.onclick = function () {
    if (leftBox.style.width === "0px" || leftBox.style.width === "") {
      openLeftBox();
    } else {
      closeLeftBox();
    }
  };

  toggleBtn.onclick = function () {
    if (leftBox.style.width === "0px" || leftBox.style.width === "") {
      openLeftBox();
    } else {
      closeLeftBox();
    }
  };
  home.onclick = function () {
    if (leftBox.style.width === "431px") {
      closeLeftBox();
    }
  };
  // Add event listener for close button inside the leftBox
  closeBtn.onclick = function () {
    closeLeftBox();
  };

  // Function to load the first song without playing it
  function loadFirstSong() {
    currentSongIndex = 0; // Set to the first song
    const firstSong = songs[0];

    // Update the album cover and song information in the now-playing section
    currentAlbumCover.src = firstSong.albumCover;
    currentSongTitle.innerText = firstSong.name;
    currentSongArtist.innerText = firstSong.artist;
    currentAlbumCover2.src = firstSong.albumCover;
    currentSongTitle2.innerText = firstSong.name;
    currentSongArtist2.innerText = firstSong.artist;
    getAverageColor(currentAlbumCover, (bgColor) => {
      anotherSlide.style.backgroundColor = bgColor;
      anotherSlide.style.boxShadow = `20 50px 150px -20px ${bgColor}`;
      currentAlbumCover.style.border = `1px solid black`;
      if (window.matchMedia("(max-width: 1300px)").matches) {
        playbox.style.backgroundColor = bgColor; // Change playbox background color for small screens
      }
    });
    // Create a new audio object and play the first song
    currentAudio = new Audio(firstSong.src); // Load the first song

    // Set the initial value of the seek bar
    seekBar.value = 0;

    // When the metadata is loaded, update the seek bar's max value
    currentAudio.addEventListener("loadedmetadata", () => {
      seekBar.max = currentAudio.duration; // Set seek bar max to song duration
    });

    // Add event listener to update the seek bar and timeline as the song plays
    currentAudio.addEventListener("timeupdate", () => {
      // Calculate the progress as a percentage
      const progress = (currentAudio.currentTime / currentAudio.duration) * 100;

      // Update the visual timeline
      timeline.style.width = progress + "%"; // Update timeline width

      // Update seek bar to reflect current time in seconds
      seekBar.value = currentAudio.currentTime;
    });

    // Update button states (since this is the first song)
    updateButtonsState();

    playPauseBtn.addEventListener("click", () => {
      if (currentAudio) {
        if (currentAudio.paused) {
          anotherSlide.style.opacity = "-10";
          anotherSlide.style.zIndex = "0";
          mainBox.style.marginTop = "100px";
          disturb.style.opacity = "1";
        } else {
          anotherSlide.style.opacity = "1";
          mainBox.style.marginTop = "250px";
          anotherSlide.style.zIndex = "10";
          disturb.style.opacity = "0";
        }
      }
    });
  }

  // Load the first song on page load without playing it
  loadFirstSong();
  closeBtn.onclick = function () {
    closeLeftBox();
  };
};

carts.forEach((cart) => {
  const playButton = document.createElement("button");
  playButton.classList.add("play-button");
  playButton.innerHTML = '<i class="fa-solid fa-play">';
  cart.querySelector(".cart-image").appendChild(playButton);
});
carts2.forEach((cart) => {
  const playButton = document.createElement("button");
  playButton.classList.add("play-button");
  playButton.innerHTML = '<i class="fa-solid fa-play">';
  cart.querySelector(".cart-image").appendChild(playButton);
});

carts[0].addEventListener("click", () => {
  loadSongs(additionalSongs1);

  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
});

carts[9].addEventListener("click", () => {
  loadSongs(additionalSongs2);
  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
});
carts[10].addEventListener("click", () => {
  loadSongs(additionalSongs3);
  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
});
carts2[0].addEventListener("click", () => {
  loadSongs(additionalSongs4);
  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
});
carts2[1].addEventListener("click", () => {
  loadSongs(additionalSongs5);
  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
});
carts2[2].addEventListener("click", () => {
  loadSongs(additionalSongs6);
  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
});
carts2[3].addEventListener("click", () => {
  loadSongs(additionalSongs7);
  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
});
carts[1].addEventListener("click", () => {
  loadSongs(songs);
  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
});

function loadSongs(songsToAdd) {
  // Clear the existing song list
  songList.innerHTML = ""; // This will remove all existing list items
  currentSongList = songsToAdd;
  // Add the new songs to the list
  songsToAdd.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <img src="${song.albumCover}" alt="${song.name}">
            <div class="song-info">
                <div class="song-title">${song.name}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <div class="song-icon">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `;
    listItem.addEventListener("click", () => {
      playSong(index, songsToAdd); // Pass the current list
    });

    songList.appendChild(listItem);
  });
  updateButtonsState();
}

english.onclick = function (e) {
  e.preventDefault();
  loadSongs(additionalSongs1);

  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
};

dhanda.onclick = function (e) {
  e.preventDefault();
  loadSongs(songs);

  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
};

Bintu.onclick = function (e) {
  e.preventDefault();
  loadSongs(additionalSongs2);

  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
};

laddi.onclick = function (e) {
  e.preventDefault();
  loadSongs(additionalSongs3);

  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
};

shubh.onclick = function (e) {
  e.preventDefault();
  loadSongs(additionalSongs4);

  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
};

sidhu.onclick = function (e) {
  e.preventDefault();
  loadSongs(additionalSongs5);

  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
};

hindi.onclick = function (e) {
  e.preventDefault();
  loadSongs(additionalSongs6);

  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
};

lofi.onclick = function (e) {
  e.preventDefault();
  loadSongs(additionalSongs7);

  if (leftBox.style.width === "0px" || leftBox.style.width === "") {
    openes();
  }
};
