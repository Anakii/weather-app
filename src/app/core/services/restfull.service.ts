import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestfulService {

  constructor(private http: HttpClient) {
  }

  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, {params});
  }

  post<T>(url: string, body: any, params?: HttpParams): Observable<T> {
    return this.http.post<T>(url, body, {params});
  }
  put<T>(url: string, body: any, params?: HttpParams): Observable<T> {
    return this.http.put<T>(url, body, {params});
  }
  delete<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.delete<T>(url, {params});
  }

}
