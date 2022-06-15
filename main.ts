basic.forever(function () {
    for (let index = 0; index < 60; index++) {
        music.playMelody("C5 - - - - - - C ", 120)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        music.playMelody("- - - - - - - - ", 120)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showString("love ")
    }
})
