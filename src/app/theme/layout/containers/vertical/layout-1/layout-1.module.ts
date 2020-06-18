import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentModule } from '../../../components/content/content.module';
import { HeaderModule } from '../../../components/header/header.module';
import { NavbarVerticalModule } from '../../../components/navbar/vertical/navbar-vertical.module';
import { QuickPanelModule } from '../../../components/quick-panel/quick-panel.module';
import { VerticalLayout1Component } from './layout-1.component';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VerticalLayout1Component],
  imports: [
    ContentModule,
    NavbarVerticalModule,
    HeaderModule,
    QuickPanelModule,
    CommonModule,
    FontAwesomeModule,
    NgxsFormPluginModule,
    ReactiveFormsModule,
  ],
  exports: [VerticalLayout1Component],
})
export class VerticalLayout1Module {}
