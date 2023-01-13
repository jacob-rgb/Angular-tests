import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggComponent } from './dragg.component';

describe('DraggComponent', () => {
  let component: DraggComponent;
  let fixture: ComponentFixture<DraggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
