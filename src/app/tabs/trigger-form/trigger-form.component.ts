import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-trigger-form',
  templateUrl: './trigger-form.component.html',
  styleUrls: ['./trigger-form.component.scss'],
})
export class TriggerFormComponent implements OnInit {
  @Input() onClose: () => void;
  triggerval: string;
  triggertime: Date;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.onClose()
  }

  // onChangeValue(value) {
  //   console.log("This is the value:", this.triggerval);
  //   this.modalController.dismiss(this.triggerval);
  // }
  //
  // onChangeTime(value) {
  //   console.log("This is the value:", this.triggertime);
  //   this.modalController.dismiss(this.triggertime);
  // }

  submitval() {
    this.modalController.dismiss({
      triggertime: this.triggertime,
      triggerval: this.triggerval,
    });
  }

}
