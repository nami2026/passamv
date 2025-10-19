export class Option {
    
    public id: number;
    public text: string;
    public rigthAnswer: boolean;
    public item: number;
    public isSelected: boolean = false;

    public getId() {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getText() {
        return this.text;
    }

    public setText(text: string) {
        this.text = text;
    }

    public getRigthAnswer() {
        return this.rigthAnswer;
    }

    public setRigthAnswer(rigthAnswer: boolean) {
        this.rigthAnswer = rigthAnswer;
    }

    public getItem() {
        return this.item;
    }

    public setItem(item: number) {
        this.item = item;
    }

    public getIsSelected() {
        return this.isSelected;
    }

    public setIsSelected(isSelected: boolean) {
        this.isSelected = isSelected;
    }

}