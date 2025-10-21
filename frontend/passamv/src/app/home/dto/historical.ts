import { IdPk } from "./id-pk";

export class Historical {

    ids: IdPk
    score: number;
    startDate: Date;
    endDate: Date;
    totalScore: number;
    status: string;
    wrongAnswersId: string;
    rightAnswersId: string;

}