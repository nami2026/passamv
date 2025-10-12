export class ResponseData {
    responseCode : string;
    responseMsg : string;

    public getResponseCode() : string {
        return this.responseCode;
    }

    public setResponseCode(responseCode: string) {
        this.responseCode = responseCode;
    }

    public getResponseMsg() : string {
        return this.responseMsg;
    }

    public setResponseMsg(responseMsg: string) {
        this.responseMsg = responseMsg;
    }

}