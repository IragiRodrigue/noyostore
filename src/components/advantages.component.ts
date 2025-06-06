import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-white section-padding">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir notre solution ?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Des avantages concrets qui transforment votre façon de gérer votre entreprise
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let advantage of advantages; trackBy: trackByIndex" class="group">
            <div class="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <span class="text-3xl">{{ advantage.icon }}</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ advantage.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ advantage.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AdvantagesComponent {
  advantages = [
    {
      icon: '⚡',
      title: 'Gain de temps',
      description: 'Automatisez vos tâches répétitives et réduisez significativement la charge manuelle de gestion.'
    },
    {
      icon: '📊',
      title: 'Vision 360°',
      description: 'Un tableau de bord clair et complet sur tous vos indicateurs de performance clés.'
    },
    {
      icon: '🔒',
      title: 'Sécurité des données',
      description: 'Sauvegarde automatique régulière et confidentialité absolue de vos données sensibles.'
    },
    {
      icon: '🧩',
      title: 'Tout-en-un',
      description: 'Fini les outils éparpillés : toute votre gestion centralisée dans une seule plateforme.'
    },
    {
      icon: '📱',
      title: 'Accessible partout',
      description: 'Compatible sur ordinateur, tablette et smartphone avec synchronisation en temps réel.'
    },
    {
      icon: '🔄',
      title: 'Écosystème modulaire',
      description: 'Ajoutez ou désactivez des modules selon l\'évolution de vos besoins métier.'
    }
  ];

  trackByIndex(index: number): number {
    return index;
  }
}