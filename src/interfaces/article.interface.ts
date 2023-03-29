export interface IArticle {
  idArticle?:string;
  code: string;
  name: string;
  short_description: string;
  long_description: string;
  serial_number: string;
  price_paid: string;
  value: string;
  loan_fee: string;
  loan_period: string;
  deposit: string;
  components: string;
  care_information: string;
  owned_by: string;
  donated_by: string;
  condition: string;
  brand: string;
  shown_on_website: string;
  categoryIdCategory:string;
  is_on_loan?: boolean;

}