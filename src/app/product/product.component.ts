import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { mergeMap, scan, tap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public grandTotal$ = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.grandTotal$.pipe(
      tap(() => console.log('abbc'))
    ).subscribe({
      next: grandTotal => {
        console.log(grandTotal);
      }
    });
  }

  calculate(): void {
    this.grandTotal$.next(Math.random() * 1000);
  }

}
