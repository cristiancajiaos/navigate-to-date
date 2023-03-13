import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild('datePicker', { static: false }) datePicker: NgbDatepicker;

  public model: NgbDateStruct;

  constructor(
    private calendar: NgbCalendar
  ) { }

  ngOnInit() {
  }

  public goToToday(): void {
    const todayDate: NgbDate = this.calendar.getToday();
    this.model = todayDate;
  }

  public goToFiveDaysToday(): void {
    const todayDate: NgbDate = this.calendar.getToday();
    const fiveDaysDate: NgbDate = this.calendar.getNext(todayDate, 'd', 5);
    this.model = fiveDaysDate;
  }

}
