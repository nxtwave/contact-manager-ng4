import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {HomeRoutingModule, routedComponents} from './home.routing';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [routedComponents]
})
export class HomeModule {}

