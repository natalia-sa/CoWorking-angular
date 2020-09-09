import { Routes, RouterModule } from '@angular/router';
import { WorkstationComponent } from './workstation/workstation.component';

const routes: Routes = [
    //home
    {
        path: '',
        component: WorkstationComponent
    },
     
];
export const RoutingModule = RouterModule.forRoot(routes);