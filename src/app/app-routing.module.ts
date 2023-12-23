import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AntinewComponent } from './Antivirus/antinew/antinew.component';
import { AntiRenewalComponent } from './Antivirus/anti-renewal/anti-renewal.component';
import { LaptopNewComponent } from './Laptops/laptop-new/laptop-new.component';
import { DesktopNewComponent } from './Desktop/desktop-new/desktop-new.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { LaptopRefurbisedListComponent } from './Laptops/laptop-refurbised-list/laptop-refurbised-list.component';
import { DesktopRefurbisedListComponent } from './Desktop/desktop-refurbised-list/desktop-refurbised-list.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { RamComponent } from './products/ram/ram.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'antinew', component: AntinewComponent },
  { path: 'antiRenewal', component: AntiRenewalComponent },
  { path: 'laptop', component: LaptopNewComponent },
  { path: 'desktopnew', component: DesktopNewComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'reflaptop', component: LaptopRefurbisedListComponent },
  { path: 'refdesktop', component: DesktopRefurbisedListComponent },
  { path: 'admin', component: AdminhomeComponent },
  { path: 'aheader', component: AdminHeaderComponent },
  { path: 'ram', component: RamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
