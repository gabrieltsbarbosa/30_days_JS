window.addEventListener("keydown", function(e){
    var key = e.keyCode;
    sound(key);
});

window.addEventListener("click", function(e){
    var key;
    if(e.target.tagName != "DIV"){
        key = e.target.parentElement.attributes["data-key"].value;
    }else{
        key = e.target.attributes["data-key"].value;
    }
    sound(key);
});

function sound(key){
    var media = document.querySelector('audio[data-key="' + key + '"]');
    if(!media) return;
    var tag = document.querySelector('div[data-key="' + key + '"]');
    tag.classList.remove("play");
    tag.classList.add("play");
    media.currentTime = 0;
    media.play();
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', function(e){
    if(e.propertyName != 'scale') return;
    this.classList.remove("play");
}));