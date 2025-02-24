import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import logojei from '../assets/logo.png';
import '../styles/css/Footer.css';

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

          
        </div>

        <div className="border-t mt-16 pt-8 text-center text-gray-600">
          <p>© 2025 JEI - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
