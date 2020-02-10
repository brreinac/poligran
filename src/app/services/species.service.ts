import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SpeciesService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){  
        this.url = "https://swapi.co/api/";
      }

    getSpecies(){
        return this._http.get(this.url + "species/");
    }
}