import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TriggerFormComponent } from './trigger-form/trigger-form.component'
import { SymptomformComponent } from './symptomform/symptomform.component'

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage, TriggerFormComponent, SymptomformComponent],
  entryComponents: [TriggerFormComponent, SymptomformComponent]
})
export class TabsPageModule {}
