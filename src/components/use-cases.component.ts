import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-use-cases',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-white section-padding">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pensée pour les commerçants, artisans et PME
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Une solution adaptée à chaque profil et chaque secteur d'activité
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div *ngFor="let useCase of useCases; trackBy: trackByIndex" class="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div class="text-center mb-6">
              <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-4xl">{{ useCase.icon }}</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">{{ useCase.profile }}</h3>
            </div>
            
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-gray-800 mb-2">Besoin principal</h4>
                <p class="text-gray-600 text-sm">{{ useCase.need }}</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-800 mb-2">Solution apportée</h4>
                <p class="text-gray-600 text-sm">{{ useCase.solution }}</p>
              </div>
            </div>
            
            <div class="mt-6">
              <button class="w-full bg-primary-50 hover:bg-primary-100 text-primary-950 font-medium py-2 px-4 rounded-lg transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class UseCasesComponent {
  useCases = [
    {
      icon: '🧑‍💼',
      profile: 'Gérants de magasins',
      need: 'Suivi des ventes, gestion du stock et pilotage des équipes sur plusieurs points de vente.',
      solution: 'Dashboard centralisé, alertes de stock automatiques et reporting détaillé par magasin.'
    },
    {
      icon: '👨‍🔧',
      profile: 'Artisans',
      need: 'Facturation rapide sur le terrain et gestion mobile de l\'activité en déplacement.',
      solution: 'Application mobile complète pour création de devis/factures et suivi client nomade.'
    },
    {
      icon: '🛍️',
      profile: 'Marchands',
      need: 'Centralisation multi-boutiques et synchronisation des données entre différents canaux.',
      solution: 'Gestion unifiée des points de vente physiques et en ligne avec synchronisation temps réel.'
    }
  ];

  trackByIndex(index: number): number {
    return index;
  }
}