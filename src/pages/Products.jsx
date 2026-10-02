import React from "react";
import { useLead } from "../context/LeadContext";
import { PRODUCTS_DATA } from "../data/solarData";

import {
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  PackageCheck,
  Sun,
  Wrench,
} from "lucide-react";

export default function Products() {
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
              <PackageCheck className="size-4" />
              Quality Components
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
              Solar technology selected for{" "}
              <span className="text-indigo-600">long-term performance.</span>
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
              We evaluate solar modules, inverters and system components around
              performance, reliability, compatibility and project requirements.
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
                Tier-1 Technology
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                Engineering Selected
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                Project Compatible
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
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
          <div
            className="
              mb-10
              flex
              flex-col
              gap-4
              sm:mb-12
              md:flex-row
              md:items-end
              md:justify-between
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
                Equipment Portfolio
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
                Components selected around your system.
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
                Review the equipment categories, technical specifications and
                selection criteria used across our solar projects.
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
              <Wrench className="size-5" />
            </div>
          </div>

          {/* Product Grid */}
          <div
            className="
              grid
              grid-cols-1
              gap-7
              md:grid-cols-2
              lg:gap-8
            "
          >
            {PRODUCTS_DATA.map((prod) => (
              <article
                key={prod.id}
                className="
                  group
                  flex
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#E2E2E2]
                  bg-white
                  shadow-[0_10px_35px_rgba(16,24,40,0.04)]
                  transition-all
                  hover:-translate-y-1
                  hover:border-indigo-200
                  hover:shadow-[0_22px_55px_rgba(16,24,40,0.09)]
                "
              >
                {/* =================================
                    IMAGE
                ================================== */}
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />

                  {/* image overlay */}
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

                  {/* Category */}
                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/60
                      bg-white/95
                      px-3
                      py-1.5
                      text-[11px]
                      font-semibold
                      text-[#4E4E4E]
                      shadow-sm
                      backdrop-blur-sm
                    "
                  >
                    <Sun className="size-3.5 text-indigo-600" />
                    {prod.category}
                  </div>
                </div>

                {/* =================================
                    CONTENT
                ================================== */}
                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    p-5
                    sm:p-7
                  "
                >
                  {/* Header */}
                  <div>
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-indigo-600
                      "
                    >
                      {prod.subtitle}
                    </p>

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
                      {prod.name}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-[#585858]
                      "
                    >
                      {prod.description}
                    </p>
                  </div>

                  {/* =================================
                      SPECS
                  ================================== */}
                  <div
                    className="
                      mt-6
                      overflow-hidden
                      rounded-2xl
                      border
                      border-[#E6E6E6]
                      bg-[#fbfcff]
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-[#E6E6E6]
                        bg-[#FAFAFA]
                        px-4
                        py-3
                      "
                    >
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="size-4 text-indigo-600" />

                        <span
                          className="
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-[0.08em]
                            text-[#4E4E4E]
                          "
                        >
                          Technical Specifications
                        </span>
                      </div>
                    </div>

                    <div className="divide-y divide-[#E6E6E6]">
                      {prod.specs.map((spec, index) => (
                        <div
                          key={`${spec.label}-${index}`}
                          className="
                            grid
                            grid-cols-[1fr_auto]
                            gap-4
                            px-4
                            py-3
                          "
                        >
                          <span
                            className="
                              text-xs
                              leading-5
                              text-[#585858]
                            "
                          >
                            {spec.label}
                          </span>

                          <span
                            className="
                              text-right
                              text-xs
                              font-semibold
                              leading-5
                              text-blue-900
                            "
                          >
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* =================================
                      SELECTION CRITERIA
                  ================================== */}
                  <div
                    className="
                      mt-5
                      rounded-2xl
                      border
                      border-indigo-100
                      bg-indigo-50/50
                      p-4
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-widest
                        text-indigo-600
                      "
                    >
                      Selection Criteria
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-xs
                        leading-5
                        text-[#4E4E4E]
                      "
                    >
                      {prod.selectionCriteria}
                    </p>
                  </div>

                  {/* =================================
                      CTA
                  ================================== */}
                  <div className="mt-auto pt-6">
                    <button
                      type="button"
                      onClick={() => openLeadModal()}
                      className="
                        group/button
                        flex
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
                      "
                    >
                      Get Equipment Recommendation
                      <ChevronRight
                        className="
                          size-4
                          transition-transform
                          group-hover/button:translate-x-1
                        "
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EQUIPMENT SELECTION BAND
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
              Compliance Review
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#585858]
              "
            >
              Equipment is checked against project and regulatory requirements.
            </p>
          </div>

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
              <Wrench className="size-5" />
            </div>

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-blue-900
              "
            >
              Engineering Compatibility
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#585858]
              "
            >
              Components are selected around system size, roof and electrical
              design.
            </p>
          </div>

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
              Selection considers reliability, serviceability and expected
              output.
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
              <PackageCheck className="mx-auto size-6 text-indigo-100" />

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-[-0.03em]
                  sm:text-4xl
                "
              >
                Not sure which solar equipment fits your project?
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
                Share your property type and electricity usage. Our team can
                recommend a suitable system configuration and equipment mix.
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
                Get Equipment Recommendation
                <ChevronRight
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
