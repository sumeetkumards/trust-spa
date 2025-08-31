import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'about-us', component: AboutUsComponent, data: { animation: 'AboutPage' } },
  { path: 'photos', component: PhotosComponent, data: { animation: 'PhotosPage' } },
  { path: 'achievements', component: AchievementsComponent, data: { animation: 'AchievementsPage' } },
  { path: 'contact-us', component: ContactUsComponent, data: { animation: 'ContactPage' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
