import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sleep-form',
  templateUrl: './sleep-form.component.html',
  styleUrls: ['./sleep-form.component.scss'],
})
export class SleepFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

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
