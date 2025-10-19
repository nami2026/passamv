import { Option } from "./option";

export class Item {

    public id: number;
    public question: string;
    public module: number;
    public options: Option[];

    public getId() {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getQuestion() {
        return this.question;
    }

    public setQuestion(question: string) {
        this.question = question;
    }

    public getModule() {
        return this.module;
    }

    public setModule(module: number) {
        this.module = module;
    }

    public getOptions() {
        return this.options;
    }

    public setOptions(options: Option[]) {
        this.options = options;
    }

}