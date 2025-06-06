import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-primary-950 text-white">
      <div class="container-max">
        <div class="py-16">
          <div class="grid md:grid-cols-4 gap-8">
            <div class="md:col-span-2">
              <h3 class="text-2xl font-bold mb-4">Noyostore</h3>
              <p class="text-gray-300 mb-6 leading-relaxed max-w-md">
                La solution de gestion complète qui simplifie votre quotidien d'entrepreneur 
                et booste la performance de votre entreprise.
              </p>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-primary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors">
                  <span class="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" class="w-10 h-10 bg-primary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors">
                  <span class="sr-only">Twitter</span>
                  🐦
                </a>
                <a href="#" class="w-10 h-10 bg-primary-800 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors">
                  <span class="sr-only">LinkedIn</span>
                  💼
                </a>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold mb-4">Solutions</h4>
              <ul class="space-y-3 text-gray-300">
                <li><a href="#" class="hover:text-white transition-colors">Facturation</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Gestion stock</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Multi-magasins</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Rapports</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-semibold mb-4">Support</h4>
              <ul class="space-y-3 text-gray-300">
                <li><a href="#" class="hover:text-white transition-colors">Centre d'aide</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Tutoriels</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="border-t border-primary-800 py-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-300 text-sm mb-4 md:mb-0">
              © {{ currentYear }} Gestion Pro. Tous droits réservés.
            </div>
            <div class="flex space-x-6 text-sm text-gray-300">
              <a href="#" class="hover:text-white transition-colors">Conditions d'utilisation</a>
              <a href="#" class="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" class="hover:text-white transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}