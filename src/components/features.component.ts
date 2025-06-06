import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gray-50 section-padding" id="fonctionnalites">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Modules & Fonctionnalités principales
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Une suite complète d'outils pensés pour simplifier la gestion de votre entreprise
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let feature of features; trackBy: trackByIndex" class="feature-card animate-scale-in">
            <div class="icon-wrapper">
              <span class="text-2xl">{{ feature.icon }}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FeaturesComponent {
  features = [
    {
      icon: '🏪',
      title: 'Magasins',
      description: 'Gérez plusieurs points de vente avec une visibilité centralisée sur tous vos établissements.'
    },
    {
      icon: '👥',
      title: 'Clients',
      description: 'Fiches clients complètes, historique d\'achats, programmes de fidélité et segmentation avancée.'
    },
    {
      icon: '📄',
      title: 'Proformas',
      description: 'Création rapide de devis et proformas personnalisés avec conversion automatique en factures.'
    },
    {
      icon: '💳',
      title: 'Facturation',
      description: 'Génération de factures PDF, gestion TVA, suivi des paiements et personnalisations complètes.'
    },
    {
      icon: '🔁',
      title: 'Transfert de stock',
      description: 'Mouvements entre magasins avec suivi en temps réel et validation automatisée.'
    },
    {
      icon: '📦',
      title: 'Stock',
      description: 'Alertes de réapprovisionnement, historique des mouvements et inventaires simplifiés.'
    },
    {
      icon: '💰',
      title: 'Finances',
      description: 'Tableaux de bord financiers, analyse des recettes, marges et rentabilité par période.'
    },
    {
      icon: '💵',
      title: 'Caisse & Dépenses',
      description: 'Suivi précis des mouvements de caisse avec catégorisation des dépenses.'
    },
    {
      icon: '📑',
      title: 'Bons de commande',
      description: 'Création, suivi et gestion des statuts en temps réel de vos bons de commande.'
    },
    {
      icon: '🛒',
      title: 'Commandes clients',
      description: 'Suivi complet de la commande à la livraison avec notifications automatiques.'
    }
  ];

  trackByIndex(index: number): number {
    return index;
  }
}