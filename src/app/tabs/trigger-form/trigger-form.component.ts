import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trigger-form',
  templateUrl: './trigger-form.component.html',
  styleUrls: ['./trigger-form.component.scss'],
})
export class TriggerFormComponent implements OnInit {
  @Input() onClose: () => void;
  triggerval: string;
  triggertime: Date;
  constructor() { }

  ngOnInit() {}

  dismiss() {
    this.onClose()
  }

  onChange(value) {
    console.log("This is the value:", this.triggerval);
    this.modalController.dismiss(this.triggerval);
  }

  onChange(value) {
    console.log("This is the value:", this.triggertime);
    this.modalController.dismiss(this.triggertime);
  }

}
