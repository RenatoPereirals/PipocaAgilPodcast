import { Data } from "@angular/router";

export interface User {
  id: number;
  nomeCompleto: string;
  email: string;
  date?: Data;
  password: string;
}
