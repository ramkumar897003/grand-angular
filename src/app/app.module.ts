import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { GotoTopComponent } from './goto-top/goto-top.component';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { BlogComponent } from './blog/blog.component';
import { EventsGuidelineComponent } from './events-guideline/events-guideline.component';
import { PricingComponent } from './pricing/pricing.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { EventSchedulesComponent } from './event-schedules/event-schedules.component';
import { CounterComponent } from './counter/counter.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CountdownComponent } from './countdown/countdown.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    GotoTopComponent,
    CopyRightComponent,
    FooterComponent,
    ContactComponent,
    MapComponent,
    NewsletterComponent,
    BlogComponent,
    EventsGuidelineComponent,
    PricingComponent,
    SponsorsComponent,
    FaqComponent,
    GalleryComponent,
    TeamComponent,
    EventSchedulesComponent,
    CounterComponent,
    AboutComponent,
    ServicesComponent,
    CountdownComponent,
    HeaderComponent,
    CarouselComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
