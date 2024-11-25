"use client";

import { HeroSection } from "@/components/pages/landing/HeroSection";
import { FeaturesSection } from "@/components/pages/landing/FeaturesSection";
import { StatsSection } from "@/components/pages/landing/StatsSection";
import { TestimonialsSection } from "@/components/pages/landing/TestimonialsSection";
import { CTASection } from "@/components/pages/landing/CTASection";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<motion.main
			initial="initial"
			animate="animate"
			variants={{
				initial: { opacity: 0 },
				animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
			}}>
			<HeroSection />
			<FeaturesSection />
			<StatsSection />
			<TestimonialsSection />
			<CTASection />
		</motion.main>
	);
}
