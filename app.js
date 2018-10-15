new Vue ({

  el: '#gameboard',


  data: {
    blueFlash: false,
    greenFlash: false,
    yellowFlash: false,
    redFlash: false,
    userSequence: [],
    computerSequence: [],
    currentIndex = 0

  },

  methods: {
    start: function () {

      let randomColor = this.getRandomColor();
      this.computerSequence.push(randomColor);
      this.flash(this.computerSequence[0]);

    },

    button: function (color) {

      this.flash(color);
      // What index are we at?

      // check that this was the right color
      if (color == this.computerSequence[this.currentIndex]) {

        if (this.currentIndex == this.computerSequence.length - 1) {

          this.computerPlay();

        } else {

          this.currentIndex++;

        }

      } else {

        // Game is over

      }


    },

    flash: function (color) {
      if (color == 'green'){
        this.greenFlash = true;
      }else if (color == 'red'){
        this.redFlash = true;
      }else if (color == 'blue'){
        this.blueFlash = true;
      }else if (color == 'yellow'){
        this.yellowFlash = true;
      }

      let vue = this;
      setTimeout(function() {
        vue.greenFlash = false;
        vue.redFlash = false;
        vue.blueFlash = false;
        vue.yellowFlash = false;
      }, 500);

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
