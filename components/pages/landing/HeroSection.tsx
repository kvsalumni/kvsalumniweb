"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/ui/shimmer-button";
import Autoplay from "embla-carousel-autoplay";
import { carouselImages } from "./carouselData";

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full overflow-hidden bg-dot-pattern min-h-[calc(100vh-4rem)]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />

      {/* Blur Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/20 dark:bg-[#00ff99]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 py-12 lg:py-20 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <div className="inline-flex items-center space-x-2 bg-muted px-3 py-1 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 dark:bg-[#00ff99] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500 dark:bg-[#00ff99]"></span>
              </span>
              <span className="text-sm font-medium">
                Join our growing community
              </span>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                Your{" "}
                <span className="text-yellow-500 dark:text-[#00ff99]">
                  Alumni
                </span>{" "}
                Network,
                <br className="hidden sm:block" />
                Your Global Community
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
                Connect with fellow graduates, access exclusive opportunities,
                and be part of a thriving professional network.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ShimmerButton className="shadow-2xl w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2 text-base text-white font-medium">
                  Get Started
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </ShimmerButton>
              <Button
                size="lg"
                variant="outline"
                className="text-base w-full sm:w-auto">
                Explore Events
              </Button>
            </div>
          </motion.div>

          {/* Right Carousel Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative order-1 lg:order-2 h-[300px] sm:h-[400px] lg:h-[600px]"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
              className="w-full h-full"
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                      
                      {/* Image Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                        <p className="text-sm text-gray-200">{image.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
