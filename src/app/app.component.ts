import { Component, ElementRef, ViewChild } from '@angular/core';
import { DragService } from './services/drag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componentsLib';
  @ViewChild('cont', {static: true}) cont!:ElementRef<HTMLElement>;

  constructor(
    private dragService: DragService,
  ) {

  }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    this.dragService.setBoundsContainer(this.cont.nativeElement);
  }

}
