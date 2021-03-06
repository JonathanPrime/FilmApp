import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const routes: Routes = [
  { path: 'buscar', component: BuscarComponent  },
  { path: 'buscar/:texto', component: BuscarComponent  },
  { path: 'home', component: HomeComponent  },
  { path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
