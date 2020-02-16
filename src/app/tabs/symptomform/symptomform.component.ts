import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-symptomform',
  templateUrl: './symptomform.component.html',
  styleUrls: ['./symptomform.component.scss'],
})
export class SymptomformComponent implements OnInit {
  @Input() onClose: () => void;
  symptomval: string;
  symptomtime: Date;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.onClose()
  }

  // onChangeSymptom(value) {
  //   console.log("This is the value:", this.symptomtime);
  //   this.modalController.dismiss(this.symptomtime);
  // }
  //
  // onChangeValue(value) {
  //   console.log("This is the value:", this.symptomval);
  //   this.modalController.dismiss(this.symptomval);
  // }

  submitdata() {
    this.modalController.dismiss({
      symptomTime: this.symptomtime,
      symptomval: this.symptomval,
    });
  }

}
