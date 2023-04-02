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

export interface IArticleEditDto{
  name?: string | undefined;
  short_description?: string | undefined;
  long_description?: string | undefined;
  serial_number?: string | undefined;
  price_paid?: string | undefined;
  value?: string | undefined;
  loan_fee?: string | undefined;
  loan_period?: string | undefined;
  deposit?: string | undefined;
  components?: string | undefined;
  care_information?: string | undefined;
  owned_by?: string | undefined;
  donated_by?: string | undefined;
  condition?: string | undefined;
  brand?: string | undefined;
  shown_on_website?: string | undefined;
  categoryIdCategory?:string | undefined;
  is_on_loan?: boolean | undefined;
}