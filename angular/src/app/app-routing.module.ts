import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado.component';

const routes: Routes = [
  {path:'',redirectTo:'empleado',pathMatch:'full'},
  {path: 'empleado', component: EmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
