import { Phone } from "lucide-react"
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

const AutoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    // Affiche le popup toutes les 2 minutes (120 000 ms)
    const interval = setInterval(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearInterval(interval); // Nettoie l'intervalle
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        popupRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const closePopup = () => {
    gsap.to(popupRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => setIsOpen(false),
    });
  };

  return (
    <>
      {isOpen && (
        <div  
             style={{ zIndex:'999 '}}
            className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div 
            ref={popupRef} 
            className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center"
          >
            <h2 style={{fontFamily:'Montserrat'}} className="text-xl font-bold mb-4">📢 Information</h2>
            <p className="mb-4">Pour toutes informations supplémentaires <br />
            veuillez nous laissez un message !! </p>

            <a
                href="https://wa.me/22962658165?text=Hey%20😊%2C%20comment%20tu%20vas%20%3F%20Je%20veux%20avoir%20des%20informations%20suppl%C3%A9mentaires%20sur%20la%20JEI."
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5" />
                <span>Envoyez mon message</span>
              </a>
            <Button style={{marginTop:'20px', fontFamily:'Montserrat'}} onClick={closePopup}>Fermer</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AutoPopup;
