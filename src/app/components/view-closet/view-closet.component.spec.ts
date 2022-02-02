import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClosetComponent } from './view-closet.component';

describe('ViewClosetComponent', () => {
  let component: ViewClosetComponent;
  let fixture: ComponentFixture<ViewClosetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClosetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClosetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
