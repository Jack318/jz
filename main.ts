music.playMelody("C F F F A G F G ", 120)
music.playMelody("A G F F A C5 C5 C5 ", 120)
music.playMelody("- C5 A F G F G A ", 120)
music.playMelody("G F D D C F F F ", 120)
basic.forever(function () {
    music.playMelody("C E G B G E F G ", 120)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        # # # # #
        `)
    basic.showString("Eric Zhang")
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . . .
        . . # . .
        `)
})
