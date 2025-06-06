import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billing-focus',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-primary-50 section-padding">
      <div class="container-max">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Une facturation performante et adaptée à tous les besoins
            </h2>
            <div class="space-y-6">
              <div *ngFor="let feature of billingFeatures; trackBy: trackByIndex" class="flex items-start gap-4">
                <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-white text-sm">{{ feature.icon }}</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">{{ feature.title }}</h3>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <button class="btn-primary">
                Tester la facturation
              </button>
            </div>
          </div>
          
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div class="border-b pb-4 mb-4">
                <h3 class="text-lg font-semibold text-gray-900">Facture #2024001</h3>
                <p class="text-sm text-gray-500">Date: {{ currentDate }}</p>
              </div>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-gray-600">Produit Premium</span>
                  <span class="font-semibold">€ 299.00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Service installation</span>
                  <span class="font-semibold">€ 150.00</span>
                </div>
                <div class="border-t pt-3 mt-3">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Sous-total</span>
                    <span>€ 449.00</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">TVA (20%)</span>
                    <span>€ 89.80</span>
                  </div>
                  <div class="flex justify-between text-lg font-bold text-primary-950 pt-2 border-t">
                    <span>Total</span>
                    <span>€ 538.80</span>
                  </div>
                </div>
              </div>
              <div class="mt-6 bg-green-50 rounded-lg p-3">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-sm text-green-700">Paiement reçu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class BillingFocusComponent {
  currentDate = new Date().toLocaleDateString('fr-FR');
  
  billingFeatures = [
    {
      icon: '📑',
      title: 'Création rapide (moins de 30s)',
      description: 'Interface intuitive pour générer une facture complète en quelques clics.'
    },
    {
      icon: '📤',
      title: 'Envoi direct par e-mail',
      description: 'Transmission automatique à vos clients avec accusé de réception.'
    },
    {
      icon: '🧾',
      title: 'Export PDF personnalisé',
      description: 'Factures aux couleurs de votre entreprise avec logos et mentions légales.'
    },
    {
      icon: '📈',
      title: 'Suivi temps réel des paiements',
      description: 'Tableau de bord des encaissements et relances automatisées.'
    },
    {
      icon: '🧠',
      title: 'Intégration complète',
      description: 'Connexion automatique avec clients, stock, caisse et commandes.'
    }
  ];

  trackByIndex(index: number): number {
    return index;
  }
}