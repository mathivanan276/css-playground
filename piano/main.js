function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

const play = (key) => {
    switch(key){
        case 'C' : 
        // console.log(event.key);
            new sound('./assets/tones/C.wav').play();
            break;
        case 'D' : 
            new sound('./assets/tones/D.wav').play();
            break;
        case 'E' : 
            new sound('./assets/tones/E.wav').play();
            break;
        case 'F' : 
            new sound('./assets/tones/F.wav').play();
            break;
        case 'G' : 
            new sound('./assets/tones/G.wav').play();
            break;
        case 'A' : 
            new sound('./assets/tones/A.wav').play();
            break;
        case 'B' : 
            new sound('./assets/tones/B.wav').play();
            break;
        case 'C#' :
            console.log('C#'); 
            new sound('./assets/tones/CS.wav').play();
            break;
        case 'E#' :
            new sound('./assets/tones/ES.wav').play();
            break;
        case 'F#' :
            new sound('./assets/tones/FS.wav').play();
            break;
        case 'G#' :
            new sound('./assets/tones/GS.wav').play();
            break;
        case 'B#' :
            new sound('./assets/tones/BS.wav').play();
            break;
    }
}