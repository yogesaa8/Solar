import React from "react";
import { useLead } from "../context/LeadContext";
import { SERVICES_DATA } from "../data/solarData";

import {
  Wrench,
  CheckCircle2,
  ArrowRight,
  ClipboardCheck,
  ShieldCheck,
  Sun,
} from "lucide-react";

export default function Services() {
  const { openLeadModal } = useLead();

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
              <Wrench className="size-4" />
              Complete EPC Scope
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
              Everything you need to{" "}
              <span className="text-indigo-600">
                go solar.
              </span>
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
              From initial site assessment and system design to installation,
              grid synchronization and long-term support, we manage the complete
              solar EPC journey.
            </p>

            {/* Trust row */}
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
                Engineering
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                Procurement
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                Installation
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                O&M Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EPC SERVICES
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
              mb-10
              flex
              flex-col
              gap-4
              sm:mb-12
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-indigo-600
                "
              >
                EPC Process
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
                A structured path from assessment to operation.
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-[#585858]
                  sm:text-base
                "
              >
                Each stage is handled as part of one coordinated solar
                engineering and execution process.
              </p>
            </div>

            <div
              className="
                flex
                size-11
                items-center
                justify-center
                rounded-xl
                bg-indigo-50
                text-indigo-600
              "
            >
              <ClipboardCheck className="size-5" />
            </div>
          </div>

          {/* Service Cards */}
          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              lg:gap-8
            "
          >
            {SERVICES_DATA.map((service, index) => (
              <article
                key={`${service.step}-${index}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#E2E2E2]
                  bg-[#fbfcff]
                  p-6
                  transition-all
                  hover:-translate-y-1
                  hover:border-indigo-200
                  hover:shadow-[0_20px_50px_rgba(16,24,40,0.07)]
                  sm:p-8
                "
              >
                {/* Decorative glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    size-44
                    rounded-full
                    bg-indigo-500/5
                    blur-3xl
                  "
                />

                <div className="relative">
                  {/* Top */}
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-5
                    "
                  >
                    <div
                      className="
                        flex
                        size-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-indigo-50
                        text-indigo-600
                      "
                    >
                      <Wrench className="size-5" />
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-[#E2E2E2]
                        bg-white
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-[#585858]
                      "
                    >
                      EPC Stage {index + 1}
                    </span>
                  </div>

                  {/* Step */}
                  <p
                    className="
                      mt-7
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-indigo-600
                    "
                  >
                    Step {service.step}
                  </p>

                  {/* Title */}
                  <h3
                    className="
                      mt-2
                      text-xl
                      font-semibold
                      tracking-[-0.02em]
                      text-blue-900
                      sm:text-2xl
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-[#585858]
                    "
                  >
                    {service.fullDesc}
                  </p>

                  {/* Footer */}
                  <div
                    className="
                      mt-7
                      flex
                      items-center
                      gap-2
                      border-t
                      border-[#E6E6E6]
                      pt-5
                      text-xs
                      font-semibold
                      text-[#4E4E4E]
                    "
                  >
                    <CheckCircle2 className="size-4 text-indigo-600" />

                    Professional EPC Execution
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS / TRUST STRIP
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
          {/* Engineering */}
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
              <Wrench className="size-5" />
            </div>

            <p className="mt-3 text-sm font-semibold text-blue-900">
              Engineering First
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#585858]
              "
            >
              System sizing and layouts are based on site and energy
              requirements.
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

            <p className="mt-3 text-sm font-semibold text-blue-900">
              Safety & Compliance
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#585858]
              "
            >
              Electrical and structural requirements are considered throughout
              execution.
            </p>
          </div>

          {/* Performance */}
          <div className="text-center">
            <div
              className="
                mx-auto
                flex
                size-10
                items-center
                justify-center
                rounded-xl
                bg-amber-50
                text-amber-600
              "
            >
              <Sun className="size-5" />
            </div>

            <p className="mt-3 text-sm font-semibold text-blue-900">
              Long-Term Performance
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#585858]
              "
            >
              Equipment and installation decisions focus on reliable solar
              generation.
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
            {/* Background glows */}
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
              <Wrench className="mx-auto size-6 text-indigo-100" />

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-[-0.03em]
                  sm:text-4xl
                "
              >
                Ready to start your solar project?
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
                Start with a site assessment and let our team evaluate your
                electricity usage, rooftop feasibility and suitable system size.
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
