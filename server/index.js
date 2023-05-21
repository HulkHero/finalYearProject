const express = require('express');
const cors = require('cors');
const http = require("http");
const path = require('path');
const { Server } = require("socket.io");
let { All, uart, port, parser } = require('./Main');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);


});


// var Main = new All();
// console.log(Main.start());

// Main.isConnected();

// port.on("open", () => {
//     console.log("port oppend");
//     io.emit("messege", "port oppend");
// })
port.on("error", (err) => { io.emit("error", "pak"); console.log("error2", err.message) });


const c = [];
const v = [];
const power = [];
var flag = 0;
var done = false;

/*
 node send s -> gets g
                gets i
 node send c -> gets current
    node send v -> gets voltage

*/

const dataHandler = (data, res) => {
    console.log("data", data);
    //console.log("res", res);
    if (flag == 2) {

        v.push(parseFloat(data));
        if (v.length == 11) {
            flag = 3;
            done = true;
        }
    }

    if (flag == 1) {

        c.push(parseFloat(data));
        if (c.length == 11) {
            port.write("v,");
            io.emit('messege', "reading Voltage");
            flag = 2;
        }
    }
    if (data == "g") {
        io.emit('messege', "connected");



    }
    if (data == "i") {
        io.emit('messege', "irradiance 1000");
        port.write("c,");
        io.emit('messege', "reading Current");
        flag = 1;
    }
    if (flag == 3) {
        for (var i = 0; i < c.length; i++) {
            // console.log("power", c[i], v[i])
            console.log("current", c[i]);
            console.log("power", c[i] * v[i])
            power.push((c[i] * v[i]) / 10);
        }
        io.emit('messege', "generating results");
        console.log("c length", c.length);
        v.pop();
        console.log("v length", v.length);
        console.log("mpp", Math.max(...power));
        var mpp = {
            current: null,
            voltage: null,
        }
        for (var i = 0; i < power.length; i++) {
            if ((c[i] * v[i]) / 10 == Math.max(...power)) {
                console.log(i);
                console.log("current1", [i]);
                console.log(v[i]);
                mpp.current = c[i];
                mpp.voltage = v[i];
                console.log(power[i]);
            }
        }
        if (flag == 3) {
            flag = -1;
            res.send({ mpp, current, voltage, power });
        }
    }



}


app.get("/voltage", async (req, res) => {
    parser.removeAllListeners("data");
    console.log("start");
    power.length = 0;
    c.length = 0;
    v.length = 0;
    flag = 0;
    port.on("open", (data) => { console.log("port oppend", data); });
    port.on("error", (err) => { console.log("error2", err.message) });
    io.emit("messege", "starting");
    port.write("s,");
    parser.on("data", (data) => dataHandler(data, res));

})









//uart stream



// calculations and apis

const current = [1, 1, 0.98, 0.95, 0.84, 0.6, 0.2, 0, 0, 0, 0];
const voltage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(current.length);



app.get("/reset", (rek, res) => {
    console.log("start");





    // Main.start();

    console.log("start");


    res.send("done");
})

app.get('/curresdnt', async (req, res) => {
    const power = [];
    const c = [];
    const v = [];
    var flag = true;

    port.write(",");
    port.on("open", () => {
        console.log("port oppend");
    })
    port.write("s,");
    parser.on("data", (data) => {
        console.log("first call", data);
        if (data == "g") {

            parser.removeListener("data", (data) => { });
            port.write("c,");
            parser.on("data", (data) => {
                console.log("second call", data);
                if (c.length < 10) {
                    console.log("in c", c.length);
                    //parser.on("data", (data) => {
                    c.push(parseFloat(data));
                    // })

                }
                else {
                    if (v.length < 11) {

                        port.write("v,");
                        ///parser.on("data", (data) => {
                        console.log("in v", v.length);
                        console.log(data);
                        v.push(parseFloat(data));
                    }
                    else {
                        flag = false;
                        for (var i = 0; i < c.length; i++) {
                            // console.log("power", c[i], v[i])
                            console.log("current", c[i]);
                            console.log("power", c[i] * v[i])
                            power.push((c[i] * v[i]) / 10);
                        }
                        console.log("c length", c.length);
                        v.pop();
                        console.log("v length", v.length);
                        console.log("mpp", Math.max(...power));
                        var mpp = {
                            current: null,
                            voltage: null,
                        }
                        for (var i = 0; i < power.length; i++) {
                            if ((c[i] * v[i]) / 10 == Math.max(...power)) {
                                console.log(i);
                                console.log("current1", [i]);
                                console.log(v[i]);
                                mpp.current = c[i];
                                mpp.voltage = v[i];
                                console.log(power[i]);
                            }
                        }



                        res.send({ mpp, current, voltage, power });

                    }


                    //  })

                }


            })
        }


    });



})


server.listen(4000, () => {
    console.log('Server is running on port 4000');
});