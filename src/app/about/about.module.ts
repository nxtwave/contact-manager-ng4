import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {AboutRoutingModule, routedComponents} from './about.routing';

@NgModule({
  imports: [SharedModule, AboutRoutingModule],
  declarations: [routedComponents]
})
export class AboutModule {}
