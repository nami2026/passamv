import { Module } from "./module";


export class ComponentAmv {

    public id: number;
    public type: string;
    public modules: Module[];

    public getId() {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getType() {
        return this.type;
    }

    public setType(type: string) {
        this.type = type;
    }

    public getModules() {
        return this.modules;
    }

    public setModules(modules: Module[]) {
        this.modules = modules;
    }

}