import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item: Item = {
    id: '',
    name: '',
    brand: '',
    type: '',
    size: '',
    color: ''
  };
  submitted = false;
  

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  saveItem(): void {
    const data = {
      id: '',
      name: this.item.name,
      brand: this.item.brand,
      type: this.item.type,
      size: this.item.size,
      color: this.item.color
    };

    this.itemService.createItem(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newItem(): void {
    this.submitted = false;
    this.item = {
      id: '',
      name: '',
      brand: '',
      type: '',
      size: '',
      color: ''
    };
  }

}
