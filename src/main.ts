import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// Import des composants
import { HeroComponent } from './components/hero.component';
import { FeaturesComponent } from './components/features.component';
import { AdvantagesComponent } from './components/advantages.component';
import { BillingFocusComponent } from './components/billing-focus.component';
import { UseCasesComponent } from './components/use-cases.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { PricingComponent } from './components/pricing.component';
import { FaqComponent } from './components/faq.component';
import { FinalCtaComponent } from './components/final-cta.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    FeaturesComponent,
    AdvantagesComponent,
    BillingFocusComponent,
    UseCasesComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    FinalCtaComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen">
      <!-- Navigation fixe (optionnel) -->
      <nav class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div class="container-max p-3">
          <div class="flex items-center justify-between py-4">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-primary-950 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">NS</span>
              </div>
              <span class="text-xl font-bold text-primary-950">Noyostore</span>
            </div>
            <div class="hidden md:flex items-center space-x-8 text-sm">
              <a href="#fonctionnalites" class="text-gray-600 hover:text-primary-950 transition-colors">Fonctionnalités</a>
              <a href="#tarifs" class="text-gray-600 hover:text-primary-950 transition-colors">Tarifs</a>
              <a href="#faq" class="text-gray-600 hover:text-primary-950 transition-colors">FAQ</a>
              <button class="btn-primary text-sm py-2 px-4">
                Commencer
              </button>
            </div>
          </div>
        </div>
      </nav>

      <!-- Contenu principal avec marge pour la nav fixe -->
      <main class="pt-20">
        <app-hero />
        <app-features />
        <app-advantages />
        <app-billing-focus />
        <app-use-cases />
        <app-testimonials />
        <app-pricing />
        <app-faq />
        <app-final-cta />
      </main>

      <app-footer />
    </div>
  `
})
export class App {}

bootstrapApplication(App);