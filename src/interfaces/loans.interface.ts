export interface ILoan {
    idLoan?:number;
    status:boolean;
    added_on?:Date;
    fee:number;
    deposit?:number;   
    checked_out:Date;
    checked_in:Date;
    userIdUsers : number;
    articleIdArticle : number;

}