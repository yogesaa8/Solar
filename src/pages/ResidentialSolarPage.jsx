import React from "react";
import { useLead } from "../context/LeadContext";
import QuickCalculator from "../components/calculator/QuickCalculator";

import {
  Home as HomeIcon,
  CheckCircle2,
  ShieldCheck,
  Sun,
  ArrowRight,
  Gauge,
  BatteryCharging,
  BadgeCheck,
  Zap,
} from "lucide-react";

export default function ResidentialSolarPage() {
  const { openLeadModal } = useLead();

  const benefits = [
    {
      icon: Gauge,
      title: "Net Metering Support",
      description:
        "Support for DISCOM documentation and net-metering coordination so eligible surplus solar generation can be adjusted against grid consumption.",
      iconClass: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: BatteryCharging,
      title: "Battery-Ready Design",
      description:
        "Residential systems can be designed for future hybrid or battery-storage integration depending on backup requirements.",
      iconClass: "bg-violet-50 text-violet-600",
    },
    {
      icon: BadgeCheck,
      title: "Long-Term Performance",
      description:
        "System design focuses on reliable modules, safe electrical components and long-term rooftop solar generation.",
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
        {/* Background glow */}
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
          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-12
              lg:grid-cols-12
            "
          >
            {/* LEFT */}
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
                <HomeIcon className="size-4" />

                Residential Solar Solutions

                <span className="text-[#9C9C9C]">
                  3 kW – 25 kW
                </span>
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
                Turn your rooftop into{" "}
                <span className="text-indigo-600">
                  home energy savings.
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
                Solar systems for independent homes, villas and residential
                properties designed around your electricity usage, available
                rooftop area and long-term energy goals.
              </p>

              {/* Trust points */}
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
                  Rooftop Assessment
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-indigo-500" />
                  Net Metering Support
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-indigo-500" />
                  Monitoring Ready
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
                      propertyType: "residential",
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
                  Get Residential Assessment

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
                  Site-specific solar estimate
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
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
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1400&auto=format&fit=crop"
                  alt="Residential rooftop solar installation"
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

                {/* Image Info Card */}
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
                          Residential EPC
                        </p>

                        <p className="mt-0.5 text-sm font-semibold text-blue-900">
                          Designed around your household usage
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
                      3–25 kW
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESIDENTIAL BENEFITS
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
              Residential Advantage
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
              Solar designed around your home.
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
              From rooftop assessment to grid synchronization, the system is
              planned around practical residential requirements.
            </p>
          </div>

          {/* Benefit Cards */}
          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-3
            "
          >
            {benefits.map((item) => {
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
          HOME USE-CASES / TRUST STRIP
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
              <HomeIcon className="size-5" />
            </div>

            <p className="text-base font-semibold text-blue-900">
              Villas
            </p>

            <p className="mt-1 text-xs text-[#585858]">
              Independent rooftops
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
              <Sun className="size-5" />
            </div>

            <p className="text-base font-semibold text-blue-900">
              Row Houses
            </p>

            <p className="mt-1 text-xs text-[#585858]">
              Optimized roof usage
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
              <Zap className="size-5" />
            </div>

            <p className="text-base font-semibold text-blue-900">
              Housing Societies
            </p>

            <p className="mt-1 text-xs text-[#585858]">
              Common-area consumption
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
                bg-amber-50
                text-amber-600
              "
            >
              <BatteryCharging className="size-5" />
            </div>

            <p className="text-base font-semibold text-blue-900">
              Hybrid Homes
            </p>

            <p className="mt-1 text-xs text-[#585858]">
              Solar + backup option
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CALCULATOR
      ====================================================== */}
      <QuickCalculator />

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
            {/* Decorative glows */}
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
              <HomeIcon className="mx-auto size-6 text-indigo-100" />

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-[-0.03em]
                  sm:text-4xl
                "
              >
                Ready to evaluate solar for your home?
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
                Get a property-specific estimate covering recommended capacity,
                rooftop requirement and projected electricity savings.
              </p>

              <button
                type="button"
                onClick={() =>
                  openLeadModal({
                    propertyType: "residential",
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
                Get Residential Assessment

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
