import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
