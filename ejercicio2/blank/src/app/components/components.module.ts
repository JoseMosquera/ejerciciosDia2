import { NgModule } from "@angular/core";
import { SandboxComponent } from "./sandbox/sandbox.component";
import { FruitcardComponent } from "./fruitcard/fruitcard.component";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SandboxComponent,
        FruitcardComponent
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        SandboxComponent,
        FruitcardComponent
    ]
})

export class ComponetnsModule{

}