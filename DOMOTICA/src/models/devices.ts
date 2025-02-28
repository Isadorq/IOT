export class Device {
    name: string = "";
    state: boolean = false;
    color: string = "#f533f2";
    icon: string = "device";
}

export class Environment{
    name: string = "";
    devices: Array<Device> = []   
}
