console.log("in main.js");
const { execSync } = require('child_process');


const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline')
// uart
//const Readline = require('@serialport/parser-readline')
const { ByteLengthParser } = require('@serialport/parser-byte-length')
const port = new SerialPort({ path: "COM1", baudRate: 115200 });

const parser = port.pipe(new ReadlineParser({ delimiter: ',' || '\r\n' }))
port.open((err) => { if (err) { console.log("open3"); } else { console.log("open1") } })
const arr = [];

// port.on('error', function (err) { console.log('error', err.message); })
// parser.on('data', (data) => {
//     console.log(data);
//     arr.push(parseInt(data));
//     // uartData.push(parseFloat(data));
//     // console.log(typeof (uartData), uartData);
// }
// )
var open = false;
let uart = {

    port: this.port,
    parser: this.parser,
    connected: false,

    connect: () => {
        this.port = new SerialPort({ path: "COM5", baudRate: 115200 });
        console.log("connect");
        this.parser = this.port.pipe(new ReadlineParser({ delimiter: ',' }))
        this.port.on('open', () => { open = true; console.log("open"); })

        this.port.on('error', function (err) { console.log('error', err.message); open = false; uart.reconnect(); })


    },


    reconnect: () => {
        this.port = new SerialPort({ path: "COM5", baudRate: 115200 });
        console.log("reconnect");

        this.parser = this.port.pipe(new ReadlineParser({ delimiter: ',' }))

        this.port.on('open', () => { open = true; console.log("reconnect open"); })

        this.port.on('error', function (err) {
            console.log('reconnect error', err.message); setTimeout(() => {
                open = true;

            }, 500);
        })

    },
    isconnect: () => {
        // this.port.open((err) => {
        //     if (err) {
        //         console.log("uart.error")
        //         return false;
        //     }
        // })

    }

}

SerialPort.list().then(
    // ports => ports.forEach(console.log),
    // err => console.error(err)
)



// let uartData = [];
// var open = false;
// var a = 1;
// while (uart.connected == false) {
//     console.log(a++);
// }








class All {
    constructor() {

    }

    C = [];
    V = [];
    P = [];



    isConnected = () => {
        console.log("isConnected", uart.isconnect());
        uart.reconnect();
        console.log(open);
        port.open((err) => {
            if (err) {
                console.log('err1or')
                return false;
            }
            else {
                console.log("open"); return true;
            }
        });


    }

    start() {
        uart.connect();


        setTimeout(function () {
            console.log("open", open);

            if (open == true) {
                console.log("uart connected");
                return 1;
            }
        }, 1000);

        // while (open == false) {
        //     uart.port.on('open', () => { open = true; console.log("open"); })

        // }
        //execSync('sleep 1');

        console.log("uart not connected");

        console.log(open)
        // port.write("1", function (err) {
        //     if (err) {
        //         return console.log("Error on write: ", err.message);
        //     }
        //     console.log("Message sent successfully");
        // });
        // parser.on('data', (data) => {
        //     console.log(data);
        //     C.push(parseFloat(data));

        // })

    }


}

module.exports = { All, uart, port, parser }


