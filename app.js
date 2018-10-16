new Vue ({

  el: '#gameboard',


  data: {
    blueFlash: false,
    greenFlash: false,
    yellowFlash: false,
    redFlash: false,
    userSequence: [],
    computerSequence: [],
    currentIndex: 0,
    gameLost: false,
    timer: null,
    displayTimer: 3,
    timerActive: false

  },

  methods: {
    start: function () {
      this.displayTimer = 3
      this.computerSequence = []
      this.gameLost = false;
      this.computerPlay();


    },

    computerPlay: function () {

      this.currentIndex = 0;
      let randomColor = this.getRandomColor();
      this.computerSequence.push(randomColor);

      let vue = this;
      let repeater = setInterval(function() {

        if (vue.currentIndex < vue.computerSequence.length) {

          vue.flashOn(vue.computerSequence[vue.currentIndex]);
          vue.currentIndex++;
          setTimeout(function() {
            vue.flashOff();

          }, 500);
             // vue.currentIndex++;
        } else {

            vue.currentIndex = 0;
            vue.startCountdown();
            console.log('clearing the interval');
            clearInterval(repeater);

          }
      }, 1000);



    },

    startCountdown: function () {
      let vue = this
      this.timerActive = true;
      this.displayTimer = 3;
      this.timer = setInterval(function() {
        if(vue.displayTimer > 0){
        vue.displayTimer-=1

      }else {
        vue.timerActive = false;
        clearInterval(vue.timer);
        alert("times up you lose");
      }
      }, 1000 );


    },

    button: function (color) {
      this.timerActive = false;

      clearInterval(this.timer);
      let vue = this;

      this.flashOn(color);
      setTimeout(function() {
        vue.flashOff();

          console.log(color);
          console.log(vue.computerSequence[vue.currentIndex]);
          console.log(vue.currentIndex);
        if (color == vue.computerSequence[vue.currentIndex]) {

          if (vue.currentIndex == vue.computerSequence.length - 1) {

            vue.computerPlay();

          } else {
            vue.startCountdown();

            vue.currentIndex++;

          }

        } else {

          vue.gameLost = true;
          vue.currentIndex = 0;
          vue.computerSequence = [];

        }

      }, 500);

      // check that this was the right color


    },

    flashOn: function (color) {
      if (color == 'green'){
        this.greenFlash = true;
      }else if (color == 'red'){
        this.redFlash = true;
      }else if (color == 'blue'){
        this.blueFlash = true;
      }else if (color == 'yellow'){
        this.yellowFlash = true;
      }



    },

    flashOff: function () {

      this.greenFlash = false;
      this.redFlash = false;
      this.blueFlash = false;
      this.yellowFlash = false;

    },

    play: function () {
      // flash ( color1)
      // setTimeout(flash (color2)  , 500)



    //  computerSequence.push
    },

    getRandomColor: function() {
      let random = Math.ceil(Math.random() * 4);

      if (random == 1) {
        return 'red';
      }
      if (random == 2) {
        return 'blue';
      }
      if (random == 3) {
        return 'green';
      }
      if (random == 4) {
        return 'yellow';
      }
    }

  }
})
