"use client";

import { HeroSection } from "@/components/pages/landing/HeroSection";
import BatchDetailsSection from "@/components/pages/landing/BatchDetailsSection";
import FinanceSection from "@/components/pages/landing/FinanceSection";
import MembershipSection from "@/components/pages/landing/MembershipSection";
import NoticesSection from "@/components/pages/landing/NoticesSection";
import MediaSection from "@/components/pages/landing/MediaSection";
import { CTASection } from "@/components/pages/landing/CTASection";
import RegistrationSection from "@/components/pages/landing/RegistrationSection";
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
			<BatchDetailsSection />
			<FinanceSection />
			<MembershipSection />
			<NoticesSection />
			<MediaSection />
			<RegistrationSection />
			<CTASection />
		</motion.main>
	);
}
