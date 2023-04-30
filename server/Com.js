console.log("in mCom.js");



const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline')
// uart
//const Readline = require('@serialport/parser-readline')
const { ByteLengthParser } = require('@serialport/parser-byte-length')
const port = new SerialPort({ path: "COM2", baudRate: 115200 });

const parser = port.pipe(new ReadlineParser({ delimiter: ',' || '\r\n' }))
port.open((err) => { if (err) { console.log("open3"); } else { console.log("open1") } })
const arr = [];
const voltage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const current = [1, 1, 0.98, 0.95, 0.84, 0.6, 0.2, 0, 0, 0, 0];
port.on('error', function (err) { console.log('error', err.message); })
parser.on('data', (data) => {
    console.log("first call", data);

    if (data == "s") {
        port.write("g,");
        port.write("i,");
    }
    if (data == "v") {

        console.log("in data v");
        voltage.forEach((element) => {
            port.write(element.toString());
            port.write(",");
            console.log("in  stm", element.toString());
        });


    }
    if (data == "c") {
        current.forEach((element) => {
            port.write(element.toString());
            port.write(",");
            console.log("in  stm", element.toString());
        });

    }


})


    // uartData.push(parseFloat(data));
    // console.log(typeof (uartData), uartData);



