"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { presidentMessageData } from "./landing-database/presidentMessageData";

export function PresidentMessageSection() {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* President's Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={presidentMessageData.image}
            alt={`${presidentMessageData.name} Portrait`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* President's Message */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            President's Message
          </h2>
          
          <div className="prose dark:prose-invert max-w-prose space-y-4">
            <p>Dear KVS Alumni Community,</p>
            <p>
              As the President of the KVS Alumni Association, I am honored to lead an organization that represents the vibrant and diverse community of Kendriya Vidyalaya alumni. Our association is more than just a network; it's a platform for connection, growth, and giving back.
            </p>
            <p>
              We are committed to fostering meaningful connections among our alumni, supporting educational initiatives, and creating opportunities for professional and personal development. Through our various programs and events, we aim to strengthen the bonds that unite us and make a positive impact on society.
            </p>
            <p>
              Together, we can continue to uphold the values of excellence, integrity, and service that were instilled in us during our time at Kendriya Vidyalaya.
            </p>
            <p className="font-semibold">
              Warm regards,
              <br />
              {presidentMessageData.name}
              <br />
              KVS Alumni Association
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
