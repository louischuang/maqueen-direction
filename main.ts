maqueenPlusV2.I2CInit()
input.calibrateCompass()
basic.showLeds(`
    . . . . .
    # # . # #
    . # . # .
    . . . . .
    . # # # .
    `)
let direction = 0
basic.forever(function () {
    direction = input.compassHeading()
    basic.showNumber(direction)
    basic.pause(100)
})
