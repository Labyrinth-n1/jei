import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import logojei from '../assets/logo.png';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3
              style={{fontFamily:'Montserrat'}} 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              <img 
                style={{width:'80px',height:'80px'}}
                src={logojei} alt="" />
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Les Journées de l'Étudiant en Informatique, un événement unique pour les passionnés de technologie.
            </p>
          </div>

          <div>
            <h3 
               style={{fontFamily:'Montserrat'}} 
               className="font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">

              <a
                href="https://wa.me/22962658165?text=Hey%20😊%2C%20comment%20tu%20vas%20%3F%20Je%20veux%20avoir%20des%20informations%20suppl%C3%A9mentaires%20sur%20la%20JEI."
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5" />
                <span>+229 62 65 81 65</span>
              </a>
              <a
                href="mailto:contact@jei.com"
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contact@jei.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 
              style={{fontFamily:'Montserrat'}} 
               className="font-bold text-lg mb-6">Suivez-nous</h3>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-16 pt-8 text-center text-gray-600">
          <p>© 2025 JEI - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
