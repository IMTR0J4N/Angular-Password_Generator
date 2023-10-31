import { NgModule } from '@angular/core';
import { PasswordDisplayComponent } from './password-display.component';
import { PasswordControlsComponent } from './password-controls.component';
import { PasswordSettingsComponent } from './password-settings.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordGeneratorService } from './password-generator.service';

@NgModule({
  declarations: [
    PasswordDisplayComponent,
    PasswordControlsComponent,
    PasswordSettingsComponent,
  ],
  imports: [CommonModule, FormsModule],
  providers: [PasswordGeneratorService],
  exports: [
    PasswordDisplayComponent,
    PasswordControlsComponent,
    PasswordSettingsComponent,
  ],
})
export class PasswordGeneratorModule {}
