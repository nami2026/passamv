export class RequestLogin {
    email : string;
    password : string;

    public setEmail(email : string) {
        this.email = email;
    }

    public getEmail() : string {
        return this.email;
    }

    public setPassword(password : string) {
        this.password = password;
    }

    public getPassword() : string {
        return this.password;
    }
}