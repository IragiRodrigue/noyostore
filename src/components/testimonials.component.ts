import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gray-50 section-padding">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p class="text-xl text-gray-600">
            Des témoignages authentiques de professionnels qui nous font confiance
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div *ngFor="let testimonial of testimonials; trackBy: trackByIndex" class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <div *ngFor="let star of [1,2,3,4,5]; trackBy: trackByIndex" class="text-yellow-400">
                ⭐
              </div>
            </div>
            <blockquote class="text-gray-700 mb-6 italic leading-relaxed">
              "{{ testimonial.quote }}"
            </blockquote>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span class="font-semibold text-primary-950">{{ testimonial.initial }}</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
                <div class="text-sm text-gray-500">{{ testimonial.company }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote: "J'ai réduit de 40% mes tâches manuelles grâce à cette solution. La facturation automatisée me fait gagner un temps précieux chaque jour.",
      name: "Marie Dubois",
      company: "Boutique Mode & Style",
      initial: "MD"
    },
    {
      quote: "Interface intuitive, fonctionnalités complètes et support réactif. Exactement ce qu'il nous fallait pour gérer nos 3 magasins.",
      name: "Pierre Martin",
      company: "Électronique Pro",
      initial: "PM"
    },
    {
      quote: "La synchronisation en temps réel entre nos points de vente est parfaite. Plus jamais de problèmes de stock ou de doublons.",
      name: "Sophie Laurent",
      company: "Pharmacie du Centre",
      initial: "SL"
    }
  ];

  trackByIndex(index: number): number {
    return index;
  }
}