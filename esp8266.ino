#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

/*Put WiFi SSID & Password*/
const char *ssid = "OPPO Reno6";     // Enter SSID here
const char *password = "0987654321"; // Enter Password here
const int ENA = D1;                  // Enable pin for motor A
const int IN1 = D2;                  // Input 1 pin for motor A
const int IN2 = D3;

ESP8266WebServer server(80);

void setup()
{
    Serial.begin(9600);
    delay(100);
    pinMode(ENA, OUTPUT);
    pinMode(IN1, OUTPUT);
    pinMode(IN2, OUTPUT);

    Serial.println("Connecting to ");
    Serial.println(ssid);

    // connect to your local wi-fi network
    WiFi.begin(ssid, password);

    // check NodeMCU is connected to Wi-fi network
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(1000);
        Serial.print(".");
    }
    Serial.println("");
    Serial.println("WiFi connected..!");
    Serial.print("Got IP: ");
    Serial.println(WiFi.localIP());

    server.on("/", handle_OnConnect);
    server.on("/hello", handle_hello);
    server.on("/motorUp", HTTP_POST, handle_Up);
    server.on("/motorDown", HTTP_POST, handle_Down);
    server.on("/motorStop", HTTP_POST, handle_Stop);
    server.onNotFound(handle_NotFound);

    server.begin();
    Serial.println("HTTP Server Started");
}
void loop()
{
    server.handleClient();
}

void handle_OnConnect()
{
    server.send(200, "text/html", "Connected");
}

void handle_hello()
{

    server.send(200, "text/html", "hello world");
}

void handle_NotFound()
{
    server.send(404, "text/plain", "Not found");
}

void handle_Up()
{

    // handle up
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    analogWrite(ENA, 125);
    Serial.println("handleUp");
    server.send(200, "text/plain", "found");
}

void handle_Down()
{

    // down

    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    analogWrite(ENA, 125);
    Serial.println("handleDown");
    server.send(200, "text/plain", "found");
}
void handle_Stop()
{
    Serial.println("handleStop");
    digitalWrite(ENA, LOW);
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);

    server.send(200, "text/plain", "found");
}
