import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Item } from "../models/item.model";

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getItems(): Observable<Item[]> {
        return this.http.get<Item[]>(`${this.apiServerUrl}/items`);
    }

    public createItem(item: Item): Observable<Item> {
        return this.http.post<Item>(`${this.apiServerUrl}/items/add`, item);
    }


    public deleteItem(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/items/${id}`);
      
    }

    public get(id: number): Observable<Item> {
        return this.http.get(`${this.apiServerUrl}/items/${id}`);
    }

    public findByName(type: any): Observable<Item[]> {
        return this.http.get<Item[]>(`${this.apiServerUrl}/items/?name=${name}`);
    }

    public updateItem(id: any, data: Item): Observable<Item> {
        return this.http.put<Item>(`${this.apiServerUrl}/items/${id}`, data);
    }

}