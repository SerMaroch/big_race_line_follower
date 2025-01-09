function возврат_на_инверсию () {
	
}
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
        	
        }
    }
}
function линия_с_инверсией () {
    for (let index = 0; index < 3; index++) {
        while (!(StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S2, StartbitV2.startbit_LineColor.Black) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S3, StartbitV2.startbit_LineColor.Black))) {
            по_линии()
        }
        while (!(StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S2, StartbitV2.startbit_LineColor.Black) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S3, StartbitV2.startbit_LineColor.Black))) {
            по_белой_линии()
        }
    }
}
function первый_полигон () {
    while (!(StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S2, StartbitV2.startbit_LineColor.Black) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S3, StartbitV2.startbit_LineColor.Black))) {
        расстояние1 = StartbitV2.startbit_ultrasonic()
        if (расстояние1 < 15) {
            StartbitV2.startbit_setMotorSpeed(0, 0)
            basic.pause(200)
            расстояние2 = StartbitV2.startbit_ultrasonic()
            if (расстояние1 - расстояние2 > 0) {
                объезд()
            }
        } else {
            по_линии()
        }
    }
}
function финиш () {
    StartbitV2.startbit_setMotorSpeed(70, 70)
    basic.pause(200)
}
function кегельринг () {
	
}
function лабиринт_обратно () {
	
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
        	
        }
    }
}
function старт () {
    StartbitV2.startbit_setMotorSpeed(70, 70)
    basic.pause(500)
}
function захват_кегли () {
	
}
function лабиринт_туда () {
	
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
let расстояние2 = 0
let расстояние1 = 0
StartbitV2.startbit_Init()
StartbitV2.lineFollowSensor_init(StartbitV2.startbit_lineFollowPort.port1)
StartbitV2.ultrasonic_init(StartbitV2.startbit_ultrasonicPort.port2)
basic.forever(function () {
    старт()
    первый_полигон()
    лабиринт_туда()
    линия_с_инверсией()
    кегельринг()
    захват_кегли()
    возврат_на_инверсию()
    линия_с_инверсией()
    первый_полигон()
    финиш()
})
