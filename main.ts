input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString(RainbowLights)
    basic.showString("R")
    serial.writeLine("Sent: RainbowLights")
})
let pitchValue = 0
let RainbowLights = ""
let currentGroup = 0
radio.setGroup(currentGroup)
basic.showString("" + (currentGroup))
basic.pause(500)
basic.clearScreen()
let Pitch = "Pitch"
RainbowLights = "RainbowLights"
// Direction variables
let forward = "forward"
let left = "left"
let right = "right"
let backward = "backward"
let stop = "stop"
// Send pitch value
basic.forever(function () {
    pitchValue = input.rotation(Rotation.Pitch)
    radio.sendValue(Pitch, pitchValue)
    serial.writeLine("Sent: Pitch " + pitchValue)
})
// Send button press state and control logic
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        radio.sendString(forward)
        serial.writeLine("Sent: " + forward)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendString(left)
        serial.writeLine("Sent: " + left)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString(right)
        serial.writeLine("Sent: " + right)
    } else if (pitchValue > 60) {
        radio.sendString(backward)
        serial.writeLine("Sent: " + backward)
    } else {
        radio.sendString(stop)
        serial.writeLine("Sent: " + stop)
    }
})
