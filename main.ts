function snip () {
    led.plotBrightness(2, 0, snipe)
    led.plotBrightness(2, 1, snipe)
    led.plotBrightness(2, 2, snipe)
    led.plotBrightness(2, 3, snipe)
    led.plotBrightness(2, 4, snipe)
    led.plotBrightness(0, 2, snipe)
    led.plotBrightness(1, 2, snipe)
    led.plotBrightness(3, 2, snipe)
    led.plotBrightness(4, 2, snipe)
}
input.onButtonPressed(Button.B, function () {
    if (x1 == 2 && y1 == 2) {
        if (broj == 0) {
            basic.showNumber(time / 20)
            basic.pause(2000)
        } else {
            broj += -1
            basic.showNumber(broj)
            nova()
            basic.clearScreen()
        }
    }
})
function nova () {
    x = randint(0, 4)
    y = randint(0, 4)
    x1 = x
    y1 = y
    snip()
    led.plot(x1, y1)
}
let y = 0
let x = 0
let time = 0
let y1 = 0
let x1 = 0
let broj = 0
let snipe = 0
snipe = 5
nova()
broj = 5
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 200) {
        if (x1 > 0) {
            x1 += -1
            basic.clearScreen()
            snip()
            led.plot(x1, y1)
            basic.pause(100)
        }
    }
    if (input.acceleration(Dimension.X) < -200) {
        if (x1 < 4) {
            x1 += 1
            basic.clearScreen()
            snip()
            led.plot(x1, y1)
            basic.pause(100)
        }
    }
    if (input.acceleration(Dimension.Y) < -200) {
        if (y1 < 4) {
            y1 += 1
            basic.clearScreen()
            snip()
            led.plot(x1, y1)
            basic.pause(100)
        }
    }
    if (input.acceleration(Dimension.Y) > 200) {
        if (y1 > 0) {
            y1 += -1
            basic.clearScreen()
            snip()
            led.plot(x1, y1)
            basic.pause(100)
        }
    }
    time += 1
})
