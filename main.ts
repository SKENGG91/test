let xp = 0
let yp = 0
basic.forever(function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plotBrightness(index, 2, 80)
    }
    for (let index = 0; index <= 4; index++) {
        led.plotBrightness(2, index, 80)
    }
    xp = (2 + input.rotation(Rotation.Roll)) / 40
    xp = Math.min(4, Math.max(0, xp))
    yp = 2 + input.rotation(Rotation.Pitch) / 40
    yp = Math.min(4, Math.max(0, yp))
    led.plot(xp, yp)
})
