class Televisor {
    private isOn: boolean;
    private volume: number;
    private channel: number;

    constructor() {
        this.isOn = true;
        this.volume = 0;
        this.channel = 0;
    }

    switchOffOn(): void {
        this.isOn = !this.isOn;
        if(this.isOn) {
            console.log("El televisor esta Prendido");
        } else {
            console.log("El televisor esta Apagado");
        }
    }

    volUp(): void {
        if (this.isOn && this.volume < 100) {
            this.volume++;
        }
    }

    volDown(): void {
        if (this.isOn && this.volume > 0) {
            this.volume--;
        }
    }

    channelUp(): void {
        if (this.isOn && this.channel < 99) {
            this.channel++;
        }
    }

    channelDown(): void {
        if (this.isOn && this.channel > 0) {
            this.channel--;
        }
    }

    pickChannel(channel: number): void {
        if (this.isOn && channel >= 1 && channel <= 99) {
            this.channel = channel;
        }
    }

    info(): string {
        //
        const horaActual = new Date().toLocaleTimeString();
        return `Canal: ${this.channel}, Volumen: ${this.volume}, Hora: ${horaActual}`;
    }
}

const tv01 = new Televisor();
tv01.switchOffOn();
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