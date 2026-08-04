// =====================================
// BUTTONS
// =====================================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const continueBtn = document.getElementById("continueBtn");
const page3Next = document.getElementById("page3Next");
const page4Next = document.getElementById("page4Next");
const finishBtn = document.getElementById("finishBtn");

// =====================================
// PAGES
// =====================================

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");

// =====================================
// PAGE 3 ELEMENTS
// =====================================

const gallery = document.getElementById("memoryGallery");

const centerCard = document.querySelector(".centerCard");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");
const c5 = document.querySelector(".c5");

// =====================================
// PAGE 4 PLAYER ELEMENTS
// (Part 2 me use honge)
// =====================================

const audio = document.getElementById("audioPlayer");

const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const progressBar = document.getElementById("progressBar");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const songName = document.getElementById("songName");
const artistName = document.getElementById("artistName");

const cd = document.getElementById("cd");

// =====================================
// PAGE 5 ELEMENTS
// =====================================

const typingText = document.getElementById("typingText");
const cursor = document.getElementById("cursor");
const letterMusic = document.getElementById("letterMusic");

// =====================================
// PAGE 1 → PAGE 2
// =====================================

yesBtn.addEventListener("click",()=>{

    page1.style.display="none";
    page2.style.display="flex";

});

// =====================================
// NO BUTTON
// =====================================

noBtn.addEventListener("mouseover",()=>{

    const x=Math.random()*(window.innerWidth-150);
    const y=Math.random()*(window.innerHeight-80);

    noBtn.style.position="fixed";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";

});

// =====================================
// PAGE 2 → PAGE 3
// =====================================

continueBtn.addEventListener("click",()=>{

    page2.style.display="none";
    page3.style.display="flex";

    gallery.style.display="block";

    centerCard.style.opacity="1";
    centerCard.style.animation="zoomIn .8s forwards";

    setTimeout(()=>{

        c2.style.opacity="1";
        c2.style.animation="slideLeft .8s forwards";

    },300);

    setTimeout(()=>{

        c3.style.opacity="1";
        c3.style.animation="slideRight .8s forwards";

    },600);

    setTimeout(()=>{

        c4.style.opacity="1";
        c4.style.animation="slideUp .8s forwards";

    },900);

    setTimeout(()=>{

        c5.style.opacity="1";
        c5.style.animation="slideDown .8s forwards";

    },1200);

    setTimeout(()=>{

        page3Next.style.display="inline-block";

    },1800);

});

// =====================================
// PAGE 3 → PAGE 4
// =====================================

page3Next.addEventListener("click",()=>{

    page3.style.display="none";
    page4.style.display="flex";

});
// =====================================
// PLAYLIST
// =====================================

const songs = [

{
    title:"Aap Jaisa Koi ❤️",
    artist:"For My Favourite Person",
    file:"music/cover11.mp3",
    cover:"images/cover1aap.jpg"
},

{
    title:"Mi Amor 🌸",
    artist:"For My Favourite Person",
    file:"music/cover22.mp3",
    cover:"images/cover2.png"
},

{
    title:"Piche Tere 💕",
    artist:"For My Favourite Person",
    file:"music/cover33.mp3",
    cover:"images/cover3.png"
},

{
    title:"Libaas 🥹",
    artist:"For My Favourite Person",
    file:"music/cover44.mp3",
    cover:"images/cover4.png"
},

{
    title:"Chikni Chameli 😝",
    artist:"For My Favourite Person",
    file:"music/cover55.mp3",
    cover:"images/cover5.png"
}

];

let currentSong = 0;

// Album Photo

const albumPhoto = document.querySelector(".albumPhoto");

// =====================================
// LOAD SONG
// =====================================

function loadSong(index){

    audio.src = songs[index].file;

    songName.innerText = songs[index].title;

    artistName.innerText = songs[index].artist;

    albumPhoto.src = songs[index].cover;

}

loadSong(currentSong);

// =====================================
// PLAY / PAUSE
// =====================================

playBtn.addEventListener("click",()=>{

    if(audio.paused){

        audio.play();

        playBtn.innerHTML="⏸";

        cd.style.animationPlayState="running";

    }

    else{

        audio.pause();

        playBtn.innerHTML="▶";

        cd.style.animationPlayState="paused";

    }

});

// =====================================
// NEXT
// =====================================

nextBtn.addEventListener("click",()=>{

    currentSong++;

    if(currentSong>=songs.length){

        currentSong=0;

    }

    loadSong(currentSong);

    audio.play();

    playBtn.innerHTML="⏸";

    cd.style.animationPlayState="running";

});

// =====================================
// PREVIOUS
// =====================================

prevBtn.addEventListener("click",()=>{

    currentSong--;

    if(currentSong<0){

        currentSong=songs.length-1;

    }

    loadSong(currentSong);

    audio.play();

    playBtn.innerHTML="⏸";

    cd.style.animationPlayState="running";

});

// =====================================
// TIME UPDATE
// =====================================

audio.addEventListener("timeupdate",()=>{

    const progress=(audio.currentTime/audio.duration)*100;

    progressBar.value=progress||0;

    currentTime.innerHTML=formatTime(audio.currentTime);

    duration.innerHTML=formatTime(audio.duration);

});

// =====================================
// SEEK
// =====================================

progressBar.addEventListener("input",()=>{

    audio.currentTime=(progressBar.value/100)*audio.duration;

});

// =====================================
// AUTO NEXT
// =====================================

audio.addEventListener("ended",()=>{

    currentSong++;

    if(currentSong < songs.length){

        loadSong(currentSong);

        audio.play();

    }

    else{

        playBtn.innerHTML="▶";

        cd.style.animationPlayState="paused";

        page4Next.style.display="inline-block";

    }

});

// =====================================
// TIME FORMAT
// =====================================

function formatTime(sec){

    if(isNaN(sec)) return "0:00";

    const m=Math.floor(sec/60);

    const s=Math.floor(sec%60);

    return m+":"+(s<10?"0":"")+s;

}
/// =====================================
// PAGE 5 LETTER
// =====================================

const letter = `Dear Mona ❤️,

Happy Birthdayyy!! 🫶✨

Aaj ka din sirf aapka hai, aur I hope aapko realise ho ki aap kitni special ho. Honestly, jab main aapse pehli baar mili thi, tab maine kabhi nahi socha tha ki hum itne kareeb aa jayenge aur aap meri life ka itna pyaara part ban jaogi.

Aur phir woh Discord wala “Biwi wala idk”😭😭 (jo humne mazaak me kiya tha), mujhe bilkul nahi laga tha ki ek random si funny moment ke wajah se hum itne close ho jayenge. Kab ye normal baatein itni achi memories ban gayi, pata hi nahi chala.

Jaise jaise maine aapko jaana, mujhe realise hua ki aap kitni amazing aur genuine ho. Aapki apni ek alag hi vibe hai jo aapko sabse alag banati hai.

Ek baat hamesha yaad rakhna ki aap deserve karte ho saari achi cheezein jo life aapko de sakti hai. Kabhi apni worth doubt mat karna, kyunki aap jitna sochte ho usse bhi zyada amazing ho.

I hope aapka ye saal bahut saari beautiful moments se bhara ho. Jo bhi aap chahti ho, woh sab aapko mile aur aap hamesha aise hi smile karte raho.

Bas aise hi rehna aurr apni ye pookiee si personality ke saath😛😛

Once again, Janamdin Mubarrakhoo ji!! ❤️✨

I hope apka din ke apki trh cutu sa ho😘💝`;



let letterIndex = 0;

// =====================================
// TYPEWRITER
// =====================================

function typeLetter(){

    if(letterIndex < letter.length){

        typingText.textContent += letter.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,35);

    }

    else{

        cursor.style.display = "none";

        finishBtn.style.display = "inline-block";

    }

}

// =====================================
// PAGE 4 → PAGE 5
// =====================================

page4Next.addEventListener("click",()=>{

    // Stop Page 4 music
    audio.pause();
    audio.currentTime = 0;

    page4.style.display = "none";
    page5.style.display = "flex";

    typingText.textContent = "";

    cursor.style.display = "inline";

    finishBtn.style.display = "none";

    letterIndex = 0;

    typeLetter();

    if(letterMusic){

        letterMusic.volume = 0.35;

        letterMusic.play();

    }

});

// =====================================
// FINISH BUTTON
// =====================================

finishBtn.addEventListener("click",()=>{

    // Music fade

    if(letterMusic){

        let fade = setInterval(()=>{

            if(letterMusic.volume > 0.02){

                letterMusic.volume -= 0.02;

            }

            else{

                clearInterval(fade);

                letterMusic.pause();

            }

        },70);

    }

    // Center Burst

    confetti({

        particleCount:180,
        spread:120,
        startVelocity:40,
        origin:{y:0.6}

    });

    // Left Burst

    setTimeout(()=>{

        confetti({

            particleCount:90,
            angle:60,
            spread:70,
            origin:{x:0}

        });

    },250);

    // Right Burst

    setTimeout(()=>{

        confetti({

            particleCount:90,
            angle:120,
            spread:70,
            origin:{x:1}

        });

    },350);

    // Final shower

    setTimeout(()=>{

        confetti({

            particleCount:220,
            spread:170,
            origin:{y:0.5}

        });

    },700);

    // Thank You

    setTimeout(()=>{

        alert(
`💖 Thank You For Visiting 💖

Happy Birthday Mona 🌸

I hope this little website made you smile.
Have the happiest birthday ever ❤️`
        );

    },1500);

});

// =====================================
// BLINKING CURSOR
// =====================================

setInterval(()=>{

    if(cursor){

        cursor.style.visibility =
        cursor.style.visibility === "hidden"
        ? "visible"
        : "hidden";

    }

},500);

// =====================================
// PREVENT DRAGGING
// =====================================

document.querySelectorAll("img").forEach(img=>{

    img.draggable = false;

});

// =====================================
// PREVENT TEXT SELECTION
// =====================================

document.body.onselectstart = () => false;

// =====================================
// PRELOAD IMAGES
// =====================================

window.addEventListener("load",()=>{

    document.querySelectorAll("img").forEach(img=>{

        const preload = new Image();

        preload.src = img.src;

    });

});