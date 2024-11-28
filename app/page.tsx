"use client";

import { HeroSection } from "@/components/pages/landing/HeroSection";
import { PresidentMessageSection } from "@/components/pages/landing/PresidentMessageSection";
import { ManagementCommitteeSection } from "@/components/pages/landing/ManagementCommiteeSection";
import BatchDetailsSection from "@/components/pages/landing/BatchDetailsSection";
import FinanceSection from "@/components/pages/landing/FinanceSection";
import MembershipSection from "@/components/pages/landing/MembershipSection";
import { TestimonialsSection } from "@/components/pages/landing/TestimonialsSection";
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
			<PresidentMessageSection />
			<ManagementCommitteeSection />
			<BatchDetailsSection />
			<FinanceSection />
			<MembershipSection />
			<TestimonialsSection />
			<NoticesSection />
			<MediaSection />
			<RegistrationSection />
			<CTASection />
		</motion.main>
	);
}
