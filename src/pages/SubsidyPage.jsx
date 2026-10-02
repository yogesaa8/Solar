import React, { useState } from "react";
import { useLead } from "../context/LeadContext";

import {
  calculatePMSuryaGharSubsidy,
  STATE_SUBSIDY_DATA,
} from "../config/solarConfig";

import { motion } from "framer-motion";

import {
  Award,
  CheckCircle2,
  IndianRupee,
  ShieldCheck,
  Building2,
  FileText,
  ArrowRight,
  Zap,
  Landmark,
  WalletCards,
  Sun,
  Calculator,
} from "lucide-react";

export default function SubsidyPage() {
  const { openLeadModal } = useLead();

  const [capacity, setCapacity] = useState("3");

  const capKW = parseFloat(capacity) || 3;

  const centralSubsidy = calculatePMSuryaGharSubsidy(capKW, "residential");

  const approxCost = Math.round(capKW * 52000);

  const netCost = Math.max(0, approxCost - centralSubsidy);

  const workflowSteps = [
    {
      step: "01",
      title: "Portal Registration",
      desc: "Register on the National Portal using your DISCOM consumer details and required identity information.",
    },
    {
      step: "02",
      title: "Feasibility Approval",
      desc: "The relevant DISCOM reviews technical feasibility and the proposed rooftop solar connection.",
    },
    {
      step: "03",
      title: "Solar Installation",
      desc: "The rooftop solar system is installed with applicable approved equipment and electrical protections.",
    },
    {
      step: "04",
      title: "Inspection & Net Meter",
      desc: "The installation is inspected and the metering or commissioning process is completed.",
    },
    {
      step: "05",
      title: "Subsidy Processing",
      desc: "After successful commissioning and approval, the eligible subsidy is processed to the beneficiary account.",
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
              -top-75
              size-170
              -translate-x-1/2
              rounded-full
              bg-indigo-500/8
              blur-[120px]
            "
          />
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
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="lg:col-span-7"
          >
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
              <Award className="size-4" />
              Government Solar Subsidy Guide
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-3xl
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-[-0.04em]
                text-blue-900
                sm:text-5xl
                lg:text-6xl
              "
            >
              PM Surya Ghar rooftop{" "}
              <span className="text-indigo-600">solar subsidy.</span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-[#585858]
                sm:text-lg
                sm:leading-8
              "
            >
              Understand the available residential rooftop solar subsidy,
              estimate your eligible amount and review the application workflow.
            </p>

            {/* Highlights */}
            <div
              className="
                mt-7
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
                Residential Rooftop Solar
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                DISCOM Process
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                Direct Benefit Process
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8">
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
                Check Subsidy Eligibility
                <ArrowRight
                  className="
                    size-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="lg:col-span-5"
          >
            <div
              className="
                rounded-[28px]
                border
                border-[#E2E2E2]
                bg-white/90
                p-5
                shadow-[0_24px_60px_rgba(16,24,40,0.08)]
                backdrop-blur-sm
                sm:p-6
              "
            >
              <div className="mb-5">
                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-widest
                    text-indigo-600
                  "
                >
                  Subsidy Snapshot
                </p>

                <h2
                  className="
                    mt-1
                    text-xl
                    font-semibold
                    text-blue-900
                  "
                >
                  Residential rooftop benefit
                </h2>
              </div>

              <div className="space-y-3">
                {/* 1-2 kW */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    rounded-2xl
                    border
                    border-[#E6E6E6]
                    bg-[#FAFAFA]
                    p-4
                  "
                >
                  <div>
                    <p className="text-xs text-[#585858]">1–2 kW System</p>

                    <p className="mt-1 text-sm font-semibold text-blue-900">
                      ₹30,000 – ₹60,000
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      size-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-indigo-50
                      text-indigo-600
                    "
                  >
                    <IndianRupee className="size-4" />
                  </div>
                </div>

                {/* 3 kW */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    rounded-2xl
                    border
                    border-emerald-100
                    bg-emerald-50/60
                    p-4
                  "
                >
                  <div>
                    <p className="text-xs text-emerald-700">3 kW+</p>

                    <p className="mt-1 text-sm font-semibold text-emerald-700">
                      ₹78,000 Maximum
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      size-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-emerald-100
                      text-emerald-700
                    "
                  >
                    <WalletCards className="size-4" />
                  </div>
                </div>

                {/* Scheme */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    rounded-2xl
                    border
                    border-[#E6E6E6]
                    bg-[#FAFAFA]
                    p-4
                  "
                >
                  <div>
                    <p className="text-xs text-[#585858]">Scheme Outlay</p>

                    <p className="mt-1 text-sm font-semibold text-blue-900">
                      ₹75,000 Crore
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      size-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-violet-50
                      text-violet-600
                    "
                  >
                    <Landmark className="size-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SUBSIDY CALCULATOR
      ====================================================== */}
      <section
        className="
          border-b
          border-[#E6E6E6]
          bg-[#f6f7ff]
          py-16
          sm:py-20
          lg:py-24
        "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              overflow-hidden
              rounded-[30px]
              border
              border-[#E2E2E2]
              bg-white
              shadow-[0_24px_70px_rgba(16,24,40,0.07)]
            "
          >
            {/* Header */}
            <div
              className="
                flex
                flex-col
                gap-4
                border-b
                border-[#E6E6E6]
                p-5
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:p-7
              "
            >
              <div>
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    text-indigo-600
                  "
                >
                  <Calculator className="size-4" />
                  PM Surya Ghar Calculator
                </div>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-blue-900
                    sm:text-3xl
                  "
                >
                  Estimate your rooftop subsidy.
                </h2>
              </div>

              <span
                className="
                  w-fit
                  rounded-full
                  border
                  border-indigo-100
                  bg-indigo-50
                  px-3
                  py-1.5
                  text-[11px]
                  font-semibold
                  text-indigo-700
                "
              >
                Residential Calculation
              </span>
            </div>

            {/* Content */}
            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-12
              "
            >
              {/* LEFT */}
              <div
                className="
                  border-b
                  border-[#E6E6E6]
                  p-5
                  sm:p-7
                  lg:col-span-5
                  lg:border-b-0
                  lg:border-r
                "
              >
                <label
                  className="
                    block
                    text-xs
                    font-semibold
                    text-[#4E4E4E]
                  "
                >
                  Select rooftop solar capacity
                </label>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-[#585858]
                  "
                >
                  Choose your planned residential rooftop system size.
                </p>

                {/* Capacity */}
                <div
                  className="
                    mt-5
                    grid
                    grid-cols-5
                    gap-2
                  "
                >
                  {["1", "2", "3", "5", "10"].map((kw) => (
                    <button
                      key={kw}
                      type="button"
                      onClick={() => setCapacity(kw)}
                      className={`
                        rounded-xl
                        border
                        py-3
                        text-xs
                        font-semibold
                        transition-all
                        ${capacity === kw
                          ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                          : "border-[#E2E2E2] bg-white text-[#4E4E4E] hover:border-indigo-200 hover:bg-indigo-50"
                        }
                      `}
                    >
                      {kw} kW
                    </button>
                  ))}
                </div>

                {/* Selected */}
                <div
                  className="
                    mt-6
                    rounded-2xl
                    border
                    border-indigo-100
                    bg-indigo-50/60
                    p-4
                  "
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-indigo-600">
                    Selected Capacity
                  </p>

                  <p
                    className="
                      mt-1
                      text-3xl
                      font-semibold
                      tracking-[-0.03em]
                      text-blue-900
                    "
                  >
                    {capKW} kW
                  </p>
                </div>

                <p
                  className="
                    mt-5
                    text-xs
                    leading-5
                    text-[#585858]
                  "
                >
                  The subsidy value shown is calculated using the residential
                  subsidy rules configured in your application.
                </p>
              </div>

              {/* RIGHT */}
              <div
                className="
                  p-5
                  sm:p-7
                  lg:col-span-7
                "
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    text-[#9C9C9C]
                  "
                >
                  Estimated Financial Impact
                </p>

                {/* Metrics */}
                <div
                  className="
                    mt-5
                    grid
                    grid-cols-1
                    gap-3
                    sm:grid-cols-3
                  "
                >
                  {/* Cost */}
                  <div
                    className="
                      rounded-2xl
                      border
                      border-[#E6E6E6]
                      bg-[#FAFAFA]
                      p-4
                    "
                  >
                    <div
                      className="
                        mb-4
                        flex
                        size-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-indigo-50
                        text-indigo-600
                      "
                    >
                      <IndianRupee className="size-4" />
                    </div>

                    <p
                      className="
                        text-[10px]
                        font-medium
                        text-[#585858]
                      "
                    >
                      Approx. System Cost
                    </p>

                    <p
                      className="
                        mt-1
                        text-lg
                        font-semibold
                        text-blue-900
                      "
                    >
                      ₹{approxCost.toLocaleString("en-IN")}
                    </p>
                  </div>

                  {/* Subsidy */}
                  <div
                    className="
                      rounded-2xl
                      border
                      border-emerald-100
                      bg-emerald-50/60
                      p-4
                    "
                  >
                    <div
                      className="
                        mb-4
                        flex
                        size-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-emerald-100
                        text-emerald-700
                      "
                    >
                      <WalletCards className="size-4" />
                    </div>

                    <p
                      className="
                        text-[10px]
                        font-medium
                        text-emerald-700
                      "
                    >
                      Eligible Subsidy
                    </p>

                    <p
                      className="
                        mt-1
                        text-lg
                        font-semibold
                        text-emerald-700
                      "
                    >
                      -₹
                      {centralSubsidy.toLocaleString("en-IN")}
                    </p>
                  </div>

                  {/* Net */}
                  <div
                    className="
                      rounded-2xl
                      border
                      border-indigo-100
                      bg-indigo-50/60
                      p-4
                    "
                  >
                    <div
                      className="
                        mb-4
                        flex
                        size-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-indigo-100
                        text-indigo-700
                      "
                    >
                      <Zap className="size-4" />
                    </div>

                    <p
                      className="
                        text-[10px]
                        font-medium
                        text-indigo-700
                      "
                    >
                      Effective Cost
                    </p>

                    <p
                      className="
                        mt-1
                        text-lg
                        font-semibold
                        text-indigo-700
                      "
                    >
                      ₹{netCost.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div
                  className="
                    mt-6
                    flex
                    flex-col
                    gap-4
                    border-t
                    border-[#E6E6E6]
                    pt-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <p
                    className="
                      text-xs
                      leading-5
                      text-[#585858]
                    "
                  >
                    Want help evaluating your rooftop and subsidy eligibility?
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      openLeadModal({
                        propertyType: "residential",
                        monthlyBill: "15000",
                      })
                    }
                    className="
                      group
                      inline-flex
                      shrink-0
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-indigo-600
                      px-5
                      py-3
                      text-xs
                      font-semibold
                      text-white
                      transition-colors
                      hover:bg-indigo-700
                    "
                  >
                    Check ₹{centralSubsidy.toLocaleString("en-IN")} Subsidy
                    <ArrowRight
                      className="
                        size-3.5
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          STATE BENEFITS
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
              State Government Benefits
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
              State-wise solar incentives.
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
              Review additional state-level benefits, DISCOM incentives and
              available program information.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {Object.values(STATE_SUBSIDY_DATA).map((state, index) => (
              <article
                key={`${state.stateName}-${index}`}
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
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      size-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-indigo-50
                      text-indigo-600
                    "
                  >
                    <Building2 className="size-5" />
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
                      text-[#585858]
                    "
                  >
                    {state.discom}
                  </span>
                </div>

                <h3
                  className="
                    mt-5
                    text-xl
                    font-semibold
                    text-blue-900
                  "
                >
                  {state.stateName}
                </h3>

                <div
                  className="
                    mt-5
                    space-y-4
                    border-t
                    border-[#E6E6E6]
                    pt-5
                  "
                >
                  <div>
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-[#9C9C9C]
                      "
                    >
                      Generation Incentive
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-medium
                        leading-6
                        text-[#4E4E4E]
                      "
                    >
                      {state.gbi}
                    </p>
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-[#9C9C9C]
                      "
                    >
                      Additional Benefit
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-medium
                        leading-6
                        text-[#4E4E4E]
                      "
                    >
                      {state.additionalGrant}
                    </p>
                  </div>

                  <p
                    className="
                      rounded-xl
                      bg-white
                      p-3
                      text-xs
                      leading-5
                      text-[#585858]
                    "
                  >
                    {state.notes}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMERCIAL / INDUSTRIAL TAX SECTION
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
              shadow-[0_24px_70px_rgba(16,24,40,0.16)]
              sm:p-10
              lg:p-12
            "
          >
            {/* glow */}
            <div className="pointer-events-none absolute inset-0">
              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  size-72
                  rounded-full
                  bg-emerald-500/15
                  blur-[90px]
                "
              />
            </div>

            <div className="relative">
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-emerald-300
                "
              >
                Commercial & Industrial Benefits
              </p>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-semibold
                  tracking-[-0.03em]
                  text-white
                  sm:text-4xl
                "
              >
                Tax and financial considerations.
              </h2>

              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-7
                  text-slate-300
                  sm:text-base
                "
              >
                Commercial and industrial solar projects may qualify for
                applicable depreciation, tax and project-level financial
                benefits depending on the prevailing rules.
              </p>

              <div
                className="
                  mt-8
                  grid
                  grid-cols-1
                  gap-5
                  border-t
                  border-white/10
                  pt-8
                  sm:grid-cols-3
                "
              >
                <div>
                  <p className="text-sm font-semibold text-emerald-300">
                    Accelerated Depreciation
                  </p>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Review available depreciation treatment for eligible solar
                    capital assets.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-emerald-300">
                    Applicable GST
                  </p>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Project taxation depends on the applicable equipment and
                    service structure.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-emerald-300">
                    Project Payback
                  </p>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Higher commercial electricity tariffs can improve solar
                    project economics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKFLOW
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
              Subsidy Workflow
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
              From registration to subsidy processing.
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
              A simplified overview of the rooftop solar approval and subsidy
              process.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {workflowSteps.map((step, index) => (
              <article
                key={step.step}
                className="
                    relative
                    rounded-3xl
                    border
                    border-[#E2E2E2]
                    bg-[#fbfcff]
                    p-5
                  "
              >
                <div
                  className="
                      flex
                      size-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-indigo-50
                      text-sm
                      font-semibold
                      text-indigo-600
                    "
                >
                  {step.step}
                </div>

                <h3
                  className="
                      mt-5
                      text-base
                      font-semibold
                      text-blue-900
                    "
                >
                  {step.title}
                </h3>

                <p
                  className="
                      mt-2
                      text-xs
                      leading-6
                      text-[#585858]
                    "
                >
                  {step.desc}
                </p>

                {index < workflowSteps.length - 1 && (
                  <ArrowRight
                    className="
                        absolute
                        -right-3
                        top-1/2
                        z-10
                        hidden
                        size-5
                        -translate-y-1/2
                        rounded-full
                        bg-white
                        text-[#9C9C9C]
                        lg:block
                      "
                  />
                )}
              </article>
            ))}
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
              <FileText className="mx-auto size-6 text-indigo-100" />

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-[-0.03em]
                  sm:text-4xl
                "
              >
                Need help with your rooftop subsidy application?
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
                Share your property and electricity details and our team can
                help you evaluate the solar system and documentation
                requirements.
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
                Get Subsidy Assessment
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
