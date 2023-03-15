OLED.init(128, 64)
basic.forever(function () {
    for (let index = 0; index <= 5; index++) {
        OLED.writeStringNewLine("*")
    }
})
