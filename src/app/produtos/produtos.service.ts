import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Produto } from "./produto";
import { Observable } from "rxjs";

@Injectable()
export class ProdutoService {

    constructor(private http: HttpClient) {} //sempre que usar o HttpClient tem que declarar ele no "app.module.ts"

    protected UrlServiceV1: string = "http://localhost:3101/";

    obterProdutos() : Observable<Produto[]> {
        return this.http.get<Produto[]>(this.UrlServiceV1+"produtos");
    }

}