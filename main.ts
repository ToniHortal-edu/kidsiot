ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("xarxa", "contrasenya")
basic.forever(function () {
    if (ESP8266_IoT.kidsiotState(true)) {
        basic.showIcon(IconNames.Yes)
        ESP8266_IoT.uploadKidsiot(input.temperature())
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.No)
        ESP8266_IoT.connectKidsiot("User Token", "X")
    }
})
