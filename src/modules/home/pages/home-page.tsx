"use client";
import { memo } from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

import SectionHero from "../components/section-hero";
import SectionIntro from "../components/section-intro";
import SectionnTeam from "../components/section-team";
import SectionRoadmap from "../components/section-roadmap";
import SectionContactUs from "../components/section-contact-us";
import SectionPartner from "../components/section-partner";
import SectionFeature from "../components/section-feature";
import SectionWhyUs from "../components/section-why-us";
import SectionBenefits from "../components/section-benefits";
import SectionTokensale from "../components/section-tokensale";
import SectionFaq from "../components/section-faq";
import SectionNewsletter from "../components/section-newsletter";

export default memo(function HomePage() {
  return (
    <>
      <SectionHero />
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="flipOutY"
        animateOnce={true}
        className="w-full"
      >
        <SectionIntro />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="flipOutY"
        animateOnce={true}
        className="w-full"
      >
        <SectionWhyUs />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="flipOutY"
        animateOnce={true}
        className="w-full"
      >
        <SectionFeature />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="flipOutY"
        animateOnce={true}
        className="w-full"
      >
        <SectionTokensale />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="flipOutY"
        animateOnce={true}
        className="w-full"
      >
        <SectionBenefits />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="flipOutY"
        animateOnce={true}
        className="w-full"
      >
        <SectionRoadmap />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="flipOutY"
        animateOnce={true}
        className="w-full"
      >
        <SectionnTeam />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="flipOutY"
        animateOnce={true}
        className="w-full"
      ></ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="flipOutY"
        animateOnce={true}
        className="w-full"
      >
        <SectionFaq />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="flipOutY"
        animateOnce={true}
        className="w-full"
      >
        <SectionPartner />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="flipOutY"
        animateOnce={true}
        className="w-full"
      >
        <SectionContactUs />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="flipOutY"
        animateOnce={true}
        className="w-full"
      >
        <SectionNewsletter />
      </ScrollAnimation>
    </>
  );
});
