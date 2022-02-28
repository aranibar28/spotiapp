# Angular 13 - SpotyApp

## Creación de Componentes

    ng g c components/home
    ng g c components/artist
    ng g c components/search
    ng g c components/shared/navbar

## Creación de Rutas

Creamos un archivo `app.routes.ts` en la carpeta `app` (Snippets: a-routes)

    import { Routes } from '@angular/router';
    import { HomeComponent } from './components/home/home.component';
    import { SearchComponent } from './components/search/search.component';

    export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    ];

En el archivo `app.modules.ts` importar ROUTES:

    ...
    import { RouterModule } from '@angular/router';
    import { ROUTES } from './app.routes';

    @NgModule({
        ...
    imports: [BrowserModule, RouterModule.forRoot(ROUTES, { useHash: true })],
        ...
    })

En el archivo `app.component.html` escribir las siguientes etiquetas:

    <app-navbar></app-navbar>
    <div class="container">
        <router-outlet></router-outlet>
    </div>

Finalmente, en el componente `navbar.componenet.html`, agregar la ruta de los links:

    <a class="nav-link" routerLinkActive="active" routerLink="home">Home</a>
    <a class="nav-link" routerLinkActive="active" routerLink="search">Search</a>
 
