import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-sleep-form',
  templateUrl: './sleep-form.component.html',
  styleUrls: ['./sleep-form.component.scss'],
})
export class SleepFormComponent implements OnInit {
  @Input() onClose: () => void;
  sleeptime: string;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.onClose()
  }

  onChange(value) {
    console.log("This is the value:", this.sleeptime);
    this.modalController.dismiss(this.sleeptime);
  }



}

// // code to add submit button
//
// let currentModal = null;
//     const button = document.querySelector('ion-button');
//     button.addEventListener('click', createModal);
//
//     async function createModal() {
//       const modal = await modalController.create({
//         component: 'modal-content'
//       });
//
//       await modal.present();
//       currentModal = modal;
//     }
//
// function dismissModal() {
//   if (currentModal) {
//     currentModal.dismiss().then(() => { currentModal = null; });
//   }
// }
