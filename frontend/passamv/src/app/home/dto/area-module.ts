export class AreaPerModule {

    public area: number;
    public module: number;
    public totalQuestion: number;

    public getArea(): number {
        return this.area;
    }

    public setArea(area: number) {
        this.area = area;
    }

    public getModule(): number {
        return this.module;
    }

    public setNumber(module: number) {
        this.module = module;
    }

    public getTotalQuestion(): number {
        return this.totalQuestion;
    }

    public setTotalQuestion(totalQuestion: number) {
        this.totalQuestion = totalQuestion;
    }

}