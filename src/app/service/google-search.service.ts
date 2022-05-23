import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API_KEY, CONTEXT_KEY } from '../app.api';
import { response } from './mock';

@Injectable({
  providedIn: 'root'
})
export class GoogleSearchService {

  constructor(private httpClient: HttpClient) { }

  callGoogleSearch(searchTerm: string):Observable<any> {
    // NOTE: Google Custom Search API has a limit of 100 free queries per day, so use wisely.
    // return this.httpClient.get(
    //     `https://www.googleapis.com/customsearch/v1?key=${API_KEY}
    //         &cx=${CONTEXT_KEY}&q=${searchTerm}`
    // )
    console.log(response)
    return of(response);
  }
}
