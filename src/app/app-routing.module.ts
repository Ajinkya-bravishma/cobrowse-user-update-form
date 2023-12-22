import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CbFormComponent } from './cb-form/cb-form.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'mobile',
    component: CbFormComponent,
  },
  {
    path: 'address',
    component: CbFormComponent,
  },
  {
    path: 'email',
    component: CbFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
