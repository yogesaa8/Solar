import React from "react";
import { useLead } from "../context/LeadContext";

import {
  Home as HomeIcon,
  Building,
  Factory,
  CheckCircle2,
  ArrowRight,
  Sun,
  ShieldCheck,
} from "lucide-react";

export default function SolarSolutions() {
  const { openLeadModal } = useLead();

  const solutionsList = [
    {
      title: "Residential Solar Systems",
      propertyType: "residential",
      icon: HomeIcon,
      range: "3 kW to 25 kW",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
      whoFor:
        "Independent homeowners, luxury villas, housing societies & residential apartments.",
      howItWorks:
        "Solar PV panels convert sunlight into DC power. An on-grid inverter synchronizes solar generation with your home electrical system while eligible excess generation can be managed through net metering.",
      benefits: [
        "Reduce dependence on grid electricity",
        "Net metering synchronization support",
        "Battery backup integration option",
        "Long-term solar generation",
      ],
      iconClass: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Commercial Solar Systems",
      propertyType: "commercial",
      icon: Building,
      range: "25 kW to 250 kW",
      image:
        "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop",
      whoFor:
        "Corporate offices, schools, colleges, hospitals, hotels & retail complexes.",
      howItWorks:
        "Commercial systems are engineered around daytime energy demand, available rooftop space and building electrical infrastructure to reduce purchased grid electricity.",
      benefits: [
        "Reduce operating electricity costs",
        "Utilize otherwise unused rooftop space",
        "Remote monitoring & performance analytics",
        "Designed around commercial load profiles",
      ],
      iconClass: "bg-violet-50 text-violet-600",
    },
    {
      title: "Industrial Solar Systems",
      propertyType: "industrial",
      icon: Factory,
      range: "250 kW to 5 MW+",
      image:
        "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
      whoFor:
        "Manufacturing plants, textile factories, cold storages, warehouses & industrial parks.",
      howItWorks:
        "Large-capacity solar plants use high-density modules across industrial rooftops, sheds or ground-mounted areas and are engineered around facility electrical infrastructure.",
      benefits: [
        "Offset significant daytime machinery loads",
        "Large-scale renewable power generation",
        "HT integration and monitoring options",
        "Industrial-grade mounting structures",
      ],
      iconClass: "bg-emerald-50 text-emerald-600",
    },
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
          bg-radial-[at_50%_0%]
          from-white
          via-[#FFF8E8]
          to-[#F8FFD5]
          py-16
          sm:py-20
          lg:py-24
        "
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute
              left-1/2
              -top-70
              size-162.5
              -translate-x-1/2
              rounded-full
              bg-indigo-500/8
              blur-[120px]
            "
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
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
              <Sun className="size-4" />
              End-To-End Solar EPC
            </div>

            {/* Heading */}
            <h1
              className="
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-[-0.04em]
                text-blue-900
                sm:text-5xl
                lg:text-6xl
              "
            >
              Solar solutions for every{" "}
              <span className="text-indigo-600">energy need.</span>
            </h1>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-[#585858]
                sm:text-lg
                sm:leading-8
              "
            >
              From residential rooftops to large industrial installations,
              explore solar systems engineered around different energy demands,
              properties and project scales.
            </p>

            {/* Trust Points */}
            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-2
                text-xs
                font-medium
                text-[#585858]
                sm:text-sm
              "
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                Residential
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                Commercial
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                Industrial
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS
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
          {/* Section Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-indigo-600
              "
            >
              Solar Systems
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
              Choose the solution that fits your property.
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-sm
                leading-6
                text-[#585858]
                sm:text-base
              "
            >
              Each system is designed around electricity consumption, available
              installation area and project requirements.
            </p>
          </div>

          {/* Solution Cards */}
          <div className="space-y-8 lg:space-y-10">
            {solutionsList.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="
                    group
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-[#E2E2E2]
                    bg-[#fbfcff]
                    shadow-[0_10px_35px_rgba(16,24,40,0.04)]
                    transition-all
                    hover:border-indigo-200
                    hover:shadow-[0_24px_60px_rgba(16,24,40,0.08)]
                  "
                >
                  <div
                    className="
                      grid
                      grid-cols-1
                      items-stretch
                      lg:grid-cols-12
                    "
                  >
                    {/* =================================
                        IMAGE
                    ================================== */}
                    <div
                      className={`
                        relative
                        min-h-70
                        overflow-hidden
                        lg:col-span-5
                        lg:min-h-117.5
                        ${index % 2 === 1 ? "lg:order-2" : ""}
                      `}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          absolute
                          inset-0
                          size-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-[1.03]
                        "
                      />

                      {/* Overlay */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-linear-to-t
                          from-black/35
                          via-black/5
                          to-transparent
                        "
                      />

                      {/* Range Badge */}
                      <div
                        className="
                          absolute
                          left-4
                          top-4
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/60
                          bg-white/95
                          px-3.5
                          py-1.5
                          text-xs
                          font-semibold
                          text-[#4E4E4E]
                          shadow-sm
                          backdrop-blur-md
                          sm:left-6
                          sm:top-6
                        "
                      >
                        <Sun className="size-3.5 text-indigo-600" />

                        {item.range}
                      </div>

                      {/* Bottom Image Text */}
                      <div
                        className="
                          absolute
                          inset-x-4
                          bottom-4
                          sm:inset-x-6
                          sm:bottom-6
                        "
                      >
                        <div
                          className="
                            rounded-2xl
                            border
                            border-white/20
                            bg-blue-900/70
                            p-4
                            text-white
                            backdrop-blur-md
                          "
                        >
                          <p
                            className="
                              text-[10px]
                              font-semibold
                              uppercase
                              tracking-widest
                              text-indigo-200
                            "
                          >
                            Suitable For
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-white/90
                            "
                          >
                            {item.whoFor}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* =================================
                        CONTENT
                    ================================== */}
                    <div
                      className={`
                        flex
                        flex-col
                        justify-center
                        p-6
                        sm:p-8
                        lg:col-span-7
                        lg:p-10
                        xl:p-12
                        ${index % 2 === 1 ? "lg:order-1" : ""}
                      `}
                    >
                      {/* Icon / Label */}
                      <div className="flex items-center gap-3">
                        <div
                          className={`
                            flex
                            size-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            ${item.iconClass}
                          `}
                        >
                          <Icon className="size-5" />
                        </div>

                        <span
                          className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-widest
                            text-indigo-600
                          "
                        >
                          Solution {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Title */}
                      <h2
                        className="
                          mt-5
                          text-2xl
                          font-semibold
                          tracking-tight
                          text-blue-900
                          sm:text-3xl
                        "
                      >
                        {item.title}
                      </h2>

                      {/* How it works */}
                      <div
                        className="
                          mt-5
                          rounded-2xl
                          border
                          border-[#E6E6E6]
                          bg-white
                          p-4
                          sm:p-5
                        "
                      >
                        <p
                          className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-widest
                            text-[#9C9C9C]
                          "
                        >
                          How It Works
                        </p>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-6
                            text-[#585858]
                          "
                        >
                          {item.howItWorks}
                        </p>
                      </div>

                      {/* Benefits */}
                      <div className="mt-6">
                        <p
                          className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.08em]
                            text-[#4E4E4E]
                          "
                        >
                          Key Benefits
                        </p>

                        <ul
                          className="
                            mt-4
                            grid
                            grid-cols-1
                            gap-x-5
                            gap-y-3
                            sm:grid-cols-2
                          "
                        >
                          {item.benefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="
                                  flex
                                  items-start
                                  gap-2.5
                                  text-sm
                                  leading-5
                                  text-[#585858]
                                "
                            >
                              <CheckCircle2
                                className="
                                    mt-0.5
                                    size-4
                                    shrink-0
                                    text-indigo-500
                                  "
                              />

                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="mt-7">
                        <button
                          type="button"
                          onClick={() =>
                            openLeadModal({
                              propertyType: item.propertyType,
                            })
                          }
                          className="
                            group/button
                            inline-flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            bg-indigo-600
                            px-6
                            py-3.5
                            text-sm
                            font-semibold
                            text-white
                            shadow-sm
                            transition-all
                            hover:bg-indigo-700
                            hover:shadow-md
                            sm:w-auto
                          "
                        >
                          Get {item.title.split(" ")[0]} Assessment
                          <ArrowRight
                            className="
                              size-4
                              transition-transform
                              group-hover/button:translate-x-1
                            "
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGINEERING STRIP
      ====================================================== */}
      <section
        className="
          border-b
          border-[#E6E6E6]
          bg-[#FAFAFA]
          py-12
          sm:py-14
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-6
            px-4
            sm:grid-cols-3
            sm:px-6
            lg:px-8
          "
        >
          {/* Design */}
          <div className="text-center">
            <div
              className="
                mx-auto
                flex
                size-10
                items-center
                justify-center
                rounded-xl
                bg-indigo-50
                text-indigo-600
              "
            >
              <Sun className="size-5" />
            </div>

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-blue-900
              "
            >
              System Design
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#585858]
              "
            >
              Capacity and equipment selected around the property's energy
              needs.
            </p>
          </div>

          {/* Safety */}
          <div className="text-center">
            <div
              className="
                mx-auto
                flex
                size-10
                items-center
                justify-center
                rounded-xl
                bg-violet-50
                text-violet-600
              "
            >
              <ShieldCheck className="size-5" />
            </div>

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-blue-900
              "
            >
              Engineering & Safety
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#585858]
              "
            >
              Structural and electrical requirements are considered before
              installation.
            </p>
          </div>

          {/* Execution */}
          <div className="text-center">
            <div
              className="
                mx-auto
                flex
                size-10
                items-center
                justify-center
                rounded-xl
                bg-emerald-50
                text-emerald-600
              "
            >
              <CheckCircle2 className="size-5" />
            </div>

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-blue-900
              "
            >
              EPC Execution
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#585858]
              "
            >
              One coordinated process from assessment through commissioning.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section
        className="
          bg-white
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
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0">
              <div
                className="
                  absolute
                  -left-24
                  -top-24
                  size-64
                  rounded-full
                  bg-white/10
                  blur-3xl
                "
              />

              <div
                className="
                  absolute
                  -bottom-28
                  -right-20
                  size-72
                  rounded-full
                  bg-violet-300/20
                  blur-3xl
                "
              />
            </div>

            <div className="relative mx-auto max-w-3xl">
              <Sun className="mx-auto size-6 text-indigo-100" />

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-[-0.03em]
                  sm:text-4xl
                "
              >
                Not sure which solar solution you need?
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
                Share your electricity usage and property details. Our team can
                help estimate the suitable system category and capacity.
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
                <ArrowRight
                  className="
                    size-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
