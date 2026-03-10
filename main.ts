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
    let pitchValue = 0
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        goDirection(forward)
        basic.showArrow(ArrowNames.North)
    } else if (input.buttonIsPressed(Button.A)) {
        goDirection(left)
        basic.showArrow(ArrowNames.West)
    } else if (input.buttonIsPressed(Button.B)) {
        goDirection(right)
        basic.showArrow(ArrowNames.East)
    } else if (pitchValue > 60) {
        goDirection(backward)
        basic.showArrow(ArrowNames.South)
    } else {
        goDirection(stop)
        basic.showIcon(IconNames.SmallSquare)
    }
})
