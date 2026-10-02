import React from "react";
import { useLead } from "../context/LeadContext";
import QuickCalculator from "../components/calculator/QuickCalculator";

import {
  Factory,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Wind,
  MonitorCog,
  Cable,
  Sun,
  Zap,
} from "lucide-react";

export default function IndustrialSolarPage() {
  const { openLeadModal } = useLead();

  const highlights = [
    {
      icon: Cable,
      title: "HT Sync & Zero Export",
      description:
        "Integration with industrial HT infrastructure, transformers and zero-export control systems for controlled grid interaction.",
      iconClass: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: Wind,
      title: "High-Wind Structures",
      description:
        "Engineered mounting structures designed for demanding rooftop conditions, wind loading and industrial environments.",
      iconClass: "bg-amber-50 text-amber-600",
    },
    {
      icon: MonitorCog,
      title: "SCADA Monitoring",
      description:
        "Plant monitoring with generation visibility, performance diagnostics and reporting for large solar assets.",
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
        {/* Decorative glow */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute
              left-1/2
              -top-75
              size-162.5
              -translate-x-1/2
              rounded-full
              bg-indigo-500/8
              blur-[120px]
            "
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-12
              lg:grid-cols-12
            "
          >
            {/* =================================
                LEFT
            ================================== */}
            <div className="lg:col-span-6">
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
                <Factory className="size-4" />
                Industrial Solar Plants
                <span className="text-[#9C9C9C]">250 kW – 5 MW+</span>
              </div>

              {/* Heading */}
              <h1
                className="
                  max-w-2xl
                  text-4xl
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-blue-900
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Megawatt-scale solar for{" "}
                <span className="text-indigo-600">
                  industrial energy demand.
                </span>
              </h1>

              {/* Description */}
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
                High-capacity solar systems for manufacturing units, warehouses,
                cold storage facilities, textile plants and industrial sheds
                with significant daytime electricity loads.
              </p>

              {/* Trust Points */}
              <div
                className="
                  mt-6
                  flex
                  flex-wrap
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
                  MW-Scale EPC
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-indigo-500" />
                  HT Synchronization
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-indigo-500" />
                  O&M Monitoring
                </span>
              </div>

              {/* CTA */}
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
                  onClick={() =>
                    openLeadModal({
                      propertyType: "industrial",
                    })
                  }
                  className="
                    group
                    inline-flex
                    w-full
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
                    sm:w-auto
                  "
                >
                  Get Industrial Assessment
                  <ArrowRight
                    className="
                      size-4
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </button>

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-2
                    text-xs
                    font-medium
                    text-[#585858]
                    sm:justify-start
                  "
                >
                  <ShieldCheck className="size-4 text-indigo-500" />
                  Engineering-led feasibility study
                </div>
              </div>
            </div>

            {/* =================================
                RIGHT IMAGE
            ================================== */}
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
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1400&auto=format&fit=crop"
                  alt="Industrial factory rooftop solar plant"
                  className="
                    h-80
                    w-full
                    object-cover
                    sm:h-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/25
                    via-transparent
                    to-transparent
                  "
                />

                {/* Image Card */}
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
                      flex
                      flex-col
                      gap-4
                      rounded-2xl
                      border
                      border-white/60
                      bg-white/95
                      p-4
                      shadow-lg
                      backdrop-blur-xl
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          size-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-indigo-50
                          text-indigo-600
                        "
                      >
                        <Sun className="size-5" />
                      </div>

                      <div>
                        <p
                          className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-widest
                            text-[#9C9C9C]
                          "
                        >
                          Industrial EPC
                        </p>

                        <p className="mt-0.5 text-sm font-semibold text-blue-900">
                          Engineered for high-demand facilities
                        </p>
                      </div>
                    </div>

                    <span
                      className="
                        w-fit
                        rounded-full
                        bg-indigo-50
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        text-indigo-600
                      "
                    >
                      250 kW – 5 MW+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIAL CAPABILITIES
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
          <div
            className="
              mx-auto
              mb-10
              max-w-2xl
              text-center
              sm:mb-12
            "
          >
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-indigo-600
              "
            >
              Industrial Engineering
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
              Built for demanding industrial operations.
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
              Engineering, electrical integration and monitoring designed for
              large-scale power generation.
            </p>
          </div>

          {/* Cards */}
          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-3
            "
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-[26px]
                    border
                    border-[#E2E2E2]
                    bg-[#fbfcff]
                    p-6
                    transition-all
                    hover:-translate-y-1
                    hover:border-indigo-200
                    hover:shadow-[0_18px_45px_rgba(16,24,40,0.07)]
                    sm:p-7
                  "
                >
                  <div
                    className={`
                      mb-5
                      flex
                      size-11
                      items-center
                      justify-center
                      rounded-xl
                      ${item.iconClass}
                    `}
                  >
                    <Icon className="size-5" />
                  </div>

                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-blue-900
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-[#585858]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIAL APPLICATIONS
      ====================================================== */}
      <section
        className="
          border-b
          border-[#E6E6E6]
          bg-[#fbfcff]
          py-12
          sm:py-14
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-2
            gap-x-6
            gap-y-8
            px-4
            sm:px-6
            md:grid-cols-4
            lg:px-8
          "
        >
          <div className="text-center">
            <div
              className="
                mx-auto
                mb-3
                flex
                size-10
                items-center
                justify-center
                rounded-xl
                bg-indigo-50
                text-indigo-600
              "
            >
              <Factory className="size-5" />
            </div>

            <p className="text-base font-semibold text-blue-900">
              Manufacturing
            </p>

            <p className="mt-1 text-xs text-[#585858]">
              Heavy daytime machinery load
            </p>
          </div>

          <div className="text-center">
            <div
              className="
                mx-auto
                mb-3
                flex
                size-10
                items-center
                justify-center
                rounded-xl
                bg-violet-50
                text-violet-600
              "
            >
              <Zap className="size-5" />
            </div>

            <p className="text-base font-semibold text-blue-900">
              Textile Plants
            </p>

            <p className="mt-1 text-xs text-[#585858]">
              Continuous production demand
            </p>
          </div>

          <div className="text-center">
            <div
              className="
                mx-auto
                mb-3
                flex
                size-10
                items-center
                justify-center
                rounded-xl
                bg-sky-50
                text-sky-600
              "
            >
              <Factory className="size-5" />
            </div>

            <p className="text-base font-semibold text-blue-900">Warehouses</p>

            <p className="mt-1 text-xs text-[#585858]">
              Large available shed area
            </p>
          </div>

          <div className="text-center">
            <div
              className="
                mx-auto
                mb-3
                flex
                size-10
                items-center
                justify-center
                rounded-xl
                bg-emerald-50
                text-emerald-600
              "
            >
              <Sun className="size-5" />
            </div>

            <p className="text-base font-semibold text-blue-900">
              Cold Storage
            </p>

            <p className="mt-1 text-xs text-[#585858]">
              High cooling consumption
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CALCULATOR
      ====================================================== */}
      <QuickCalculator />

      {/* =====================================================
          INDUSTRIAL CTA
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
            {/* Glow */}
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
              <Factory className="mx-auto size-6 text-indigo-100" />

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-[-0.03em]
                  sm:text-4xl
                "
              >
                Planning an industrial solar plant?
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-6
                  text-indigo-100
                  sm:text-base
                "
              >
                Get an engineering assessment covering recommended plant
                capacity, available roof area, electrical integration and
                projected financial savings.
              </p>

              <button
                type="button"
                onClick={() =>
                  openLeadModal({
                    propertyType: "industrial",
                  })
                }
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
                Get Industrial Assessment
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
