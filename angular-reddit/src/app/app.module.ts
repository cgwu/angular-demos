import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { DemoFormNgModelComponent } from './demo-form-ng-model/demo-form-ng-model.component';
import { UserDemoInjectorComponent } from './user-demo-injector/user-demo-injector.component';
import { UserService } from './services/user.service';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import {
  routes as childRoutes,
  ProductsModule
} from './products/products.module';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact'},

    // authentication demo
    { path: 'login', component: LoginComponent },
    {
      path: 'protected',
      component: ProtectedComponent,
      canActivate: [ LoggedInGuard ]
    },

  // nested
  {
    path: 'products',
    component: ProductsComponent,
    children: childRoutes
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    DemoFormNgModelComponent,
    UserDemoInjectorComponent,
    SimpleHttpComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, 
    RouterModule.forRoot(routes),  // 配置路由
    // added this for our child module
    ProductsModule
  ],
  providers: [
    // Default: PathLocationStrategy, which is what we call HTML5 routing.
    { provide: LocationStrategy, useClass: HashLocationStrategy },  // use hash#, e.g. `/#/home`
    { provide: APP_BASE_HREF, useValue: '/' }, // <==> <base href="/"> on index.html
    //UserService // 自定义服务类，放在此处，可以自动构造注入. <==>
    { provide: UserService, useClass: UserService },
    { provide: 'API_URL', useValue: 'http://my.api.com/v1' },

    // uncomment this for "hash-bang" routing
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
