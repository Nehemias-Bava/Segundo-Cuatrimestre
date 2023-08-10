var Televisor = /** @class */ (function () {
    function Televisor() {
        this.isOn = false;
        this.volume = 0;
        this.channel = 0;
    }
    Televisor.prototype.switchOffOn = function () {
        this.isOn = !this.isOn;
        if (this.isOn) {
            console.log("El televisor esta Prendido");
        }
        else {
            console.log("El televisor esta Apagado");
        }
    };
    Televisor.prototype.volUp = function () {
        if (this.isOn && this.volume < 100) {
            this.volume++;
        }
    };
    Televisor.prototype.volDown = function () {
        if (this.isOn && this.volume > 0) {
            this.volume--;
        }
    };
    Televisor.prototype.channelUp = function () {
        if (this.isOn && this.channel < 99) {
            this.channel++;
        }
    };
    Televisor.prototype.channelDown = function () {
        if (this.isOn && this.channel > 0) {
            this.channel--;
        }
    };
    Televisor.prototype.pickChannel = function (channel) {
        if (this.isOn && channel >= 1 && channel <= 99) {
            this.channel = channel;
        }
    };
    Televisor.prototype.info = function () {
        //
        var horaActual = new Date().toLocaleTimeString();
        return "Canal: ".concat(this.channel, ", Volumen: ").concat(this.volume, ", Hora: ").concat(horaActual);
    };
    return Televisor;
}());
var tv01 = new Televisor();
tv01.switchOffOn();
tv01.pickChannel(18);
//Cambio el canal + hasta el 24
tv01.channelUp();
tv01.channelUp();
tv01.channelUp();
tv01.channelUp();
tv01.channelUp();
tv01.channelUp();
//Cambio de canal - hasta el 22
tv01.channelDown();
tv01.channelDown();
//Subo 10 veces el volumen
tv01.volUp();
tv01.volUp();
tv01.volUp();
tv01.volUp();
tv01.volUp();
tv01.volUp();
tv01.volUp();
tv01.volUp();
tv01.volUp();
tv01.volUp();
//Bajo 2 veces el volumen
tv01.volDown();
tv01.volDown();
console.log(tv01.info());
