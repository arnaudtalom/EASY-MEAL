import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'recetbyfilter/:name/:type',
    loadChildren: () => import('./recetbyfilter/recetbyfilter.module').then( m => m.RecetbyfilterPageModule)
  },
  {
    path: 'singlerecet/:id',
    loadChildren: () => import('./singlerecet/singlerecet.module').then( m => m.SinglerecetPageModule)
  },
  {
    path: 'result/:text',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
