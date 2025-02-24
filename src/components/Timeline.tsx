import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Trophy, Music, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import "../styles/css/Timeline.css";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef(null);
  const titleRef = useRef(null);
  const events = [
    {
      day: "Mercredi",
      date: "26 Février",
      events: [
        { time: "08:00", title: "Chasse aux trésors", description: "UAC", icon: Users },
        { time: "10:00", title: "Hors des bancs de l’IFRI", description: "Les clés du succès en entreprise - Iran 2", icon: Calendar },
        { time: "11:30", title: "Débat", description: "Mon partenaire doit-il avoir un(e) meilleur(e) ami(e) du sexe opposé ? - Iran 2", icon: Users },
        { time: "13:00", title: "Caravane", description: "UAC", icon: Users },
        { time: "14:00", title: "Basketball", description: "IFRI vs FSA - Terrain EPAC", icon: Trophy },
        { time: "15:30", title: "Football Inter-filières", description: "GL vs Sécurité Informatique - Terrain ENA", icon: Trophy },
        { time: "17:00", title: "Jeux, Musique et Danse", description: "IFRI", icon: Music },
      ],
    },
    {
      day: "Jeudi",
      date: "27 Février",
      events: [
        { time: "08:00", title: "Accueil et lancement officiel de la JEI", description: "Iran 2", icon: Calendar },
        { time: "08:30", title: "Petit Déjeuner", description: "Iran 2", icon: Users },
        { time: "09:00", title: "Présentation des projets finalistes du Hack4IFRI", description: "Iran 2", icon: Trophy },
        { time: "13:00", title: "Foire et animations", description: "Esplanade Idriss Deby", icon: Users },
        { time: "17:00", title: "Mini-Concert : Prestations, ambiance DJ", description: "Idriss Deby", icon: Music },
      ],
    },
    {
      day: "Vendredi",
      date: "28 Février",
      events: [
        { time: "08:00", title: "Appel et embarquement", description: "", icon: Users },
        { time: "09:00", title: "Départ à 8h", description: "Grand Popo", icon: MapPin },
        { time: "11:00", title: "Arrivée et installation", description: "", icon: Calendar },
        { 
          time: "12:00", 
          title: "Activités de détente et jeux collectif + Déjeuner", 
          description: "Ludo, Uno, Loup-Garou, Babyfoot, Cartes, Awalé, Dames, etc.", 
          icon: Users 
        },
        { time: "15:00", title: "Ambiance DJ", description: "Musique, danse et animations", icon: Music },
        { time: "18:00", title: "Rangement et retour au campus", description: "", icon: Users },
      ],
    },
  ];
  
  

  useEffect(() => {
    const cards = timelineRef.current.querySelectorAll(".car");
  
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%", 
            end: "top 50%",
            scrub: 0.5, 
          },
        }
      );
    });
  
    const letters = titleRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.1,
        stagger: 0.05,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  

  return (
    <section className="py-24 bg-white" id="programme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Programme
          </span>
          <h2
            ref={titleRef}
            style={{
              fontFamily: "Montserrat",
              marginTop: "30px",
              color: "#ff8c00",
            }}
            className="text-4xl font-bold mt-2 mb-4"
          >
            {/** Découpe le titre en lettres */}
            {Array.from("Trois jours d'activités intenses 😏 !!").map((char, index) => (
              <span
                key={index}
                className="letter inline-block"
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Un programme riche en événements pour tous les goûts 🤭
          </p>
        </div>

        <div ref={timelineRef} className="grid md:grid-cols-3 gap-8">
          {events.map((day) => (
            <Card
              style={{
                cursor: "pointer",
                border: "none",
                boxShadow: "0 2px 5px rgba(0,0,0,0.5)",
              }}
              key={day.day}
              className="car p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-6">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3
                style={{ fontFamily: "Montserrat" }}
                className="text-2xl font-bold mb-2"
              >
                {day.day}
              </h3>
              <p className="text-gray-600 mb-8">{day.date}</p>

              <div className="space-y-8">
                {day.events.map((event) => (
                  <div
                    key={event.title}
                    className="relative pl-8 border-l-2 border-gray-200 py-2"
                  >
                    <div className="absolute -left-2.5 top-3 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                      <event.icon className="h-3 w-3 text-white" />
                    </div>
                    <time
                      style={{ fontFamily: "Montserrat" }}
                      className="text-sm text-gray-800 block mb-1"
                    >
                      {event.time}
                    </time>
                    <h4
                      style={{ fontFamily: "Montserrat" }}
                      className="font-semibold text-lg mb-1"
                    >
                      {event.title}
                    </h4>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
