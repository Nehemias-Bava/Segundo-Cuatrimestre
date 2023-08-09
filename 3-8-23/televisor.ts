class Televisor {
    isOn: boolean;
    volume: number;
    channel: number;

    constructor(on: boolean = false, vol: number = 0, chn: number = 0) {
        this.isOn = on;
        this.volume = vol;
        this.channel = chn;
    }

    switchOnOff(): void {
        this.isOn = !this.isOn;
        console.log(this.isOn ? "encendido" : "apagado");
    }

    volUp(): void {
        console.log("vol up");
    }

    volDown(): void {
        console.log("vol down");
    }

    channelUp(): void {
        console.log("channel up");
    }

    channelDown(): void {
        console.log("channel down");
    }

    pickChannel(channel: number): void {
        if (!this.isOn) return;
        this.channel = channel;
        console.log("Cambiaste al canal", this.channel);
    }

    info(): void {
        console.log("canal, volumen, hora actual");
    }
}

const tv01 = new Televisor();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.pickChannel(45);