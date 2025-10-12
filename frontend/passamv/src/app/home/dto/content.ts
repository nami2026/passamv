import { Module } from "./module";


export class Content {
    id: number;
    name: string;
    file: string;
    title: string;
    colorName: string;
    module: Module;

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

    public getFile() {
        return this.file;
    }

    public setFile(file: string) {
        this.file = file;
    }

    public getTitle() {
        return this.title;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public getColorName() {
        return this.colorName;
    }

    public setColorName(colorName: string) {
        this.colorName = colorName;
    }

    public getModule() {
        return this.module;
    }

    public setModule(module: Module) {
        this.module = module;
    }

}