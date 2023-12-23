import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AntinewComponent } from './Antivirus/antinew/antinew.component';
import { AntiRenewalComponent } from './Antivirus/anti-renewal/anti-renewal.component';
import { LaptopNewComponent } from './Laptops/laptop-new/laptop-new.component';
import { LaptopRefurbisedListComponent } from './Laptops/laptop-refurbised-list/laptop-refurbised-list.component';

import { DesktopNewComponent } from './Desktop/desktop-new/desktop-new.component';
import { DesktopRefurbisedListComponent } from './Desktop/desktop-refurbised-list/desktop-refurbised-list.component';

import { TitleBreadcrumbComponent } from './title-breadcrumb/title-breadcrumb.component';
import { LoginComponent } from './Auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Auth/register/register.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { ScrollService } from './services/scroll.service';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { RamComponent } from './products/ram/ram.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AntinewComponent,
    AntiRenewalComponent,
    LaptopNewComponent,
    LaptopRefurbisedListComponent,
    DesktopNewComponent,
    DesktopRefurbisedListComponent,

    TitleBreadcrumbComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    TermsComponent,
    AdminhomeComponent,
    AdminLoginComponent,
    AdminHeaderComponent,
    RamComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent],
})
export class AppModule {}
