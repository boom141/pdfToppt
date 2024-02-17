import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { UploaderComponent } from './uploader/uploader.component';
import { FormComponent } from './form/form.component';


@NgModule({
    declarations: [NavbarComponent, FooterComponent, UploaderComponent, FormComponent],
    exports:[NavbarComponent, UploaderComponent, FormComponent],
    imports: [
        CommonModule,
        RouterModule,
    ],
})
export class SharedModule {
   // your code here... 
}