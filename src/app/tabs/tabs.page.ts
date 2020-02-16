import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TriggerFormComponent } from './trigger-form/trigger-form.component'
import { SymptomformComponent } from './symptomform/symptomform.component'
import { SleepFormComponent } from './sleep-form/sleep-form.component'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  fabOpen: boolean;

  constructor(public modalController: ModalController) {}

  open(){
    this.fabOpen = !this.fabOpen;
  }

  async openmod_one() {
    const modal = await this.modalController.create({
      component: TriggerFormComponent,
      componentProps: {
        onClose: this.onClose.bind(this)
      }
    });
    modal.onDidDismiss()
      .then((data) => {
        console.log(data['data']);
    });

    await modal.present();

  }

  async openmod_two() {
    const modal = await this.modalController.create({
      component: SleepFormComponent,
      componentProps: {
        onClose: this.onClose.bind(this)
      }
    });
    modal.onDidDismiss()
      .then((data) => {
        console.log(data['data']);
    });
    await modal.present();
  }

  onClose() {
    this.modalController.dismiss();
  }

  async openmod_three() {
    const modal = await this.modalController.create({
      component: SymptomformComponent,
      componentProps: {
        onClose: this.onClose.bind(this)
      }
    });

    modal.onDidDismiss()
      .then((data) => {
        console.log(data['data']);
    });

    await modal.present();
  }







}
