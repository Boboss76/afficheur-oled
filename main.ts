basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
OLED.init(128, 64)
for (let index = 0; index <= 100; index++) {
    OLED.drawLoading(index)
}
OLED.clear()
OLED.writeStringNewLine("Bienvenue")
basic.pause(500)
OLED.clear()
OLED.writeStringNewLine("*********************")
OLED.writeStringNewLine("******    ****   ****")
OLED.writeStringNewLine("*********************")
OLED.writeStringNewLine("*******        ******")
OLED.writeStringNewLine("********     ********")
OLED.writeStringNewLine("*********************")
basic.forever(function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        `)
    basic.pause(100)
})
