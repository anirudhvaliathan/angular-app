import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';

const routes : Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'products', component: ProductPageComponent},
    {path: 'products/:category', component: ProductPageComponent},
    {path: 'product/:id', component: ProductDetailComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'register', component: RegistrationPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: '**', component: ErrorPageComponent}
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
