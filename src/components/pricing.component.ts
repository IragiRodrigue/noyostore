import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-white section-padding" id="tarifs">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tarification simple et transparente
          </h2>
          <p class="text-xl text-gray-600">
            Choisissez le plan qui correspond à vos besoins, évolutif selon votre croissance
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div *ngFor="let plan of pricingPlans; trackBy: trackByIndex" 
               class="relative rounded-2xl border-2 p-8 transition-all duration-300 hover:scale-105"
               [class]="plan.popular ? 'border-primary-500 bg-primary-50' : 'border-gray-200 bg-white hover:border-primary-300'">
            
            <div *ngIf="plan.popular" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Le plus populaire
              </span>
            </div>
            
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
              <div class="text-4xl font-bold text-primary-950 mb-2">
                {{ plan.price }}
                <span class="text-lg font-normal text-gray-500">{{ plan.period }}</span>
              </div>
              <p class="text-gray-600">{{ plan.description }}</p>
            </div>
            
            <ul class="space-y-4 mb-8">
              <li *ngFor="let feature of plan.features; trackBy: trackByIndex" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
            
            <button [class]="plan.popular ? 'btn-primary w-full' : 'btn-secondary w-full'">
              {{ plan.cta }}
            </button>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <p class="text-gray-600 mb-4">
            Besoin d'une solution sur mesure pour votre entreprise ?
          </p>
          <button class="text-primary-600 hover:text-primary-800 font-semibold underline">
            Contactez-nous pour un devis personnalisé
          </button>
        </div>
      </div>
    </section>
  `
})
export class PricingComponent {
  pricingPlans = [
    {
      name: 'Starter',
      price: 'Gratuit',
      period: '',
      description: 'Parfait pour débuter et tester la solution',
      popular: false,
      cta: 'Commencer gratuitement',
      features: [
        '1 point de vente',
        'Jusqu\'à 100 clients',
        'Facturation de base',
        'Stock simple',
        'Support communautaire'
      ]
    },
    {
      name: 'Professional',
      price: '29€',
      period: '/mois',
      description: 'Idéal pour les PME en croissance',
      popular: true,
      cta: 'Choisir Professional',
      features: [
        'Points de vente illimités',
        'Clients illimités',
        'Facturation avancée + TVA',
        'Gestion stock complète',
        'Rapports détaillés',
        'Support prioritaire',
        'Sauvegarde automatique'
      ]
    },
    {
      name: 'Enterprise',
      price: '79€',
      period: '/mois',
      description: 'Solution complète pour grandes structures',
      popular: false,
      cta: 'Choisir Enterprise',
      features: [
        'Tout de Professional',
        'Multi-utilisateurs',
        'API et intégrations',
        'Rapports personnalisés',
        'Formation incluse',
        'Support dédié 24/7',
        'Personnalisation avancée'
      ]
    }
  ];

  trackByIndex(index: number): number {
    return index;
  }
}