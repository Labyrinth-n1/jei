import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Calendar, Trophy, Music, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        { time: "08:00", title: "Chasse aux trésors", description: "", lieu: "UAC", icon: Users },
        { time: "10:00", title: "Panel", description: "Les clés du succès en entreprise", lieu: "Iran 2", icon: Calendar },
        { time: "11:30", title: "Débat", description: "Mon partenaire doit-il avoir un(e) meilleur(e) ami(e) du sexe opposé ?", lieu: "Iran 2", icon: Users },
        { time: "14:00", title: "Basketball", description: "IFRI vs FSA", lieu: "Terrain EPAC", icon: Trophy },
        { time: "15:30", title: "Football Inter-filières", description: "GL vs SI", lieu: "Terrain ENA", icon: Trophy },
        { time: "17:00", title: "Jeux, Musique et Danse", description: "", lieu: "IFRI", icon: Music },
      ],
    },
    {
      day: "Jeudi",
      date: "27 Février",
      events: [
        { time: "08:00", title: "Accueil et lancement officiel de la JEI", description: "", lieu: "Iran 2", icon: Calendar },
        { time: "08:30", title: "Petit Déjeuner", description: "", lieu: "Iran 2", icon: Users },
        { time: "09:00", title: "Présentation des projets finalistes du Hack4IFRI", description: "", lieu: "Iran 2", icon: Trophy },
        { time: "13:00", title: "Foire et animations", description: "", lieu: "Esplanade Idriss Deby", icon: Users },
        { time: "17:00", title: "Mini-Concert : Prestations, ambiance DJ", description: "", lieu: "Idriss Deby", icon: Music },
      ],
    },
    {
      day: "Vendredi",
      date: "28 Février",
      events: [
        { time: "08:00", title: "Appel et embarquement", description: "", lieu: "Campus", icon: Users },
        { time: "09:00", title: "Départ pour le village de Kirikou", description: "", lieu: "", icon: MapPin },
        { time: "11:00", title: "Arrivée et installation", description: "", lieu: "Grand Popo", icon: Calendar },
        { 
          time: "12:00", 
          title: "Activités de détente et jeux collectif + Déjeuner", 
          description: "Ludo, Uno, Loup-Garou, Babyfoot, Cartes, Awalé, Dames, etc.", 
          lieu: "", 
          icon: Users 
        },
        { time: "15:00", title: "Ambiance DJ", description: "Musique, danse et animations", lieu: "", icon: Music },
        { time: "18:00", title: "Rangement et retour au campus", description: "", lieu: "Campus", icon: Users },
      ],
    },
  ];

  useEffect(() => {
    const cards = timelineRef.current.querySelectorAll(".car");

    cards.forEach((card) => {
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
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Programme des Activités", 70, 15);
    
    doc.setLineWidth(0.5);
    doc.line(10, 20, 200, 20);

    let yPosition = 30;

    events.forEach((day) => {
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0, 51, 102);
      doc.text(`${day.day} - ${day.date}`, 20, yPosition);

      yPosition += 5;

      const tableData = day.events.map((event) => [
        event.time,
        event.title,
        event.description || "-",
        event.lieu || "-",
      ]);

      autoTable(doc, {
        startY: yPosition + 5,
        head: [["Heure", "Activité", "Description", "Lieu"]],
        body: tableData,
        theme: "grid",
        headStyles: { fillColor: [255, 102, 0] },
        styles: { fontSize: 10, cellPadding: 3 },
        columnStyles: { 0: { cellWidth: 20 }, 1: { cellWidth: 50 }, 2: { cellWidth: 80 }, 3: { cellWidth: 40 } },
      });

      yPosition = (doc as any).lastAutoTable.finalY + 10;
    });

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text("Généré automatiquement - IFRI Event", 70, doc.internal.pageSize.height - 10);

    doc.save("Récapitulatif_JEI.pdf");
  };

  return (
    <section className="py-24 bg-white" id="programme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Programme</span>
          <h2 ref={titleRef} className="text-3xl font-bold mt-2 mb-4 text-orange-500"  style={{fontFamily:'Montserrat'}}>
            Trois jours d'activités intenses 😏 !!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Un programme riche en événements pour tous les goûts ...
          </p>
        </div>

        <div ref={timelineRef} className="grid md:grid-cols-3 gap-8">
          {events.map((day) => (
            <Card key={day.day} className="car p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-1">
              <h3 className="text-2xl font-bold mb-2" style={{fontFamily:'Montserrat'}}>{day.day}</h3>
              <p className="text-gray-600 mb-1" style={{fontFamily:'Montserrat'}}>{day.date}</p>
              <div className="space-y-8">
                {day.events.map((event) => (
                  <div key={event.title} className="relative pl-8 border-l-2 border-gray-200 py-2" style={{fontFamily:'Montserrat'}}>
                    <div className="absolute -left-2.5 top-3 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                      <event.icon className="h-3 w-3 text-white" />
                    </div>
                    <time className="text-sm text-gray-800 block mb-1" style={{fontFamily:'Montserrat'}}>{event.time}</time>
                    <h4 className="font-semibold text-lg mb-1" style={{fontFamily:'Montserrat'}}>{event.title}</h4>
                    <p className="text-gray-700">{event.description}</p>
                    <p className="text-gray-800 text-sm">{event.lieu}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button style={{fontFamily:'Montserrat'}} onClick={generatePDF} className="bg-orange-500 text-white px-6 py-2 rounded">Télécharger le programme 📄</Button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
