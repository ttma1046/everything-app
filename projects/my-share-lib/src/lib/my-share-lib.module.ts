import { NgModule } from '@angular/core';
import { MyShareLibComponent } from './my-share-lib.component';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  declarations: [MyShareLibComponent, WizardComponent],
  imports: [
  ],
  exports: [MyShareLibComponent, WizardComponent]
})
export class MyShareLibModule { }
