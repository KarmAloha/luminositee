input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.lightLevel()))
})
basic.forever(function () {
    led.setBrightness(255)
})
