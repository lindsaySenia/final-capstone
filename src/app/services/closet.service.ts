import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Item } from "../models/item.model";
import { Closet } from "../models/closet.model";

@Injectable({providedIn: 'root'})
export class ClosetService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getClosets(): Observable<Closet[]> {
        return this.http.get<Closet[]>(`${this.apiServerUrl}/closets`);
    }

    public createCloset(closet: Closet): Observable<Closet> {
        return this.http.post<Closet>(`${this.apiServerUrl}/closets`, closet);
    }

    public deleteCloset(closetId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/closets/${closetId}`);
    }

    // public addItemToCloset(closetId: number, item: Item): Observable<ClosetItem> {
    //     return this.http.post<Item>(`${this.apiServerUrl}/closets/${closetId}/items`, item);
    // }


}