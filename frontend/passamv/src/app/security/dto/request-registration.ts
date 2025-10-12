export class RequestRegistration {

    private firstName: string;
    private secondName: string;
    private firstLastname: string;
    private secondLastname: string;
    private email: string;
    private password: string;

    public getFirstName() : string {
        return this.firstName;
    }

    public setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    public getSecondName() : string {
        return this.secondName;
    }

    public setSecondName(secondName: string) {
        this.secondName = secondName;
    }

    public getFirstLastname() : string {
        return this.firstLastname;
    }

    public setFirstLastname(firstLastname: string) {
        this.firstLastname = firstLastname;
    }

    public getSecondLastname() : string {
        return this.secondLastname;
    }

    public setSecondLastname(secondLastname: string) {
        this.secondLastname = secondLastname;
    }

    public getEmail() : string {
        return this.email;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public getassword() : string {
        return this.password;
    }

    public setPassword(password: string) {
        this.password = password;
    }

}