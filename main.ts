radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 11) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
    } else {
        motor.motorStopAll()
    }
})
basic.showIcon(IconNames.Meh)
radio.setGroup(5)
