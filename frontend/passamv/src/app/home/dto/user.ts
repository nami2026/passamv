export class User {

    public id: number;
    public email: string;

    public getId() {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getEmail() {
        return this.email;
    }

    public setEmail(email: string) {
        this.email = email;
    }

}