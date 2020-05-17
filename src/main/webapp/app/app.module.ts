import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { VisionmongoSharedModule } from 'app/shared/shared.module';
import { VisionmongoCoreModule } from 'app/core/core.module';
import { VisionmongoAppRoutingModule } from './app-routing.module';
import { VisionmongoHomeModule } from './home/home.module';
import { VisionmongoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    VisionmongoSharedModule,
    VisionmongoCoreModule,
    VisionmongoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    VisionmongoEntityModule,
    VisionmongoAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class VisionmongoAppModule {}
