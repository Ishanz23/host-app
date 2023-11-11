import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'app1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'remoteAppOne',
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
  {
    path: 'app2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'remoteAppTwo',
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
