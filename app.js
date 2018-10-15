new Vue ({

  el: '#gameboard',


  data: {
    blueFlash: false,
    greenFlash: false,
    yellowFlash: false,
    redFlash: false,
    userSequence: [],
    ComputerSequence: []

  },

  methods: {
    start: function () {
      flash()

    },

    button: function (color) {
      this.flash(color);

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

    },

    play: function () {

    //  computerSequence.push
    }

}
})
