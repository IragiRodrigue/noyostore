import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gradient-to-r from-primary-950 to-primary-800 text-white section-padding">
      <div class="container-max">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Gagnez en efficacité.<br>
            <span class="text-primary-300">Gérez tout en un seul endroit.</span>
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Rejoignez des milliers d'entrepreneurs qui ont simplifié leur gestion quotidienne 
            et boosté leur productivité avec notre solution tout-en-un.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button class="bg-white hover:bg-gray-100 text-primary-950 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-950">
              Commencez gratuitement
            </button>
            <button class="border-2 border-white hover:bg-white hover:text-primary-950 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-950">
              Demandez une démo
            </button>
          </div>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-300">
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
      </div>
    </section>
  `
})
export class FinalCtaComponent {}