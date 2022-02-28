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

## Peticiones HTTP

En el archivo `app.module.ts` importar el HttpClientModule
...
import { HttpClientModule } from '@angular/common/http';

    @NgModule({
        ...
    imports: [
        ...
        HttpClientModule]
    ...
    })

En el archivo `home.components.ts` realizar la peticion

    import { HttpClient } from '@angular/common/http';

    export class HomeComponent {

    countries: any[] = [];
        constructor(private http: HttpClient) {
        this.http
            .get('https://restcountries.com/v3.1/lang/spa')
            .subscribe((data: any) => {
                this.countries = data;
                console.log(data);
            });
        }
    }

En el archivo `home.components.html`

    <li *ngFor="let countrie of countries">{{ countrie.name.common }}</li>

## Peticiones HTTP con Servicios

Creamos un modulo de servicios

    ng g s services/spotify

Importamos el HttpClient y HttpHeaders en `spotify.serice.ts`

    import { HttpClient, HttpHeaders } from '@angular/common/http';

Luego creamos una clase para hacer la peticion GET despues del constructor

    getNewReleases() {
        const headers = new HttpHeaders({
        Authorization:
            'Bearer BQDJOEHLKxSdss4vCX0eBJXLmV1lCMLhhYyRMikD_5GhZ5Y4NBrkk8VIxBNp__MBBjwQAbTAoxV5kc2zBG0',
    });
    this.http
        .get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers,})
        .subscribe((data) => {
            console.log(data);
        });
    }
