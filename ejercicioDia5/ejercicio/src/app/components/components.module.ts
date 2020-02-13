import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppLoadingFeedbackComponent } from "./app-loading-feedback/app-loading-feedback.component";

@NgModule({
    declarations:[
        AppLoadingFeedbackComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        AppLoadingFeedbackComponent
    ]
})

export class ComponentsModule { }