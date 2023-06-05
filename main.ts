radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 510 && receivedNumber <= 775) {
        avancer()
    } else if (receivedNumber > 248 && receivedNumber <= 507) {
        reculer()
    } else if (receivedNumber > 1110 && receivedNumber <= 1368) {
        tourner_à_droite()
    } else if (receivedNumber > 856 && receivedNumber <= 1107) {
        tourner_à_gauche()
    } else {
        motor.motorStopAll()
    }
})
function tourner_à_droite () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 40)
}
function tourner_à_gauche () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 40)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
}
function reculer () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
}
function avancer () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
}
basic.showIcon(IconNames.Meh)
radio.setGroup(5)
