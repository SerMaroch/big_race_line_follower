function по_линии () {
    if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S1, StartbitV2.startbit_LineColor.White) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S4, StartbitV2.startbit_LineColor.White)) {
        if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S2, StartbitV2.startbit_LineColor.Black) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S3, StartbitV2.startbit_LineColor.Black)) {
            StartbitV2.startbit_setMotorSpeed(70, 70)
        } else if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S2, StartbitV2.startbit_LineColor.White) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S3, StartbitV2.startbit_LineColor.Black)) {
            StartbitV2.startbit_setMotorSpeed(30, 70)
        } else if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S2, StartbitV2.startbit_LineColor.Black) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S3, StartbitV2.startbit_LineColor.White)) {
            StartbitV2.startbit_setMotorSpeed(70, 30)
        } else {
        	
        }
    } else {
        if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S1, StartbitV2.startbit_LineColor.Black) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S4, StartbitV2.startbit_LineColor.White)) {
            StartbitV2.startbit_setMotorSpeed(60, -60)
            basic.pause(50)
        } else if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S1, StartbitV2.startbit_LineColor.White) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S4, StartbitV2.startbit_LineColor.Black)) {
            StartbitV2.startbit_setMotorSpeed(-60, 60)
            basic.pause(50)
        } else {
            инверсия = 1
        }
    }
}
function линия_с_инверсией () {
    for (let index = 0; index < 3; index++) {
        while (инверсия == 0) {
            по_линии()
        }
        while (инверсия == 1) {
            по_белой_линии()
        }
    }
}
function по_белой_линии () {
    if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S1, StartbitV2.startbit_LineColor.Black) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S4, StartbitV2.startbit_LineColor.Black)) {
        if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S2, StartbitV2.startbit_LineColor.White) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S3, StartbitV2.startbit_LineColor.White)) {
            StartbitV2.startbit_setMotorSpeed(70, 70)
        } else if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S2, StartbitV2.startbit_LineColor.White) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S3, StartbitV2.startbit_LineColor.Black)) {
            StartbitV2.startbit_setMotorSpeed(70, 30)
        } else if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S2, StartbitV2.startbit_LineColor.Black) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S3, StartbitV2.startbit_LineColor.White)) {
            StartbitV2.startbit_setMotorSpeed(30, 70)
        } else {
        	
        }
    } else {
        if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S1, StartbitV2.startbit_LineColor.Black) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S4, StartbitV2.startbit_LineColor.White)) {
            StartbitV2.startbit_setMotorSpeed(0, 60)
            basic.pause(50)
        } else if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S1, StartbitV2.startbit_LineColor.White) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S4, StartbitV2.startbit_LineColor.Black)) {
            StartbitV2.startbit_setMotorSpeed(60, 0)
            basic.pause(50)
        } else {
            инверсия = 0
        }
    }
}
function объезд () {
    StartbitV2.startbit_setMotorSpeed(-60, 60)
    basic.pause(500)
    StartbitV2.startbit_setMotorSpeed(60, 60)
    basic.pause(500)
    StartbitV2.startbit_setMotorSpeed(60, -60)
    basic.pause(1000)
    StartbitV2.startbit_setMotorSpeed(60, 60)
    while (!(StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S2, StartbitV2.startbit_LineColor.Black) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S3, StartbitV2.startbit_LineColor.Black))) {
    	
    }
    StartbitV2.startbit_setMotorSpeed(40, 60)
    basic.pause(500)
}
let инверсия = 0
StartbitV2.startbit_Init()
StartbitV2.lineFollowSensor_init(StartbitV2.startbit_lineFollowPort.port1)
StartbitV2.ultrasonic_init(StartbitV2.startbit_ultrasonicPort.port2)
инверсия = 0
basic.forever(function () {
    линия_с_инверсией()
    StartbitV2.startbit_setMotorSpeed(0, 0)
})
