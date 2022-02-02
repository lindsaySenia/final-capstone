import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentItem: Item = {
    id: '',
    name: '',
    brand: '',
    type: '',
    size: '',
    color: ''
  };

  message = '';


  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getItem(this.route.snapshot.params["id"]);
    }
  }

  getItem(id: number): void {
    this.itemService.get(id)
    .subscribe({
      next: (data) => {
        this.currentItem = data;
        console.log(data);
      },
      error: (e) => console.log(e)
    });
  }

  updateItem(): void {
    this.message = '';
    console.log(this.currentItem);
    this.itemService.updateItem(this.currentItem.id, this.currentItem)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteItem(): void {
    this.itemService.deleteItem(this.currentItem.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/items']);
        },
        error: (e) => console.error(e)
      });
  }

}
