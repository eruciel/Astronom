document.addEventListener("DOMContentLoaded", function() {
    var bgMusic = document.getElementById("backgroundMusic");
    bgMusic.volume = 0.15;
    var muteBtn = document.getElementById("volumeMute");
    var unmuteBtn = document.getElementById("volumeUnmute");
    
    muteBtn.addEventListener("click",e=>{
        e.preventDefault();
        bgMusic.volume=0;
        unmuteBtn.style.display="block";
        muteBtn.style.display="none";
    })
    
    unmuteBtn.addEventListener("click",e=>{
        e.preventDefault();
        bgMusic.volume=0.15;
        unmuteBtn.style.display="none";
        muteBtn.style.display="block";
    })

    var planetSun = document.getElementById("planetSun")
    var planetMercury = document.getElementById("planetMercury")
    var planetVenus = document.getElementById("planetVenus")
    var planetEarth = document.getElementById("planetEarth")
    var planetMars = document.getElementById("planetMars")
    var planetJupiter = document.getElementById("planetJupiter")
    var planetSaturn = document.getElementById("planetSaturn")
    var planetUranus = document.getElementById("planetUranus")
    var planetNeptune = document.getElementById("planetNeptune")

    var contentSun = document.getElementById("contentSun")
    var contentMercury = document.getElementById("contentMercury")
    var contentVenus = document.getElementById("contentVenus")
    var contentEarth = document.getElementById("contentEarth")
    var contentMars = document.getElementById("contentMars")
    var contentJupiter = document.getElementById("contentJupiter")
    var contentSaturn = document.getElementById("contentSaturn")
    var contentUranus = document.getElementById("contentUranus")
    var contentNeptune = document.getElementById("contentNeptune")

    planetSun.addEventListener("click",e=>{
        e.preventDefault();
        contentMercury.style.display="none"
        contentVenus.style.display="none"
        contentEarth.style.display="none"
        contentMars.style.display="none"
        contentJupiter.style.display="none"
        contentSaturn.style.display="none"
        contentUranus.style.display="none"
        contentNeptune.style.display="none"
        contentSun.style.display="flex"
    })

    planetMercury.addEventListener("click",e=>{
        e.preventDefault();
        contentMercury.style.display="flex"
        contentVenus.style.display="none"
        contentEarth.style.display="none"
        contentMars.style.display="none"
        contentJupiter.style.display="none"
        contentSaturn.style.display="none"
        contentUranus.style.display="none"
        contentNeptune.style.display="none"
        contentSun.style.display="none"
    })

    planetVenus.addEventListener("click",e=>{
        e.preventDefault();
        contentMercury.style.display="none"
        contentVenus.style.display="flex"
        contentEarth.style.display="none"
        contentMars.style.display="none"
        contentJupiter.style.display="none"
        contentSaturn.style.display="none"
        contentUranus.style.display="none"
        contentNeptune.style.display="none"
        contentSun.style.display="none"
    })

    planetEarth.addEventListener("click",e=>{
      e.preventDefault();
      contentMercury.style.display="none"
      contentVenus.style.display="none"
      contentEarth.style.display="flex"
      contentMars.style.display="none"
      contentJupiter.style.display="none"
      contentSaturn.style.display="none"
      contentUranus.style.display="none"
      contentNeptune.style.display="none"
      contentSun.style.display="none"
    })

    planetMars.addEventListener("click",e=>{
      e.preventDefault();
      contentMercury.style.display="none"
      contentVenus.style.display="none"
      contentEarth.style.display="none"
      contentMars.style.display="flex"
      contentJupiter.style.display="none"
      contentSaturn.style.display="none"
      contentUranus.style.display="none"
      contentNeptune.style.display="none"
      contentSun.style.display="none"
    })

    planetJupiter.addEventListener("click",e=>{
      e.preventDefault();
      contentMercury.style.display="none"
      contentVenus.style.display="none"
      contentEarth.style.display="none"
      contentMars.style.display="none"
      contentJupiter.style.display="flex"
      contentSaturn.style.display="none"
      contentUranus.style.display="none"
      contentNeptune.style.display="none"
      contentSun.style.display="none"
    })

    planetSaturn.addEventListener("click",e=>{
      e.preventDefault();
      contentMercury.style.display="none"
      contentVenus.style.display="none"
      contentEarth.style.display="none"
      contentMars.style.display="none"
      contentJupiter.style.display="none"
      contentSaturn.style.display="flex"
      contentUranus.style.display="none"
      contentNeptune.style.display="none"
      contentSun.style.display="none"
    })

    planetUranus.addEventListener("click",e=>{
      e.preventDefault();
      contentMercury.style.display="none"
      contentVenus.style.display="none"
      contentEarth.style.display="none"
      contentMars.style.display="none"
      contentJupiter.style.display="none"
      contentSaturn.style.display="none"
      contentUranus.style.display="flex"
      contentNeptune.style.display="none"
      contentSun.style.display="none"
    })

    planetNeptune.addEventListener("click",e=>{
      e.preventDefault();
      contentMercury.style.display="none"
      contentVenus.style.display="none"
      contentEarth.style.display="none"
      contentMars.style.display="none"
      contentJupiter.style.display="none"
      contentSaturn.style.display="none"
      contentUranus.style.display="none"
      contentNeptune.style.display="flex"
      contentSun.style.display="none"
    })


  });