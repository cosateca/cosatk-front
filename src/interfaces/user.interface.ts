export interface IUser {
    id?:string;
    first_name: string;
    last_name: string;
    email: string;
    dni?: string;
    phone?:number;
    adress?:string;
    city?:string;
    membership?:string;
    birth_date?:Date;
    how_meet_us?:string;
    subscriber?:number;
    added_on?: Date;
    role?:string;


}