// Video Play/Pause Function

AFRAME.registerComponent('pauser-1', {
    init: function() {
        var myVideo = document.querySelector('#ad1');
        this.el.addEventListener('click', function() {
            if (myVideo.paused) {
                myVideo.play();
            }
            else {
                myVideo.pause();
            }
        });
    }
});

AFRAME.registerComponent('pauser-2', {
    init: function() {
        var myVideo = document.querySelector('#ad2');
        this.el.addEventListener('click', function() {
            if (myVideo.paused) {
                myVideo.play();
            }
            else {
                myVideo.pause();
            }
        });
    }
});

AFRAME.registerComponent('pauser-3', {
    init: function() {
        var myVideo = document.querySelector('#teashopHistory');
        this.el.addEventListener('click', function() {
            if (myVideo.paused) {
                myVideo.play();
            }
            else {
                myVideo.pause();
            }
        });
    }
});

AFRAME.registerComponent('pauser-4', {
    init: function() {
        var myVideo = document.querySelector('#ad3');
        this.el.addEventListener('click', function() {
            if (myVideo.paused) {
                myVideo.play();
            }
            else {
                myVideo.pause();
            }
        });
    }
});

// There has GOT to be a better way to do this lmfao