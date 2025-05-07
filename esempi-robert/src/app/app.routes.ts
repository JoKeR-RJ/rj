import { Routes } from '@angular/router';
import { MainComponent } from './components/core/main/main.component';
import { ParentComponent } from './components/features/parent/parent.component';
import { ChildComponent } from './components/features/child/child.component';

export const routes: Routes = [
    {path:'', component:MainComponent , pathMatch:'full'}, 
    {path:'main', component:MainComponent },
    {path:'parent', component:ParentComponent },
    {path:'child', component:ChildComponent },

];
