import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { DemoFormNgModelComponent } from './demo-form-ng-model/demo-form-ng-model.component';
import { UserDemoInjectorComponent } from './user-demo-injector/user-demo-injector.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    DemoFormNgModelComponent,
    UserDemoInjectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    //UserService // 自定义服务类，放在此处，可以自动构造注入. <==>
    {provide: UserService, useClass: UserService},
    {provide: 'API_URL', useValue: 'http://my.api.com/v1'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
