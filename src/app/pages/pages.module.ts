import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule,Routes } from "@angular/router";

import { LandingComponent } from "./landing/landing.component";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from "../shared/components/shared.module";
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'editor', component: EditorComponent },
  ];
  
@NgModule({
    declarations: [LandingComponent, ContactUsComponent, EditorComponent],
    exports: [LandingComponent, ContactUsComponent, EditorComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class PagesModule {
    // your code here...
}



