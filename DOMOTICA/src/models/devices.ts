export class Device {
    nome: string = "";
    state: boolean = false;
    color: string = "#f533f2";
}

export class Places{
    nome: string = "";
    devices: Array<Device> = []   
}
