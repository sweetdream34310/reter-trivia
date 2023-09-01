export class AccountBase {
    enable?: boolean;
    lives?: number;
    lastLiveUpdate?: number;
    nextLiveUpdate?: number;
    categories?: number;
    avgAnsTime?: number;
    id?: string;
    bits?: number;
    bytes?: number;
    signUpQuestionAnswered?: boolean;
    firstQuestionBitsAdded?: number;
    lastGamePlayedNotification?: boolean;
    lastGamePlayed?: number;
}

export class Account extends AccountBase {
    leaderBoardStats?: { [key: number]: number };
    gamePlayed?: number;
    wins?: number;
    losses?: number;
    contribution?: number;
    badges?: number;

    constructor() {
        super();
        this.leaderBoardStats = {};
    }
}
