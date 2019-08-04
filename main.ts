/*
creator: 2010-2019, Shenzhen Yahboom Tech
modified from liusen

2019-08, for the common good, the kaktus looked a little here.
									https://kaktusa.pl

load dependency
"mbit": "file:../pxt-mbit"
*/

/*****************************************************************************************************************************************
 *  LED Class        *********************************************************************************************************************
 ****************************************************************************************************************************************/

//% color="#C814B8" weight=25 icon="\uf1d4"
namespace mbit_Display {

    export enum enColor {

        //% blockId="OFF" block="Off"
        OFF=0,
        //% blockId="Red" block="Red"
        Red,
        //% blockId="Green" block="Green"
        Green,
        //% blockId="Blue" block="Blue"
        Blue,
        //% blockId="White" block="White"
        White,
        //% blockId="Cyan" block="Cyan"
        Cyan,
        //% blockId="Pinkish" block="Magenta"
        Pinkish,
        //% blockId="Yellow" block="Yellow"
        Yellow

    }

//*****************************************************************************************************************************************

    export enum enLED1 {

        //% blockId="OFF" block="Off"
        OFF=0,
        //% blockId="ON" block="On"
        ON=1
    }

    //% blockId=mbit_LED1
    //% block="LED1|connected to %pin|state on %value"
    //% weight=16
    //% blockGap=8
    //% color="#C814B8"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=3
    //% value.fieldEditor="gridpicker"
    //% value.fieldOptions.width=220
    //% value.fieldOptions.columns=1

    export function fLED1(pin: DigitalPin, value: enLED1): void {

        pins.digitalWritePin(pin, value);

    }

//*****************************************************************************************************************************************

    //% blockId=mbit_LED2
    //% block="LED2|connected to %pin|state on %value"
    //% weight=14
    //% blockGap=8
    //% color="#C814B8"
    //% value.min=0 value.max=255
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=3

    export function fLED2(pin: AnalogPin, value: number): void {

        pins.analogWritePin(pin, value * 1024 / 256);

    }

//*****************************************************************************************************************************************

    //% blockId=mbit_BreathLED 
    //% block="BreathLED|connected to %pin"
    //% weight=12
    //% blockGap=8
    //% color="#C814B8"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=3

    export function fBreathLED(pin: AnalogPin): void {

        for (let i: number = 0; i < 1023; i++) {
            pins.analogWritePin(pin, i);
            //basic.pause(1);
            control.waitMicros(1000);
        }
        basic.pause(10);
        for (let i: number = 1023; i > 0; i--) {
            pins.analogWritePin(pin, i);
            //basic.pause(1);
            control.waitMicros(1000);
        }
    }


//*########################################################################################################################################
//##  testy kaktusa z niebieskimi ledami L8, L9, L10  #####################################################################################
//########################################################################################################################################*

    export enum enLED_blue {
        
        //% blockId="OFF" block="Off"
        OFF=4095, //0-4095
        //% blockId="ON" block="On"
        ON=1024
    }

    //% blockId=mbit_LED_L8 block="LED_L8| %value"
    //% weight=9
    //% blockGap=8
    //% color="#932bb5"
    //% valuePWM.fieldEditor="gridpicker"
    //% valuePWM.fieldOptions.width=260
    //% valuePWM.fieldOptions.columns=1

    export function fLED_L8(valuePWM: enLED_Blue): void {

        mbit_Robot.setPwm(6, 0, valuePWM);    //channel LED, ?,PWM value

    }

    //% blockId=mbit_LED_L9 block="LED_L9| %value"
    //% weight=8
    //% blockGap=8
    //% color="#932bb5"
    //% valuePWM.fieldEditor="gridpicker"
    //% valuePWM.fieldOptions.width=260
    //% valuePWM.fieldOptions.columns=1

    export function fLED_L9(valuePWM: enLED_Blue): void {

        mbit_Robot.setPwm(7, 0, valuePWM);    //channel LED, ?,PWM value

    }

//#########################################################################################################################################


//*****************************************************************************************************************************************


    //% blockId=mbit_RGB
    //% block="RGB|Pin 1 Red connected to %pin1|Pin 2 Green connected to %pin2|Pin 3 connected to Blue %pin3|value Red %value1|value Green %value2|value Blue %value3"
    //% weight=6
    //% blockGap=8
    //% color="#C814B8"
    //% value1.min=0 value1.max=255 value2.min=0 value2.max=255 value3.min=0 value3.max=255
    //% pin1.fieldEditor="gridpicker" pin2.fieldEditor="gridpicker" pin3.fieldEditor="gridpicker"
    //% pin1.fieldOptions.width=220 pin2.fieldOptions.width=220 pin3.fieldOptions.width=220
    //% pin1.fieldOptions.columns=3 pin2.fieldOptions.columns=3 pin3.fieldOptions.columns=3

    export function fRGB(pin1: AnalogPin, pin2: AnalogPin, pin3: AnalogPin, value1: number, value2: number, value3: number): void {

        pins.analogWritePin(pin1, value1 * 1024 / 256);
        pins.analogWritePin(pin2, value2 * 1024 / 256);
        pins.analogWritePin(pin3, value3 * 1024 / 256);

    }

//*****************************************************************************************************************************************

    //% blockId=mbit_RGB2
    //% block="RGB|Pin 1 Red connected to %pin1|Pin 2 Green connected to %pin2|Pin 3 Blue connected to %pin3|Set the colour %value"
    //% weight=6
    //% blockGap=8
    //% color="#C814B8"
    //% pin1.fieldEditor="gridpicker" pin2.fieldEditor="gridpicker" pin3.fieldEditor="gridpicker"
    //% pin1.fieldOptions.width=200 pin2.fieldOptions.width=200 pin3.fieldOptions.width=200
    //% pin1.fieldOptions.columns=3 pin2.fieldOptions.columns=3 pin3.fieldOptions.columns=3
    //% value.fieldEditor="gridpicker" value.fieldOptions.width=320 value.fieldOptions.columns=3

    export function fRGB2(pin1: DigitalPin, pin2: DigitalPin, pin3: DigitalPin, value: enColor): void {

        switch (value) {
            case enColor.OFF: {
                pins.digitalWritePin(pin1, 0);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 0);
                break;
            }
            case enColor.Red: {
                pins.digitalWritePin(pin1, 1);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 0);
                break;
            }
            case enColor.Green: {
                pins.digitalWritePin(pin1, 0);
                pins.digitalWritePin(pin2, 1);
                pins.digitalWritePin(pin3, 0);
                break;
            }
            case enColor.Blue: {
                pins.digitalWritePin(pin1, 0);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 1);
                break;
            }
            case enColor.White: {
                pins.digitalWritePin(pin1, 1);
                pins.digitalWritePin(pin2, 1);
                pins.digitalWritePin(pin3, 1);
                break;
            }
            case enColor.Cyan: {
                pins.digitalWritePin(pin1, 0);
                pins.digitalWritePin(pin2, 1);
                pins.digitalWritePin(pin3, 1);
                break;
            }
            case enColor.Pinkish: {
                pins.digitalWritePin(pin1, 1);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 1);
                break;
            }
            case enColor.Yellow: {
                pins.digitalWritePin(pin1, 1);
                pins.digitalWritePin(pin2, 1);
                pins.digitalWritePin(pin3, 0);
                break;
            }
        }
    }

}

/*****************************************************************************************************************************************
 *  Sensors Class (Klasa czujników)  *****************************************************************************************************
 ****************************************************************************************************************************************/

//% color="#87CEEB" weight=24 icon="\uf1b6"
namespace mbit_Sensor {

    export enum enVoice {
        //% blockId="Voice" block="sound"
        Voice = 0,
        //% blockId="NoVoice" block="silence"
        NoVoice = 1
    }

    export enum enIR {
        //% blockId="Get" block="detected"
        Get = 0,
        //% blockId="NoVoice" block="undetected"
        NoGet = 1
    }

    //% blockId=mbit_Voice_Sensor
    //% block="Voice_Sensor|pin %pin|value %value"
    //% weight=100
    //% blockGap=10
    //% color="#87CEEB"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=200
    //% pin.fieldOptions.columns=3

    export function fVoice_Sensor(pin: DigitalPin, value: enVoice): boolean {

        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    }

    function IR_send_38k() {
        for (let i: number = 0; i < 8; i++) {
            pins.digitalWritePin(DigitalPin.P9, 1);
            control.waitMicros(13);
            pins.digitalWritePin(DigitalPin.P9, 0);
            control.waitMicros(13);
        }
    }

    //% blockId=mbit_IR_Sensor
    //% block="IR_Sensor|pin %pin| |%value|obstacle"
    //% weight=100
    //% blockGap=10
    //% color="#87CEEB"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=200
    //% pin.fieldOptions.columns=3

    export function fIR_Sensor(pin: DigitalPin, value: enIR): boolean {

        pins.setPull(pin, PinPullMode.PullUp);
        //IR_send_38k();
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    }

    //% blockId=mbit_IR_Send block="IR_Send|pin %pin"
    //% weight=100
    //% blockGap=10
    //% color="#87CEEB"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=200
    //% pin.fieldOptions.columns=3

    export function fIR_Send(pin: DigitalPin): void {

        IR_send_38k();
    }

    //% blockId=mbit_ultrasonic
    //% block="Ultrasonic|Trig %Trig|Echo %Echo"
    //% color="#87CEEB"
    //% weight=100
    //% blockGap=10
    //% Trig.fieldEditor="gridpicker" Echo.fieldEditor="gridpicker"
    //% Trig.fieldOptions.width=200 Echo.fieldOptions.width=200
    //% Trig`.fieldOptions.columns=3 Echo.fieldOptions.columns=3

    export function fUltrasonic(Trig: DigitalPin, Echo: DigitalPin): number {

        // send pulse
        pins.setPull(Trig, PinPullMode.PullNone);
        pins.digitalWritePin(Trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(Trig, 1);
        control.waitMicros(15);
        pins.digitalWritePin(Trig, 0);

        // read pulse
        let d = pins.pulseIn(Echo, PulseValue.High, 23200);
        return  Math.floor(d / 58);
    }
}

/*****************************************************************************************************************************************
 **  Input Class  ************************************************************************************************************************
 ****************************************************************************************************************************************/

//% color="#808080" weight=23 icon="\uf11c"
namespace mbit_Input {

    export enum enRocker {
        //% blockId="Nostate" block="No"
        Nostate = 0,
        //% blockId="Up" block="Up"
        Up,
        //% blockId="Down" block="Down"
        Down,
        //% blockId="Left" block="Left"
        Left,
        //% blockId="Right" block="Right"
        Right,
        //% blockId="Press" block="Press"
        Press
    }

    export enum enTouch {
        //% blockId="NoTouch" block="Untouched"
        NoTouch = 0,
        //% blockId="Touch" block="Touched"
        Touch = 1
    }

    export enum enButton {
        //% blockId="Press" block="Press"
        Press = 0,
        //% blockId="Realse" block="Release"
        Realse = 1
    }

    //% blockId=mbit_TouchPad 
    //% block="TouchPad|pin %pin|value %value"
    //% weight=100
    //% blockGap=10
    //% color="#808080"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=200
    //% pin.fieldOptions.columns=3

    export function fTouchPad(pin: DigitalPin, value: enTouch): boolean {

        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    }

    //% blockId=mbit_Rocker
    //% block="Rocker|VRX %pin1|VRY %pin2|SW %pin3|value %value"
    //% weight=100
    //% blockGap=10
    //% color="#808080"
    //% VRX.fieldEditor="gridpicker"
    //% VRY.fieldEditor="gridpicker"
    //% SW.fieldEditor="gridpicker"
    //% value.fieldEditor="gridpicker"
    //% VRX.fieldOptions.width=200
    //% VRY.fieldOptions.width=200
    //% SW.fieldOptions.width=200
    //% value.fieldOptions.width=200
    //% VRX.fieldOptions.columns=3
    //% VRY.fieldOptions.columns=3
    //% SW.fieldOptions.columns=3
    //% value.fieldOptions.columns=2

    export function fRocker(pin1: AnalogPin, pin2: AnalogPin, pin3: DigitalPin, value: enRocker): boolean {

        pins.setPull(pin3, PinPullMode.PullUp);
        let x = pins.analogReadPin(pin1);
        let y = pins.analogReadPin(pin2);
        let z = pins.digitalReadPin(pin3);
        let now_state = enRocker.Nostate;

        if (x < 100) //up
        {

            now_state = enRocker.Up;

        }
        else if (x > 700) //down
        {

            now_state = enRocker.Down;
        }
        else  // left and right
        {
            if (y < 100) //right
            {
                now_state = enRocker.Right;
            }
            else if (y > 700) //left
            {
                now_state = enRocker.Left;
            }
        }
        if (z == 0)
            now_state = enRocker.Press;
        if (now_state == value)
            return true;
        else
            return false;
    }

    //% blockId=mbit_Button
    //% block="Button|pin %pin|value %value"
    //% weight=100
    //% blockGap=10
    //% color="#808080"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=200
    //% pin.fieldOptions.columns=3

    export function fButton(pin: DigitalPin, value: enButton): boolean {

        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }

    }
}

/******************************************************************************************************************************************
 *   Music Class  (Klasa dźwiękowa)  ******************************************************************************************************
 *****************************************************************************************************************************************/

//% color="#D2691E" weight=22 icon="\uf001"
namespace mbit_Music {

    export enum enBuzzer {

        //% blockId="NoBeep" block="No Beep"
        NoBeep=0,
        //% blockId="Beep" block="Beep"
        Beep=1
    }

    //% blockId=mbit_Buzzer
    //% block="Buzzer|pin %pin|value %value"
    //% weight=100
    //% blockGap=10 
    //% color="#D2691E"
    //% value.min=0 value.max=1
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=200
    //% pin.fieldOptions.columns=3

    export function fBuzzer(pin: DigitalPin, value: enBuzzer): void {

        pins.setPull(pin, PinPullMode.PullNone);
        pins.digitalWritePin(pin, value);

    }

}

/******************************************************************************************************************************************
 *  Motor Class  (Klasa napędów)  *********************************************************************************************************
 *****************************************************************************************************************************************/

//% color="#0000CD" weight=21 icon="\uf185"
namespace mbit_Motor {

    //% blockId=mbit_Fan
    //% block="Fan|pin %pin|speed %value"
    //% weight=100
    //% blockGap=10
    //% color="#0000CD"
    //% value.min=0 value.max=1023
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=200
    //% pin.fieldOptions.columns=3
    export function fFan(pin: AnalogPin, value: number): void {

        pins.analogWritePin(pin, value);

    }

    //% blockId=mbit_Servo
    //% block="Servo|pin %pin|value %value"
    //% weight=100
    //% blockGap=10
    //% color="#0000CD"
    //% value.min=0 value.max=180
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=200
    //% pin.fieldOptions.columns=3
    export function fServo(pin: AnalogPin, value: number): void {

        pins.servoWritePin(pin, value);

    }

}

/******************************************************************************************************************************************
 *  Robot Class  (Klasa Robot)  ***********************************************************************************************************
 *****************************************************************************************************************************************/

//% color="#006400" weight=20 icon="\uf1b9"
namespace mbit_Robot {

    const PCA9685_ADD = 0x41
    const MODE1 = 0x00
    const MODE2 = 0x01
    const SUBADR1 = 0x02
    const SUBADR2 = 0x03
    const SUBADR3 = 0x04

    const LED0_ON_L = 0x06
    const LED0_ON_H = 0x07
    const LED0_OFF_L = 0x08
    const LED0_OFF_H = 0x09

    const ALL_LED_ON_L = 0xFA
    const ALL_LED_ON_H = 0xFB
    const ALL_LED_OFF_L = 0xFC
    const ALL_LED_OFF_H = 0xFD

    const PRESCALE = 0xFE

    let initialized = false
    let yahStrip: neopixel.Strip;

    export enum enColor {

        //% blockId="OFF" block="light Off"
        OFF=0,
        //% blockId="Red" block="Red"
        Red,
        //% blockId="Green" block="Green"
        Green,
        //% blockId="Blue" block="Blue"
        Blue,
        //% blockId="White" block="White"
        White,
        //% blockId="Cyan" block="Cyan"
        Cyan,
        //% blockId="Pinkish" block="Magenta"
        Pinkish,
        //% blockId="Yellow" block="Yellow"
        Yellow
    }

    export enum enMusic {

        dadadum=0,
        entertainer,
        prelude,
        ode,
        nyan,
        ringtone,
        funk,
        blues,

        birthday,
        wedding,
        funereal,
        punchline,
        baddy,
        chase,
        ba_ding,
        wawawawaa,
        jump_up,
        jump_down,
        power_up,
        power_down
    }

    export enum enPos {
        //% blockId="LeftState" block="left state"
        LeftState = 0,
        //% blockId="RightState" block="Right state"
        RightState = 1
    }

    export enum enLineState {
        //% blockId="White" block="White"
        White = 0,
        //% blockId="Black" block="Black"
        Black = 1
    }

    export enum enAvoidState {
        //% blockId="OBSTACLE" block="with Obstacles"
        OBSTACLE = 0,
        //% blockId="NOOBSTACLE" block="without Obstacles"
        NOOBSTACLE = 1
    }

    export enum enServo {
        
        S1 = 1,
        S2,
        S3
    }

    export enum CarState {
        //% blockId="Car_Run" block="Forward"
        Car_Run = 1,
        //% blockId="Car_Back" block="Back"
        Car_Back = 2,
        //% blockId="Car_Left" block="turn Left"
        Car_Left = 3,
        //% blockId="Car_Right" block="turn Right"
        Car_Right = 4,
        //% blockId="Car_Stop" block="STOP"
        Car_Stop = 5,
        //% blockId="Car_SpinLeft" block="rotate Left"
        Car_SpinLeft = 6,
        //% blockId="Car_SpinRight" block="rotate Right"
        Car_SpinRight = 7
    }

    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2ccmd(addr: number, value: number) {
        let buf = pins.createBuffer(1)
        buf[0] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2cread(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }

    function initPCA9685(): void {
        i2cwrite(PCA9685_ADD, MODE1, 0x00)
        setFreq(50);
        initialized = true
    }

    function setFreq(freq: number): void {
        // Constrain the frequency
        let prescaleval = 25000000;
        prescaleval /= 4096;
        prescaleval /= freq;
        prescaleval -= 1;
        let prescale = prescaleval; //Math.Floor(prescaleval + 0.5);
        let oldmode = i2cread(PCA9685_ADD, MODE1);
        let newmode = (oldmode & 0x7F) | 0x10; // sleep
        i2cwrite(PCA9685_ADD, MODE1, newmode); // go to sleep
        i2cwrite(PCA9685_ADD, PRESCALE, prescale); // set the prescaler
        i2cwrite(PCA9685_ADD, MODE1, oldmode);
        control.waitMicros(5000);
        i2cwrite(PCA9685_ADD, MODE1, oldmode | 0xa1);
    }

    function setPwm(channel: number, on: number, off: number): void {
        if (channel < 0 || channel > 15)
            return;
        if (!initialized) {
            initPCA9685();
        }
        let buf = pins.createBuffer(5);
        buf[0] = LED0_ON_L + 4 * channel;
        buf[1] = on & 0xff;
        buf[2] = (on >> 8) & 0xff;
        buf[3] = off & 0xff;
        buf[4] = (off >> 8) & 0xff;
        pins.i2cWriteBuffer(PCA9685_ADD, buf);
    }

    function Car_run(speed1: number, speed2: number) {

        speed1 = speed1 * 16; // map 350 to 4096
        speed2 = speed2 * 16;
        if (speed1 >= 4096) {
            speed1 = 4095
        }
        if (speed1 <= 350) {
            speed1 = 350
        }
        if (speed2 >= 4096) {
            speed2 = 4095
        }
        if (speed2 <= 350) {
            speed2 = 350
        }

        setPwm(12, 0, speed1);
        setPwm(13, 0, 0);

        setPwm(15, 0, speed2);
        setPwm(14, 0, 0);
        // pins.digitalWritePin(DigitalPin.P16, 1);
        // pins.analogWritePin(AnalogPin.P1, 1023-speed); //Kontrola prędkości

        // pins.analogWritePin(AnalogPin.P0, speed);//Kontrola prędkości
        // pins.digitalWritePin(DigitalPin.P8, 0);
    }

    function Car_back(speed1: number, speed2: number) {

        speed1 = speed1 * 16; // map 350 to 4096
        speed2 = speed2 * 16;
        if (speed1 >= 4096) {
            speed1 = 4095
        }
        if (speed1 <= 350) {
            speed1 = 350
        }
        if (speed2 >= 4096) {
            speed2 = 4095
        }
        if (speed2 <= 350) {
            speed2 = 350
        }

        setPwm(12, 0, 0);
        setPwm(13, 0, speed1);

        setPwm(15, 0, 0);
        setPwm(14, 0, speed2);

        //pins.digitalWritePin(DigitalPin.P16, 0);
        //pins.analogWritePin(AnalogPin.P1, speed); //速度控制

        //pins.analogWritePin(AnalogPin.P0, 1023 - speed);//速度控制
        //pins.digitalWritePin(DigitalPin.P8, 1);
    }

    function Car_left(speed1: number, speed2: number) {

        speed1 = speed1 * 16; // map 350 to 4096
        speed2 = speed2 * 16;
        if (speed1 >= 4096) {
            speed1 = 4095
        }
        if (speed1 <= 350) {
            speed1 = 350
        }
        if (speed2 >= 4096) {
            speed2 = 4095
        }
        if (speed2 <= 350) {
            speed2 = 350
        }

        setPwm(12, 0, speed1);
        setPwm(13, 0, 0);

        setPwm(15, 0, speed2);
        setPwm(14, 0, 0);

        //pins.analogWritePin(AnalogPin.P0, speed);
        //pins.digitalWritePin(DigitalPin.P8, 0);

        //pins.digitalWritePin(DigitalPin.P16, 0);
        //pins.digitalWritePin(DigitalPin.P1, 0);
    }

    function Car_right(speed1: number, speed2: number) {

        speed1 = speed1 * 16; // map 350 to 4096
        speed2 = speed2 * 16;
        if (speed1 >= 4096) {
            speed1 = 4095
        }
        if (speed1 <= 350) {
            speed1 = 350
        }
        if (speed2 >= 4096) {
            speed2 = 4095
        }
        if (speed2 <= 350) {
            speed2 = 350
        }

        setPwm(12, 0, speed1);
        setPwm(13, 0, 0);

        setPwm(15, 0, speed2);
        setPwm(14, 0, 0);
        //pins.digitalWritePin(DigitalPin.P0, 0);
        //pins.digitalWritePin(DigitalPin.P8, 0);

        //pins.digitalWritePin(DigitalPin.P16, 1);
       // pins.analogWritePin(AnalogPin.P1, 1023 - speed);
    }

    function Car_stop() {

        setPwm(12, 0, 0);
        setPwm(13, 0, 0);

        setPwm(15, 0, 0);
        setPwm(14, 0, 0);
        //pins.digitalWritePin(DigitalPin.P0, 0);
        //pins.digitalWritePin(DigitalPin.P8, 0);
        //pins.digitalWritePin(DigitalPin.P16, 0);
        //pins.digitalWritePin(DigitalPin.P1, 0);
    }

    function Car_spinleft(speed1: number, speed2: number) {

        speed1 = speed1 * 16; // map 350 to 4096
        speed2 = speed2 * 16;
        if (speed1 >= 4096) {
            speed1 = 4095
        }
        if (speed1 <= 350) {
            speed1 = 350
        }
        if (speed2 >= 4096) {
            speed2 = 4095
        }
        if (speed2 <= 350) {
            speed2 = 350
        }

        setPwm(12, 0, 0);
        setPwm(13, 0, speed1);

        setPwm(15, 0, speed2);
        setPwm(14, 0, 0);

        //pins.analogWritePin(AnalogPin.P0, speed);
        //pins.digitalWritePin(DigitalPin.P8, 0);

        //pins.digitalWritePin(DigitalPin.P16, 0);
        //pins.analogWritePin(AnalogPin.P1, speed);
    }

    function Car_spinright(speed1: number, speed2: number) {

        speed1 = speed1 * 16; // map 350 to 4096
        speed2 = speed2 * 16;
        if (speed1 >= 4096) {
            speed1 = 4095
        }
        if (speed1 <= 350) {
            speed1 = 350
        }
        if (speed2 >= 4096) {
            speed2 = 4095
        }
        if (speed2 <= 350) {
            speed2 = 350
        }

        setPwm(12, 0, speed1);
        setPwm(13, 0, 0);

        setPwm(15, 0, 0);
        setPwm(14, 0, speed2);
        //pins.analogWritePin(AnalogPin.P0, 1023-speed);
        //pins.digitalWritePin(DigitalPin.P8, 1);

        //pins.digitalWritePin(DigitalPin.P16, 1);
        //pins.analogWritePin(AnalogPin.P1, 1023-speed);
    }

    /*
        @param index
    */

//*****************************************************************************************************************************************

    //% blockId=mbit_RGB_Car_Big2
    //% block="RGB_Car_Big2|light colour %value"
    //% weight=101
    //% blockGap=10
    //% color="#C814B8"
    //% value.fieldEditor="gridpicker"
    //% value.fieldOptions.width=220
    //% value.fieldOptions.columns=2

    export function RGB_Car_Big2(value: enColor): void {

        switch (value) {
            case enColor.OFF: {
                setPwm(0, 0, 0);
                setPwm(1, 0, 0);
                setPwm(2, 0, 0);
                break;
            }
            case enColor.Red: {
                setPwm(0, 0, 4095);
                setPwm(1, 0, 0);
                setPwm(2, 0, 0);
                break;
            }
            case enColor.Green: {
                setPwm(0, 0, 0);
                setPwm(1, 0, 4095);
                setPwm(2, 0, 0);
                break;
            }
            case enColor.Blue: {
                setPwm(0, 0, 0);
                setPwm(1, 0, 0);
                setPwm(2, 0, 4095);
                break;
            }
            case enColor.White: {
                setPwm(0, 0, 4095);
                setPwm(1, 0, 4095);
                setPwm(2, 0, 4095);
                break;
            }
            case enColor.Cyan: {
                setPwm(0, 0, 0);
                setPwm(1, 0, 4095);
                setPwm(2, 0, 4095);
                break;
            }
            case enColor.Pinkish: {
                setPwm(0, 0, 4095);
                setPwm(1, 0, 0);
                setPwm(2, 0, 4095);
                break;
            }
            case enColor.Yellow: {
                setPwm(0, 0, 4095);
                setPwm(1, 0, 4095);
                setPwm(2, 0, 0);
                break;
            }
        }
    }

//*****************************************************************************************************************************************

    //% blockId=mbit_RGB_Car_Big
    //% block="RGB_Car_Big|value 1 %value1|value 2 %value2|value 3 %value3"
    //% weight=100
    //% blockGap=10
    //% color="#C814B8"
    //% value1.min=0 value1.max=255 value2.min=0 value2.max=255 value3.min=0 value3.max=255

    export function RGB_Car_Big(value1: number, value2: number, value3: number): void {

        let R = value1 * 16;
        let G = value2 * 16;
        let B = value3 * 16;

        if (R > 4096)
            R = 4095;
        if (G > 4096)
            G = 4095;
        if (B > 4096)
            B = 4095;

        setPwm(0, 0, R);
        setPwm(1, 0, G);
        setPwm(2, 0, B);

    }

//*****************************************************************************************************************************************

    //% blockId=mbit_RGB_Car_Program
    //% block="RGB_Car_Program"
    //% weight=99
    //% blockGap=10
    //% color="#C814B8"
// excluded by a kaktus    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1

    export function RGB_Car_Program(): neopixel.Strip {

        if (!yahStrip) {
            yahStrip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB);
        }
        return yahStrip;  
    }



    //% blockId=mbit_ultrasonic_car
    //%block="ultrasonic return distance(cm)"
    //% color="#006400"
    //% weight=97
    //% blockGap=10
// excluded by a kaktus   //% name.fieldEditor="gridpicker" name.fieldOptions.columns=3

    export function Ultrasonic_Car(): number {

        // send pulse
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P14, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P14, 1);
        control.waitMicros(15);
        pins.digitalWritePin(DigitalPin.P14, 0);

        // read pulse
        let d = pins.pulseIn(DigitalPin.P15, PulseValue.High, 43200);
        return  Math.floor(d / 58);
    }

//*****************************************************************************************************************************************

    //% blockId=mbit_Music_Car
    //% block="Music_Car|Playback %index"
    //% weight=97
    //% blockGap=10
    //% color="#006400"
    //% index.fieldEditor="gridpicker"
    //% index.fieldOptions.width=340
    //% index.fieldOptions.columns=3

    export function fMusic_Car(index: enMusic): void {
        switch (index) {
            case enMusic.dadadum: music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once); break;
            case enMusic.birthday: music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once); break;
            case enMusic.entertainer: music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once); break;
            case enMusic.prelude: music.beginMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once); break;
            case enMusic.ode: music.beginMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once); break;
            case enMusic.nyan: music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once); break;
            case enMusic.ringtone: music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once); break;
            case enMusic.funk: music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once); break;
            case enMusic.blues: music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once); break;
            case enMusic.wedding: music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once); break;
            case enMusic.funereal: music.beginMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once); break;
            case enMusic.punchline: music.beginMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once); break;
            case enMusic.baddy: music.beginMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once); break;
            case enMusic.chase: music.beginMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once); break;
            case enMusic.ba_ding: music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once); break;
            case enMusic.wawawawaa: music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once); break;
            case enMusic.jump_up: music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once); break;
            case enMusic.jump_down: music.beginMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once); break;
            case enMusic.power_up: music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once); break;
            case enMusic.power_down: music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once); break;
        }
    }

//*****************************************************************************************************************************************

    //% blockId=mbit_Servo_Car 
    //% block="Servo_Car|num %num|value %value"
    //% weight=96
    //% blockGap=10
    //% color="#006400"
    //% num.min=1 num.max=3 value.min=0 value.max=180
    //% num.fieldEditor="gridpicker"
    //% num.fieldOptions.width=220
    //% num.fieldOptions.columns=1

    export function fServo_Car(num: enServo, value: number): void {

        // 50hz: 20,000 us
        let us = (value * 1800 / 180 + 600); // 0.6 ~ 2.4
        let pwm = us * 4096 / 20000;
        setPwm(num + 2, 0, pwm);

    }

//*****************************************************************************************************************************************

    //% blockId=mbit_Avoid_Sensor
    //% block="Avoid_Sensor|value %value"
    //% weight=95
    //% blockGap=10
    //% color="#006400"
    //% value.fieldEditor="gridpicker"
    //% value.fieldOptions.width=220
    //% value.fieldOptions.columns=1

    export function fAvoid_Sensor(value: enAvoidState): boolean {

        let temp: boolean = false;
        pins.digitalWritePin(DigitalPin.P9, 0);
        switch (value) {
            case enAvoidState.OBSTACLE: {
                if (pins.analogReadPin(AnalogPin.P3) < 800) {
                
                    temp = true;
                    setPwm(8, 0, 0);
                }
                else {
                    temp = false;
                    setPwm(8, 0, 4095);
                }
                break;
            }

            case enAvoidState.NOOBSTACLE: {
                if (pins.analogReadPin(AnalogPin.P3) > 800) {

                    temp = true;
                    setPwm(8, 0, 4095);
                }
                else {
                    temp = false;
                    setPwm(8, 0, 0);
                }
                break;
            }
        }
        pins.digitalWritePin(DigitalPin.P9, 1);
        return temp;
    }

//*****************************************************************************************************************************************

    //% blockId=mbit_Line_Sensor
    //% block="Line_Sensor|direct %direct|value %value"
    //% weight=94
    //% blockGap=10
    //% color="#006400"
    //% direct.fieldEditor="gridpicker" value.fieldEditor="gridpicker"
    //% direct.fieldOptions.width=220 value.fieldOptions.width=220
    //% direct.fieldOptions.columns=1 value.fieldOptions.columns=1

    export function fLine_Sensor(direct: enPos, value: enLineState): boolean {

        let temp: boolean = false;

        switch (direct) {
            case enPos.LeftState: {
                if (pins.analogReadPin(AnalogPin.P2) < 500) {
                    if (value == enLineState.White) {
                        temp = true;
                    }
                    setPwm(7, 0, 4095);
                }
                else {
                    if (value == enLineState.Black) {
                        temp = true;
                    }
                    setPwm(7, 0, 0);
                }
                break;
            }

            case enPos.RightState: {
                if (pins.analogReadPin(AnalogPin.P1) < 500) {
                    if (value == enLineState.White) {
                        temp = true;
                    }
                    setPwm(6, 0, 4095);
                }
                else {
                    if (value == enLineState.Black) {
                        temp = true;
                    }
                    setPwm(6, 0, 0);
                }
                break;
            }
        }
        return temp;
    }

//*****************************************************************************************************************************************

    //% blockId=mbit_CarCtrl
    //% block="CarCtrl|%index"
    //% weight=93
    //% blockGap=10
    //% color="#006400"
    //% index.fieldEditor="gridpicker"
    //% index.fieldOptions.width=220
    //% index.fieldOptions.columns=1

    export function fCarCtrl(index: CarState): void {
        switch (index) {
            case CarState.Car_Run: Car_run(255, 255); break;
            case CarState.Car_Back: Car_back(255, 255); break;
            case CarState.Car_Left: Car_left(0, 255); break;
            case CarState.Car_Right: Car_right(255, 0); break;
            case CarState.Car_Stop: Car_stop(); break;
            case CarState.Car_SpinLeft: Car_spinleft(255, 255); break;
            case CarState.Car_SpinRight: Car_spinright(255, 255); break;
        }
    }

//*****************************************************************************************************************************************

    //% blockId=mbit_CarCtrlSpeed
    //% block="CarCtrlSpeed|%index|speed %speed"
    //% weight=92
    //% blockGap=10
    //% speed.min=0 speed.max=255
    //% color="#006400"
    //% index.fieldEditor="gridpicker"
    //% index.fieldOptions.width=220
    //% index.fieldOptions.columns=1

    export function fCarCtrlSpeed(index: CarState, speed: number): void {
        switch (index) {
            case CarState.Car_Run: Car_run(speed, speed); break;
            case CarState.Car_Back: Car_back(speed, speed); break;
            case CarState.Car_Left: Car_left(speed, speed); break;
            case CarState.Car_Right: Car_right(speed, speed); break;
            case CarState.Car_Stop: Car_stop(); break;
            case CarState.Car_SpinLeft: Car_spinleft(speed, speed); break;
            case CarState.Car_SpinRight: Car_spinright(speed, speed); break;
        }
    }

//*****************************************************************************************************************************************

    //% blockId=mbit_CarCtrlSpeed2 block="CarCtrlSpeed2|%index|speed1 %speed1|speed2 %speed2"
    //% weight=91
    //% blockGap=10
    //% speed1.min=0 speed1.max=255 speed2.min=0 speed2.max=255
    //% color="#006400"
    //% index.fieldEditor="gridpicker"
    //% index.fieldOptions.width=220
    //% index.fieldOptions.columns=1

    export function fCarCtrlSpeed2(index: CarState, speed1: number, speed2: number): void {
        switch (index) {
            case CarState.Car_Run: Car_run(speed1, speed2); break;
            case CarState.Car_Back: Car_back(speed1, speed2); break;
            case CarState.Car_Left: Car_left(speed1, speed2); break;
            case CarState.Car_Right: Car_right(speed1, speed2); break;
            case CarState.Car_Stop: Car_stop(); break;
            case CarState.Car_SpinLeft: Car_spinleft(speed1, speed2); break;
            case CarState.Car_SpinRight: Car_spinright(speed1, speed2); break;
        }
    }

}
