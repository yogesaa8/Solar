import React from "react";
import { useLead } from "../context/LeadContext";

import {
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Users,
  Sparkles,
  Sun,
  ChevronRight,
  Building2,
  Cpu,
  HardHat,
} from "lucide-react";
import aboutUsHeroImage from "../assets/aj1.webp";

export default function AboutUs() {
  const { openLeadModal } = useLead();

  const engineeringSteps = [
    {
      icon: Sparkles,
      title: "3D Shadow Profiling",
      description:
        "PVSyst sunpath simulations to position panels away from chimneys, trees and parapets.",
    },
    {
      icon: HardHat,
      title: "Civil & Load Testing",
      description:
        "Structural roof load calculation and chemical anchors rated for high-wind conditions.",
    },
    {
      icon: ShieldCheck,
      title: "Electrical Safety",
      description:
        "Surge protection devices, earthing systems and fire-retardant DC cabling.",
    },
  ];

  const certifications = [
    "MNRE Approved Supplier",
    "ALMM Compliant Panels",
    "BIS Certified Equipment",
    "ISO 9001:2015 Quality Certified",
    "DISCOM Net-Metering Vendor",
  ];

  return (
    <main className="bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        className="
          relative
          overflow-hidden
          border-b
          border-[#E6E6E6]
          bg-[radial-gradient(circle_at_top,#ffffff_0%,#FFF8E8_48%,#F8FFD5_78%,#ffffff_100%)]
          py-16
          sm:py-20
          lg:py-24
        "
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 -top-62.5 h-150 w-225 -translate-x-1/2 rounded-full bg-indigo-500/8 blur-[120px]" />
        </div>

        <div
          className="
            relative
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            items-center
            gap-12
            px-4
            sm:px-6
            lg:grid-cols-12
            lg:px-8
          "
        >
          {/* Left */}
          <div className="lg:col-span-6">
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-indigo-200
                bg-white/80
                px-3.5
                py-1.5
                text-xs
                font-semibold
                text-indigo-600
                shadow-sm
                backdrop-blur-sm
              "
            >
              <ShieldCheck className="h-4 w-4" />
              Credibility & Engineering Excellence
            </div>

            <h1
              className="
                max-w-xl
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-[-0.04em]
                text-blue-900
                sm:text-5xl
                lg:text-6xl
              "
            >
              Building a cleaner
              <span className="text-indigo-600"> energy future.</span>
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-[#585858]
                sm:text-lg
                sm:leading-8
              "
            >
              AJ Solar Solutions is an engineering-first renewable energy
              organization delivering grid-synchronized and off-grid rooftop
              solar systems across India.
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              <button
                type="button"
                onClick={() => openLeadModal()}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-indigo-600
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  hover:bg-indigo-700
                  hover:shadow-md
                "
              >
                Get Free Solar Assessment
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-2 px-2 text-xs font-medium text-[#585858]">
                <CheckCircle2 className="h-4 w-4 text-indigo-500" />
                Engineering-led EPC approach
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#E2E2E2]
                bg-white
                shadow-[0_30px_70px_rgba(16,24,40,0.12)]
              "
            >
              <img
                src={aboutUsHeroImage}
                alt="Engineers inspecting rooftop solar panel installation"
                className="h-80 w-full object-cover sm:h-80"
              />

              <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/60
                    bg-white/95
                    p-4
                    shadow-lg
                    backdrop-blur-xl
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-indigo-50
                      text-indigo-600
                    "
                  >
                    <Sun className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9C9C9C]">
                      Solar EPC Engineering
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-blue-900">
                      Designed around safety, performance and long-term output
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ====================================================== */}
      <section
        className="
          border-b
          border-[#E6E6E6]
          bg-white
          py-16
          sm:py-20
          lg:py-24
        "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-indigo-600
              "
            >
              Why We Exist
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-semibold
                tracking-[-0.03em]
                text-blue-900
                sm:text-4xl
              "
            >
              Engineering with a long-term purpose.
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#585858] sm:text-base">
              Our focus is reliable solar infrastructure, lower electricity
              costs and technically sound execution.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Mission */}
            <div
              className="
                group
                rounded-[28px]
                border
                border-[#E2E2E2]
                bg-[#fbfcff]
                p-6
                transition-all
                hover:border-indigo-200
                hover:shadow-[0_16px_40px_rgba(16,24,40,0.06)]
                sm:p-8
              "
            >
              <div
                className="
                  mb-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-indigo-50
                  text-indigo-600
                "
              >
                <Users className="h-6 w-6" />
              </div>

              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-600">
                01 / Mission
              </span>

              <h3 className="mt-2 text-2xl font-semibold text-blue-900">
                Our Mission
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#585858]">
                To empower Indian homeowners, commercial businesses and
                industrial manufacturing plants with reliable solar
                installations that reduce electricity expenses while adhering to
                strong EPC safety standards.
              </p>
            </div>

            {/* Vision */}
            <div
              className="
                group
                rounded-[28px]
                border
                border-[#E2E2E2]
                bg-[#fbfcff]
                p-6
                transition-all
                hover:border-violet-200
                hover:shadow-[0_16px_40px_rgba(16,24,40,0.06)]
                sm:p-8
              "
            >
              <div
                className="
                  mb-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-violet-50
                  text-violet-600
                "
              >
                <Sparkles className="h-6 w-6" />
              </div>

              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-violet-600">
                02 / Vision
              </span>

              <h3 className="mt-2 text-2xl font-semibold text-blue-900">
                Our Vision
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#585858]">
                To become a trusted and technically competent solar EPC
                contractor in North India, recognized for engineering integrity,
                long-term O&M support and measurable carbon reduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGINEERING APPROACH
      ====================================================== */}
      <section
        className="
          border-b
          border-[#E6E6E6]
          bg-[#FAFAFA]
          py-16
          sm:py-20
          lg:py-24
        "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              bg-blue-900
              p-6
              text-white
              shadow-[0_24px_70px_rgba(16,24,40,0.14)]
              sm:p-10
              lg:p-12
            "
          >
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-[90px]" />

              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[90px]" />
            </div>

            <div className="relative">
              <div className="max-w-3xl">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-300">
                  <Wrench className="h-4 w-4" />
                  Systematic EPC Standard
                </div>

                <h2
                  className="
                    text-3xl
                    font-semibold
                    tracking-[-0.03em]
                    text-white
                    sm:text-4xl
                  "
                >
                  Our Engineering Approach
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  We do not guess solar capacity or roof layouts. Every project
                  undergoes an engineering review before procurement and
                  installation.
                </p>
              </div>

              <div
                className="
                  mt-10
                  grid
                  grid-cols-1
                  gap-5
                  border-t
                  border-white/10
                  pt-8
                  sm:grid-cols-3
                "
              >
                {engineeringSteps.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/4
                        p-5
                        backdrop-blur-sm
                        transition-all
                        hover:bg-white/[0.07]
                      "
                    >
                      <div
                        className="
                          mb-5
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-indigo-500/15
                          text-indigo-300
                        "
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                        Step 0{index + 1}
                      </p>

                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CERTIFICATIONS
      ====================================================== */}
      <section
        className="
          border-b
          border-[#E6E6E6]
          bg-white
          py-16
          sm:py-20
          lg:py-24
        "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="
              rounded-[28px]
              border
              border-[#E2E2E2]
              bg-[#f8f9ff]
              p-6
              sm:p-8
              lg:p-10
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4
                md:flex-row
                md:items-end
                md:justify-between
              "
            >
              <div className="max-w-xl">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-600">
                  <ShieldCheck className="h-4 w-4" />
                  Compliance
                </div>

                <h2 className="text-2xl font-semibold tracking-tight text-blue-900 sm:text-3xl">
                  Certifications & Compliance
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#585858]">
                  Standards and certifications supporting equipment quality,
                  installation compliance and project execution.
                </p>
              </div>

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-indigo-600
                  text-white
                "
              >
                <Building2 className="h-5 w-5" />
              </div>
            </div>

            <div
              className="
                mt-8
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
                lg:grid-cols-5
              "
            >
              {certifications.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[#E2E2E2]
                    bg-white
                    px-4
                    py-4
                    shadow-sm
                  "
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-600" />

                  <span className="text-xs font-semibold leading-5 text-[#4E4E4E]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section
        className="
          bg-[#FAFAFA]
          py-16
          sm:py-20
          lg:py-24
        "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              bg-linear-to-r
              from-indigo-600
              via-[#DD9900]
              to-violet-600
              px-5
              py-12
              text-center
              text-white
              shadow-[0_24px_70px_rgba(221,147,0,0.20)]
              sm:px-10
              sm:py-14
              lg:px-16
              lg:py-16
            "
          >
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

              <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                <Sun className="h-5 w-5" />
              </div>

              <h2
                className="
                  text-3xl
                  font-semibold
                  tracking-[-0.03em]
                  sm:text-4xl
                "
              >
                Let's build your solar system.
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-indigo-100
                  sm:text-base
                "
              >
                Get in touch with our solar engineering team for an initial
                shade audit and feasibility calculation.
              </p>

              <button
                type="button"
                onClick={() => openLeadModal()}
                className="
                  group
                  mt-8
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-white
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-indigo-600
                  shadow-sm
                  transition-all
                  hover:bg-indigo-50
                  sm:w-auto
                "
              >
                Get Free Solar Assessment
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
