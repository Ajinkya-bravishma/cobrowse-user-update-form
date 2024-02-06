import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CbFormComponent } from './cb-form/cb-form.component';
import { AppComponent } from './app.component';
import { CourceRegComponent } from './cource-reg/cource-reg.component';

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
  {
    path: 'course',
    component: CourceRegComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
