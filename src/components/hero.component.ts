import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-primary-950 text-white section-padding">
      <div class="container-max">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              La solution de gestion <span class="text-primary-300">complète</span> pour piloter votre activité
            </h1>
            <p class="text-xl text-gray-300 mb-8 leading-relaxed">
              Simplifiez la gestion de vos ventes, stocks, finances, clients et plus, à partir d'un seul outil centralisé.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="btn-primary">
                Commencer maintenant
              </button>
              <button class="btn-secondary">
                Voir la démo
              </button>
            </div>
            <div class="mt-8 flex items-center gap-6 text-sm text-gray-300">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Sans engagement
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Accès immédiat
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Support inclus
              </div>
            </div>
          </div>
          <div class="animate-slide-up">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div class="bg-white rounded-lg p-6 shadow-2xl">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-gray-800">Dashboard</h3>
                  <div class="flex gap-2">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-600">Ventes du jour</span>
                    <span class="font-semibold text-primary-950">€ 2,340</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-600">Commandes</span>
                    <span class="font-semibold text-primary-950">47</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-600">Stock critique</span>
                    <span class="font-semibold text-red-600">3 articles</span>
                  </div>
                  <div class="bg-primary-50 rounded-lg p-3 mt-4">
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                      <span class="text-sm text-primary-700">Synchronisation en temps réel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}