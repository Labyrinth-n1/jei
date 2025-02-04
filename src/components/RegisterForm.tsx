import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import "../styles/css/RegisterForm.css";

const RegisterForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // Une seule option à la fois

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Inscription réussie !",
      description: `Vous avez choisi : ${selectedOption || "aucune option sélectionnée"}. Vous recevrez un email de confirmation.`,
    });

    setLoading(false);
  };

  const handleCheckboxChange = (option: string) => {
    setSelectedOption(option); // Une seule sélection à la fois
  };

  const getTotalPrice = () => {
    if (selectedOption === "Concert") return 2500;
    if (selectedOption === "Concert + Excursion") return 7000;
    return 2500;
  };

  return (
    <section className="py-24 bg-gray-50" id="inscription">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Inscription</span>
          <h2
            style={{ fontFamily: "Montserrat", color: "#ff8c00" }}
            className="text-4xl font-bold mt-2 mb-4"
          >
            Rejoignez l'aventure ✈️✨!!
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Réservez votre place pour trois jours d'innovation et de festivités
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card
            style={{ boxShadow: "0 2px 5px rgba(0,0,0,0.5)" }}
            className="p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="inputGroup space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" className="h-12" required />
              </div>

              <div className="inputGroup space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" className="h-12" required />
              </div>

              <div className="inputGroup space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" type="tel" className="h-12" required />
              </div>

              <div className="inputGroup space-y-4">
                <p className="font-medium">Options d'inscription</p>
                <div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="concert"
                      checked={selectedOption === "Concert"}
                      onChange={() => handleCheckboxChange("Concert")}
                      className="h-5 w-5"
                    />
                    <Label htmlFor="concert">Concert (2500 FCFA)</Label>
                  </div>
                  <div className="flex items-center space-x-3 mt-4">
                    <input
                      type="checkbox"
                      id="excursion"
                      checked={selectedOption === "Concert + Excursion"}
                      onChange={() => handleCheckboxChange("Concert + Excursion")}
                      className="h-5 w-5"
                    />
                    <Label htmlFor="excursion">Concert + Excursion (7000 FCFA)</Label>
                  </div>
                </div>
              </div>

              <Button
                style={{ fontFamily: "Montserrat", fontSize: "13px" }}
                type="submit"
                className="w-full h-12 text-lg"
                disabled={loading}
              >
                {loading
                  ? "Inscription en cours..."
                  : `Payer ${getTotalPrice()} FCFA`}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
