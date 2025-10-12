export class Module {

    public id: number;
    public name: string;

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

}