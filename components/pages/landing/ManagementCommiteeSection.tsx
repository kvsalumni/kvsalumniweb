"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const advisoryCommittee = [
  {
    name: "Dr. [Name]",
    role: "Chief Advisor",
    image: "/assets/images/committee/advisor-1.jpg",
    description: "Renowned educationist with extensive experience in academic leadership."
  },
  {
    name: "Mr. [Name]",
    role: "Senior Advisor",
    image: "/assets/images/committee/advisor-2.jpg",
    description: "Veteran administrator with deep insights into educational policy."
  }
];

const alumniAssociationTeam = [
  {
    name: "[Name]",
    role: "President",
    image: "/assets/images/committee/president.jpg",
    description: "Leads the strategic vision and initiatives of the alumni association."
  },
  {
    name: "[Name]",
    role: "Vice President",
    image: "/assets/images/committee/vice-president.jpg",
    description: "Supports overall management and coordinates key association activities."
  },
  {
    name: "[Name]",
    role: "Secretary",
    image: "/assets/images/committee/secretary.jpg",
    description: "Manages administrative operations and communication."
  },
  {
    name: "[Name]",
    role: "Treasurer",
    image: "/assets/images/committee/treasurer.jpg",
    description: "Oversees financial planning and resource management."
  }
];

export function ManagementCommitteeSection() {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
          Management Committee
        </h2>

        <Tabs defaultValue="alumni-team" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="advisory-committee">Advisory Committee</TabsTrigger>
            <TabsTrigger value="alumni-team">Alumni Team</TabsTrigger>
          </TabsList>
          
          <TabsContent value="advisory-committee">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {advisoryCommittee.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-0">
                    <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-sm mt-2">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="alumni-team">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {alumniAssociationTeam.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-0">
                    <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-sm mt-2">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}
