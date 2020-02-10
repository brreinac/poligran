import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Components
import { HomeComponent } from './components/home/home.component';
import { ShipsComponent } from './components/ships/ships.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { CharactersComponent } from './components/characters/characters.component';
import { RacesComponent } from './components/races/races.component';

//All routes from sistem

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ships', component: ShipsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'races', component: RacesComponent },
  { path: '**', component: HomeComponent }
];

//Exporting route modules
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
