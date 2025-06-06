import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gray-50 section-padding" id="faq">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p class="text-xl text-gray-600">
            Toutes les réponses aux questions que vous vous posez
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div *ngFor="let faq of faqs; let i = index; trackBy: trackByIndex" 
                 class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button (click)="toggleFaq(i)" 
                      class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                <h3 class="text-lg font-semibold text-gray-900 pr-4">{{ faq.question }}</h3>
                <svg class="w-6 h-6 text-gray-500 transition-transform duration-200"
                     [class.rotate-180]="faq.isOpen"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="transition-all duration-300 ease-in-out"
                   [class]="faq.isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'">
                <div class="px-8 pb-6">
                  <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FaqComponent {
  faqs = [
    {
      question: 'Cette solution est-elle adaptée à mon activité ?',
      answer: 'Notre solution convient à tous types d\'activités commerciales : retail, services, artisanat, e-commerce, etc. Elle s\'adapte aussi bien aux auto-entrepreneurs qu\'aux PME avec plusieurs établissements.',
      isOpen: false
    },
    {
      question: 'Est-ce que mes données sont sécurisées ?',
      answer: 'Absolument. Nous utilisons un chiffrement de niveau bancaire, des sauvegardes automatiques quotidiennes et nos serveurs sont hébergés en Europe avec certification ISO 27001.',
      isOpen: false
    },
    {
      question: 'Puis-je essayer gratuitement ?',
      answer: 'Oui ! Notre plan Starter est gratuit à vie avec les fonctionnalités essentielles. Vous pouvez également tester tous les plans premium pendant 14 jours sans engagement.',
      isOpen: false
    },
    {
      question: 'Est-ce que je peux gérer plusieurs magasins ?',
      answer: 'Parfaitement ! À partir du plan Professional, vous pouvez gérer un nombre illimité de points de vente avec synchronisation en temps réel et reporting consolidé.',
      isOpen: false
    },
    {
      question: 'Comment se passe la migration de mes données actuelles ?',
      answer: 'Nous proposons un service de migration gratuit pour importer vos données existantes (clients, produits, historique). Notre équipe vous accompagne pour une transition en douceur.',
      isOpen: false
    },
    {
      question: 'Puis-je personnaliser mes factures ?',
      answer: 'Oui, entièrement ! Ajoutez votre logo, vos couleurs, mentions légales personnalisées, et adaptez la mise en page selon votre charte graphique.',
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  trackByIndex(index: number): number {
    return index;
  }
}