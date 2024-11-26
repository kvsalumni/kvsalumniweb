"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { carouselImages } from "./landing-database/carouselData";

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="w-full bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[400px] sm:h-[500px] max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg bg-muted"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full h-full"
          >
            <CarouselContent className="-ml-1">
              {carouselImages.slice(0, 100).map((image, index) => (
                <CarouselItem key={index} className="pl-1 relative h-[400px] sm:h-[500px]">
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1920}
                      height={1080}
                      className="absolute inset-0 w-full h-full object-contain"
                      priority={index === 0}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {image.title && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{image.title}</h3>
                        {image.description && (
                          <p className="text-sm sm:text-base text-gray-200">{image.description}</p>
                        )}
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex left-2" />
            <CarouselNext className="hidden sm:flex right-2" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
  
}
