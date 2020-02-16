import { Component } from '@angular/core';
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
      component: TriggerFormComponent
    });
    await modal.present();
  }

  async openmod_two() {
    const modal = await this.modalController.create({
      component: SleepFormComponent
    });

    await modal.present();
  }

  async openmod_three() {
    const modal = await this.modalController.create({
      component: SymptomformComponent
    });

    await modal.present();
  }

}
