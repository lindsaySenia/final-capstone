import { Component, OnInit } from '@angular/core';
import { Closet } from 'src/app/models/closet.model';
import { ClosetService } from 'src/app/services/closet.service';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view-closet',
  templateUrl: './view-closet.component.html',
  styleUrls: ['./view-closet.component.css']
})
export class ViewClosetComponent implements OnInit {

  closet?: Item[];
  currentItem: Item = {};
  currentIndex = -1;
  name = '';
  type = '';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.itemService.getItems()
      .subscribe({
        next: (data) => {
          this.closet = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveItems();
    this.currentItem = {};
    this.currentIndex = -1;
  }

  setActiveItem(item: Item, index: number): void {
    this.currentItem = item;
    this.currentIndex = index;
  }

  searchName(): void {
    this.currentItem = {};
    this.currentIndex = -1;

    this.itemService.findByName(this.name)
      .subscribe({
        next: (data: Item[] | undefined) => {
          this.closet = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }
}
