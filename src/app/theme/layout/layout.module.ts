import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { VerticalLayout1Module } from './containers/vertical/layout-1/layout-1.module';
import { LayoutFacade } from './layout.facade.service';
import { LayoutState } from './state/layout.state';

const LAYOUTS = [VerticalLayout1Module];

@NgModule({
  imports: [...LAYOUTS, NgxsModule.forFeature([LayoutState])],
  exports: [...LAYOUTS],
  providers: [LayoutFacade, LayoutState],
})
export class LayoutModule {}
