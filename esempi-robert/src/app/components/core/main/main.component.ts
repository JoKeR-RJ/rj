import { Component } from '@angular/core';
import { ParentComponent } from "../../features/parent/parent.component";

@Component({
  selector: 'app-main',
  imports: [ParentComponent],
  template:`
<app-parent></app-parent>
`
})
export class MainComponent {

}
