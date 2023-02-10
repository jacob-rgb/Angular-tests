import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidMenuComponent } from './liquid-menu.component';

describe('LiquidMenuComponent', () => {
  let component: LiquidMenuComponent;
  let fixture: ComponentFixture<LiquidMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
