"use client";

import { HeroSection } from "@/components/pages/landing/HeroSection";
import { PresidentMessageSection } from "@/components/pages/landing/PresidentMessageSection";
import { ManagementCommitteeSection } from "@/components/pages/landing/ManagementCommiteeSection";
import BatchDetailsSection from "@/components/pages/landing/BatchDetailsSection";
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
			<PresidentMessageSection />
			<ManagementCommitteeSection />
			<BatchDetailsSection />
			<StatsSection />
			<TestimonialsSection />
			<CTASection />
		</motion.main>
	);
}
