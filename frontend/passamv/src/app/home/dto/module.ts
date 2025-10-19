import { AreaPerModule } from "./area-module";

export class Module {

    public id: number;
    public name: string;
    public componentAmv: number;
    public areaPerModules: AreaPerModule[];

    public getId() {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }
    
    public getComponentAmv() {
        return this.componentAmv;
    }

    public setComponentAmv(componentAmv: number) {
        this.componentAmv = componentAmv;
    }

    public getAreaPerModule(): AreaPerModule[] {
        return this.areaPerModules;
    }

    public setAreaPerModule(areaPerModules: AreaPerModule[]) {
        this.areaPerModules = areaPerModules;
    }

}