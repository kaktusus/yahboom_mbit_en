/*
Copyright (C): 2010-2019, Shenzhen Yahboom Tech
modified from liusen
2019-08 -04 for the common good, the kaktus looked a little here.
load dependency
"mbit": "file:../pxt-mbit"
*/

/*****************************************************************************************************************************************
 *  LED Class        *********************************************************************************************************************
 ****************************************************************************************************************************************/

//% color="#C814B8" weight=25 icon="\uf1d4"
namespace mbit_Display {

    export enum enColor {

        //% blockId="OFF" block="off"
        OFF=0,
        //% blockId="Red" block="red"
        Red,
        //% blockId="Green" block="green"
        Green,
        //% blockId="Blue" block="blue"
        Blue,
        //% blockId="White" block="white"
        White,
        //% blockId="Cyan" block="cyan"
        Cyan,
        //% blockId="Pinkish" block="magenta"
        Pinkish,
        //% blockId="Yellow" block="yellow"
        Yellow,

    }

    export enum enLED1 {

        //% blockId="OFF" block="off"
        OFF=0,
        //% blockId="ON" block="on"
        ON=1
    }

    //% blockId=mbit_LED1
    //% block="LED1|pin %pin|value %value"
    //% weight=6
    //% blockGap=8
    //% color="#C814B8"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=200
    //% pin.fieldOptions.columns=2
    //% value.fieldEditor="gridpicker"
    //% value.fieldOptions.width=200
    //% value.fieldOptions.columns=1

    export function fLED1(pin: DigitalPin, value: enLED1): void {

        pins.digitalWritePin(pin, value);

    }

    //% blockId=mbit_LED2
    //% block="LED2|pin %pin|value %value"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    //% value.min=0 value.max=255
    //% pin.fieldEditor="gridpicker" 
    //% pin.fieldOptions.width=200
    //% pin.fieldOptions.columns=3
    //% value.fieldEditor="gridpicker"
    //% value.fieldOptions.width=200
    //% value.fieldOptions.columns=1
    export function fLED2(pin: AnalogPin, value: number): void {

        pins.analogWritePin(pin, value * 1024 / 256);

    }

    //% blockId=mbit_BreathLED 
    //% block="BreathLED|pin %pin"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=200
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


//*########################################################################################################################################
//##  testy kaktusa z niebieskimi ledami L8, L9, L10  #####################################################################################
//########################################################################################################################################*

    export enum enLED_L8 {
        
        //% blockId="OFF" block="off"
        OFF=4095, //0-4095
        //% blockId="ON" block="on"
        ON=1024
    }

    //% blockId=mbit_LED_L8 block="LED_L8| %value"
    //% weight=3
    //% blockGap=8
    //% color="#932bb5"
    //% value.fieldEditor="gridpicker"
    //% value.fieldOptions.width=200
    //% value.fieldOptions.columns=1

    export function fLED_L8(valuePWM: enLED_L8): void {
    setPwm(6, 0, valuePWM);    //channel LED, ?,PWM value
    }




//#########################################################################################################################################


    //% blockId=mbit_RGB
    //% block="RGB|pin1 %pin1|pin2 %pin2|pin3 %pin3|value1 %value1|value2 %value2|value3 %value3"
    //% weight=2
    //% blockGap=8
    //% color="#C814B8"
    //% value1.min=0 value1.max=255 value2.min=0 value2.max=255 value3.min=0 value3.max=255
    //% pin1.fieldEditor="gridpicker" pin2.fieldEditor="gridpicker" pin3.fieldEditor="gridpicker"
    //% pin1.fieldOptions.width=200 pin2.fieldOptions.width=200 pin3.fieldOptions.width=200
    //% pin1.fieldOptions.columns=3 pin2.fieldOptions.columns=3 pin3.fieldOptions.columns=3

    export function fRGB(pin1: AnalogPin, pin2: AnalogPin, pin3: AnalogPin, value1: number, value2: number, value3: number): void {

        pins.analogWritePin(pin1, value1 * 1024 / 256);
        pins.analogWritePin(pin2, value2 * 1024 / 256);
        pins.analogWritePin(pin3, value3 * 1024 / 256);

    }

    //% blockId=mbit_RGB2
    //% block="RGB|pin1 %pin1|pin2 %pin2|pin3 %pin3|value %value"
    //% weight=1
    //% blockGap=8
    //% color="#C814B8"
    //% pin1.fieldEditor="gridpicker" pin2.fieldEditor="gridpicker" pin3.fieldEditor="gridpicker"
    //% pin1.fieldOptions.width=200 pin2.fieldOptions.width=200 pin3.fieldOptions.width=200
    //% pin1.fieldOptions.columns=3 pin2.fieldOptions.columns=3 pin3.fieldOptions.columns=3
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
