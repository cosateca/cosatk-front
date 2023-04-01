export interface IUser {
    idUsers?:string;
    first_name:string | null;
    last_name:string | null;
    email:string | null;
    dni?:string | null;
    telephone?:number | null;
    address?:string | null;
    city?:string | null;
    membership?:string | null;
    birth_date?:Date | null;
    how_meet_us?:string | null;
    subscriber?:boolean | null;
    added_on?:Date | null;
    role?:string | null;
    password?:string | null


}