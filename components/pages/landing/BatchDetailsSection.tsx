import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import Image from "next/image";
import { batchCoordinators } from "./landing-database/batchCoordinatorsData";
import { batchPdfs } from "./landing-database/batchPdfsData";

const BatchDetailsSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Batch Details</h2>
      
      <Tabs defaultValue="coordinators" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
          <TabsTrigger value="coordinators">Batch Coordinators</TabsTrigger>
          <TabsTrigger value="pdfs">Batch PDFs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="coordinators">
          <div className="grid md:grid-cols-3 gap-6">
            {batchCoordinators.map((coordinator) => (
              <Card key={coordinator.batch}>
                <CardHeader className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-4">
                    <Image 
                      src={coordinator.image} 
                      alt={`${coordinator.name} - Batch ${coordinator.batch}`}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-center">{coordinator.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div>Batch: {coordinator.batch}</div>
                  <div>{coordinator.contact}</div>
                  {coordinator.email && <div>Email: {coordinator.email}</div>}
                  {coordinator.phone && <div>Phone: {coordinator.phone}</div>}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="pdfs">
          <div className="grid md:grid-cols-3 gap-6">
            {batchPdfs.map((pdf) => (
              <Card key={pdf.batch}>
                <CardHeader>
                  <CardTitle>{pdf.batch}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <span>{pdf.title}</span>
                  <a 
                    href={pdf.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:bg-gray-100 p-2 rounded-full"
                  >
                    <Download className="h-6 w-6 text-primary" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default BatchDetailsSection;
