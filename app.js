new Vue ({

  el: '#gameboard',


  data: {
    gameInProgress: false,
    blueFlash: false,
    greenFlash: false,
    yellowFlash: false,
    redFlash: false,
    computerSequence: [],
    computerInterval: null,
    currentIndex: 0,
    gameLost: false,
    timer: null,
    displayTimer: 3,
    timerActive: false,
    playerTurn: false,
    highScore: localStorage.getItem("Level")

  },

  methods: {
    start: function () {
      clearInterval(this.timer);
      clearInterval(this.computerInterval);
      this.gameInProgress = true;
      this.displayTimer = 3;
      this.computerSequence = [];
      this.gameLost = false;
      this.computerPlay();

    },

    computerPlay: function () {

      this.currentIndex = 0;
      let randomColor = this.getRandomColor();
      this.computerSequence.push(randomColor);

      let vue = this;
      this.computerInterval = setInterval(function() {

        if (vue.currentIndex < vue.computerSequence.length) {

          vue.flashOn(vue.computerSequence[vue.currentIndex]);
          vue.currentIndex++;
          setTimeout(function() {
            vue.flashOff();

          }, 500);

        } else {
            vue.playerTurn = true;
            vue.currentIndex = 0;
            vue.startCountdown();
            clearInterval(vue.computerInterval);

          }
      }, 1000);



    },

    startCountdown: function () {
      let vue = this
      this.timerActive = true;
      this.displayTimer = 3;

      this.timer = setInterval(function() {
        if (vue.displayTimer > 1){

          vue.displayTimer -= 1

        } else {
          vue.timerActive = false;
          clearInterval(vue.timer);
          vue.saveInput();
          vue.youLose();
        }
      }, 1000 );


    },

    youLose: function() {

      this.gameLost = true;
      this.gameInProgress = false;
      this.currentIndex = 0;
      this.computerSequence = [];

    },

    button: function (color) {
      if (!this.gameInProgress || !this.playerTurn) return;

      this.timerActive = false;

      clearInterval(this.timer);
      let vue = this;

      this.flashOn(color);
      this.playerTurn = false;
      setTimeout(function() {

        vue.flashOff();
        vue.playerTurn = true;

        if (color == vue.computerSequence[vue.currentIndex]) {

          if (vue.currentIndex == vue.computerSequence.length - 1) {
            vue.playerTurn = false;
            vue.computerPlay();

          } else {
            vue.startCountdown();
            vue.currentIndex++;

          }

        } else {
          vue.saveInput();
          vue.youLose();

        }

      }, 500);



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
    },

    saveInput: function () {
    let vue = this;
    // Get the value from the input field
    let input = vue.computerSequence.length - 1;

      if (input > localStorage.getItem("Level")) {
        localStorage.setItem("Level", input);
        vue.highScore = input;
        
      }

    // Save the value in localstorage


    }

  }
})
