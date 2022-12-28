import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TallyPage } from "./tally.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { TallyPageRoutingModule } from "./tally-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TallyPageRoutingModule,
  ],
  declarations: [TallyPage],
})
export class TallyPageModule {}
