import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DragService } from 'src/app/services/drag.service';
import { Subscription } from 'rxjs'
import { IPosition } from 'angular2-draggable/lib/models/position';

@Component({
  selector: 'app-dragg',
  templateUrl: './dragg.component.html',
  styleUrls: ['./dragg.component.scss']
})
export class DraggComponent implements OnInit {

  @ViewChild('draggableItem', {static: true}) draggableItem!:ElementRef<HTMLElement>;


  dragBounds: HTMLElement | undefined;
  gridSize = 50;
  dragItemStyles: any;
  lastEdge:any;
  position:any = {x: 20, y: 20};
  lastPosition: IPosition | null = null;
  frameMargin:number = 100;
  
  private subscriptions: Subscription[] = []

  constructor(
    private dragService: DragService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.dragService.boundsContainer$.subscribe(res => {
        this.dragBounds = res;
      })
    )
  }

  ngAfterViewInit() {
      this.dragItemStyles = getComputedStyle(this.draggableItem.nativeElement);
  }


  ngOnDestroy():void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onMoveEnd({x, y}: IPosition):any {

    const contWidth = parseFloat(getComputedStyle(this.dragBounds!).width.toString());
    const dragItemWidth = parseFloat(this.dragItemStyles.width);
    const relativeWidth = contWidth - dragItemWidth;
    const contHeight = parseFloat(getComputedStyle(this.dragBounds!).height.toString());
    const dragItemHeight = parseFloat(this.dragItemStyles.height);
    const relativeHeight = contHeight - dragItemHeight;

    const isInRightSide = x >= (relativeWidth - this.frameMargin);
    const isInLeftSide = x <= this.frameMargin;
    const isInTopSide = y <= this.frameMargin;
    const isInBottomSide = y >= (relativeHeight - this.frameMargin);

    let position = {x: 20, y: 20};
    if(isInTopSide && isInLeftSide) {
      position = {
        x: 20,
        y: 20
      }
    } else if(isInTopSide && isInRightSide) {
      position = {
        x: relativeWidth - 20,
        y: 20
      }
    }  else if(isInBottomSide && isInLeftSide) {
      position = {
        x: 20,
        y: relativeHeight - 20
      }
    } else if(isInBottomSide && isInRightSide) {
      position = {
        x: relativeWidth - 20,
        y: relativeHeight - 20
      }
    }  else if(isInTopSide && isInLeftSide) {
      position = {
        x: 20,
        y: 20
      }
    }  else if(isInTopSide) {
      position = {
        x: x > 20 ? x : y,
        y: 20
      }
    } else if( isInLeftSide) {
      position = {
        x: 20,
        y: y > 20 ?  y : 20
      }
    } else if(isInRightSide) {
      position = {
        x: relativeWidth - 20,
        y: y > 20 ? y : 20
      }
    } else if(isInBottomSide) {
      position = {
        x: x > 20 ? x : 20,
        y: relativeHeight - 20
      }
    } else {
      
    }
    this.position = position;
    this.lastPosition = position;
  }

  edge(e:any) {
    this.lastEdge = e;
  }



}
