import React from "react";
import { useLead } from "../context/LeadContext";
import QuickCalculator from "../components/calculator/QuickCalculator";

import {
  Building,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Clock,
  Wrench,
  Sun,
} from "lucide-react";

export default function CommercialSolarPage() {
  const { openLeadModal } = useLead();

  const highlights = [
    {
      icon: TrendingUp,
      title: "40% Tax Shield",
      description:
        "Claim Section 32 Accelerated Depreciation in Year 1 on eligible solar equipment capital expenditure.",
      iconClass: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: Clock,
      title: "Rapid Payback",
      description:
        "Commercial electricity tariffs can help solar investments recover capital faster through ongoing energy savings.",
      iconClass: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: Wrench,
      title: "Roof-Safe Engineering",
      description:
        "Mounting systems can be engineered around the existing roof structure while protecting waterproofing requirements.",
      iconClass: "bg-violet-50 text-violet-600",
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
          bg-[radial-gradient(circle_at_top,#ffffff_0%,#FFF8E8_48%,#F8FFD5_78%,#ffffff_100%)]
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
              h-162.5
              w-237.5
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
            {/* Left */}
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
                <Building className="h-4 w-4" />
                Commercial Solar Systems
                <span className="text-[#9C9C9C]">25 kW – 250 kW</span>
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
                Turn commercial rooftops into{" "}
                <span className="text-indigo-600">energy assets.</span>
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
                Solar systems engineered for offices, schools, hospitals, hotels
                and commercial properties to reduce daytime electricity costs
                and improve long-term energy economics.
              </p>

              {/* Trust */}
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
                  <CheckCircle2 className="h-4 w-4 text-indigo-500" />
                  EPC Engineering
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500" />
                  Net Metering Support
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500" />
                  O&M Support
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
                      propertyType: "commercial",
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
                  Get Commercial Assessment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                  <ShieldCheck className="h-4 w-4 text-indigo-500" />
                  Site-specific engineering estimate
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
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1400&auto=format&fit=crop"
                  alt="Commercial solar building installation"
                  className="
                    h-80
                    w-full
                    object-cover
                    sm:h-105
                  "
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />

                {/* Info card */}
                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    sm:bottom-6
                    sm:left-6
                    sm:right-6
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
                        <p
                          className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-widest
                            text-[#9C9C9C]
                          "
                        >
                          Commercial EPC
                        </p>

                        <p className="mt-0.5 text-sm font-semibold text-blue-900">
                          Designed for daytime load reduction
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
                      25–250 kW
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMERCIAL BENEFITS
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
              Commercial Advantage
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
              Built around commercial energy economics.
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
              Reduce operating costs while making better use of existing
              commercial rooftop space.
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
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      ${item.iconClass}
                    `}
                  >
                    <Icon className="h-5 w-5" />
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
          COMMERCIAL USE CASES STRIP
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
            gap-6
            px-4
            text-center
            sm:px-6
            md:grid-cols-4
            lg:px-8
          "
        >
          <div>
            <p className="text-lg font-semibold text-blue-900">Offices</p>

            <p className="mt-1 text-xs text-[#585858]">
              Daytime load optimization
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold text-blue-900">Schools</p>

            <p className="mt-1 text-xs text-[#585858]">Large usable rooftops</p>
          </div>

          <div>
            <p className="text-lg font-semibold text-blue-900">Hospitals</p>

            <p className="mt-1 text-xs text-[#585858]">
              High continuous demand
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold text-blue-900">
              Hotels & Retail
            </p>

            <p className="mt-1 text-xs text-[#585858]">
              High commercial tariffs
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
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

              <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-3xl">
              <Building className="mx-auto h-6 w-6 text-indigo-100" />

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-[-0.03em]
                  sm:text-4xl
                "
              >
                Planning solar for your commercial property?
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
                Get an engineering-led assessment with recommended capacity,
                projected savings and installation requirements.
              </p>

              <button
                type="button"
                onClick={() =>
                  openLeadModal({
                    propertyType: "commercial",
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
                Get Commercial Assessment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
