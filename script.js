console.log("Welcome to Spotify");

//Initialize the Variables
let songTndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Sweater Weather", filePath: "songs/1.mp3", coverPath: "1.jpg"},
    {songName: "fragile", filePath: "songs/2.mp3", coverPath: "2.jpg"},
    {songName: "deflower me", filePath: "songs/3.mp3", coverPath: "3.jpg"},
    {songName: "hello world", filePath: "songs/4.mp3", coverPath: "4.jpg"},
    {songName: "tenessee", filePath: "songs/5.mp3", coverPath: "5.jpg"},
    {songName: "raabta", filePath: "songs/6.mp3", coverPath: "6.jpg"},
    {songName: "lavender haze", filePath: "songs/7.mp3", coverPath: "7.jpg"},
    {songName: "yesly", filePath: "songs/8.mp3", coverPath: "8.jpg"},
    {songName: "rainbow", filePath: "songs/9.mp3", coverPath: "9.jpg"},
    {songName: "heeheh", filePath: "songs/10.mp3", coverPath: "10.jpg"},
]

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handle play/pause click

masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// const hi = ()=> {
//     console.log('jhi');
// }

audioElement.addEventListener('timeupdate', ()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${index+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})