import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public eventSource = [];
  public selectedDate = new Date();
  isToday: boolean = true;
  markDisabled = (date: Date) => {
    var d = new Date();
    // d.setDate(d.getDate() - 1);
    return date < d;
  };
  calendar = {
    mode: 'month',
    currentDate: this.selectedDate
  }
  constructor(public navCtrl: NavController) {}

  changeMode(mode) {
    this.calendar.mode = mode;
  }
  // loadEvents() {
  //   this.eventSource = this.createRandomEvents();
  // }
  onCurrentDateChanged(ev) {
    console.log(ev);
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    ev.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === ev.getTime();
  }
  // onViewTitleChanged(Title) {
  //   this.viewTitle = Title;
  // }
  onTimeSelected(event) {
    console.log(event);
    var date = new Date().getTime();
    console.log(date);
    var task = "work fast";

  }
  onEventSelected(event) {
    console.log(event);
  }

}
