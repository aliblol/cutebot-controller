function goDirection (direction: string) {
    radio.sendString(direction)
    serial.writeLine("Sent: " + direction)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    goDirection(RainbowLights)
})
let RainbowLights = ""
let currentGroup = 0
radio.setGroup(currentGroup)
basic.showString("" + (currentGroup))
basic.pause(500)
basic.clearScreen()
RainbowLights = "RainbowLights"
let forward = "forward"
let left = "left"
let right = "right"
let backward = "backward"
let stop = "stop"
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        goDirection(forward)
    } else if (input.buttonIsPressed(Button.A)) {
        goDirection(left)
    } else if (input.buttonIsPressed(Button.B)) {
        goDirection(right)
    } else if (input.rotation(Rotation.Pitch) > 60) {
        goDirection(backward)
    } else {
        goDirection(stop)
    }
})
