import { AreaPerModule } from "./area-module";

export class Area {

    public id: number;
    public name: string;
    public areaPerModules: AreaPerModule[];

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getAreaPerModule(): AreaPerModule[] {
        return this.areaPerModules;
    }

    public setAreaPerModule(areaPerModules: AreaPerModule[]) {
        this.areaPerModules = areaPerModules;
    }

}