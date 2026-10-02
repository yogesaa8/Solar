import React, { useState } from "react";
import { useLead } from "../../context/LeadContext";
import { calculateSolarEstimate } from "../../config/solarConfig";

import {
  Calculator,
  Zap,
  IndianRupee,
  Leaf,
  Clock,
  ChevronRight,
  Home as HomeIcon,
  Building,
  Factory,
  MapPin,
  Ruler,
  Sun,
} from "lucide-react";

export default function QuickCalculator() {
  const { config, openLeadModal } = useLead();

  const [monthlyBill, setMonthlyBill] = useState("15000");
  const [propertyType, setPropertyType] = useState("residential");
  const [cityPin, setCityPin] = useState("Gurugram");
  const [roofArea, setRoofArea] = useState("");

  const estimate = calculateSolarEstimate(
    {
      monthlyBill,
      propertyType,
      areaSqFt: roofArea,
      cityPin,
    },
    config,
  );

  const handleGetProposal = () => {
    openLeadModal({
      monthlyBill,
      propertyType,
      cityPin,
      roofArea,
      systemPreference: "On-Grid",
    });
  };

  const propertyTypes = [
    {
      id: "residential",
      label: "Residential",
      description: "Home & villa",
      icon: HomeIcon,
    },
    {
      id: "commercial",
      label: "Commercial",
      description: "Office & business",
      icon: Building,
    },
    {
      id: "industrial",
      label: "Industrial",
      description: "Factory & plant",
      icon: Factory,
    },
  ];

  return (
    <section
      id="solar-calculator"
      className=" relative overflow-hidden border-y border-[#E6E6E6] bg-[#f6f7ff] py-16 sm:py-20 lg:py-24"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 -top-75 h-150 w-225 -translate-x-1/2 rounded-full bg-indigo-500/[0.07] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-indigo-600 shadow-sm">
            <Calculator className="h-3.5 w-3.5" />
            Solar Savings Calculator
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.035em] text-blue-900 sm:text-4xl lg:text-5xl">
            Find the right solar system
            <span className="text-indigo-600"> for your property.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#585858] sm:text-base sm:leading-7">
            Enter your electricity bill and property details to get an instant
            estimate of system size, generation and potential savings.
          </p>
        </div>

        {/* =========================
            MAIN CALCULATOR
        ========================== */}
        <div className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-[#E2E2E2] bg-white shadow-[0_24px_60px_rgba(16,24,40,0.08)] lg:grid-cols-12">
          {/* =========================
              LEFT SIDE - INPUTS
          ========================== */}
          <div className="border-b border-[#E6E6E6] bg-white p-5 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-9">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                Your details
              </p>

              <h3 className="mt-2 text-xl font-semibold text-blue-900">
                Tell us about your electricity usage
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-[#585858]">
                Adjust the inputs below and your estimate will update instantly.
              </p>
            </div>

            <div className="space-y-7">
              {/* =========================
                  PROPERTY TYPE
              ========================== */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-[#4E4E4E]">
                  Property type
                </label>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {propertyTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = propertyType === type.id;

                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setPropertyType(type.id)}
                        className={`
                          group flex items-center gap-3 rounded-2xl border p-3.5 text-left transition-all
                          sm:flex-col sm:items-start
                          lg:flex-row lg:items-center
                          xl:flex-col xl:items-start
                          ${isSelected
                            ? "border-indigo-500 bg-indigo-50/70 shadow-sm"
                            : "border-[#E2E2E2] bg-white hover:border-indigo-200 hover:bg-[#fafaff]"
                          }
                        `}
                      >
                        <div
                          className={`
                            flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors
                            ${isSelected
                              ? "bg-indigo-600 text-white"
                              : "bg-[#f2f4f7] text-[#585858] group-hover:bg-indigo-50 group-hover:text-indigo-600"
                            }
                          `}
                        >
                          <Icon className="h-4.5 w-4.5" />
                        </div>

                        <div>
                          <p
                            className={`text-xs font-semibold ${isSelected ? "text-indigo-700" : "text-[#4E4E4E]"
                              }`}
                          >
                            {type.label}
                          </p>

                          <p className="mt-0.5 hidden text-[10px] text-[#9C9C9C] xl:block">
                            {type.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* =========================
                  MONTHLY BILL
              ========================== */}
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <label className="text-sm font-semibold text-[#4E4E4E]">
                    Monthly electricity bill
                  </label>

                  <span className="text-sm font-semibold text-indigo-600">
                    ₹{Number(monthlyBill || 0).toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="relative">
                  <IndianRupee className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C9C9C]" />

                  <input
                    type="number"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    placeholder="15000"
                    className=" w-full rounded-xl border border-[#E2E2E2] bg-white py-3.5 pl-10 pr-4 text-base font-semibold text-blue-900 outline-none transition-all placeholder:text-[#9C9C9C] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 "
                  />
                </div>

                <div className="mt-4">
                  <input
                    type="range"
                    min="2000"
                    max="250000"
                    step="1000"
                    value={monthlyBill || 15000}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    className="h-2 w-full cursor-pointer accent-indigo-600"
                  />

                  <div className="mt-1.5 flex items-center justify-between text-[10px] font-medium text-[#9C9C9C]">
                    <span>₹2,000</span>
                    <span>₹2,50,000</span>
                  </div>
                </div>
              </div>

              {/* =========================
                  CITY + ROOF AREA
              ========================== */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {/* City */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#4E4E4E]">
                    City / PIN
                  </label>

                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C9C9C]" />

                    <input
                      type="text"
                      value={cityPin}
                      onChange={(e) => setCityPin(e.target.value)}
                      placeholder="Gurugram"
                      className=" w-full rounded-xl border border-[#E2E2E2] py-3 pl-10 pr-3 text-sm text-blue-900 outline-none transition-all placeholder:text-[#9C9C9C] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 "
                    />
                  </div>
                </div>

                {/* Roof Area */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-semibold text-[#4E4E4E]">
                      Roof area
                    </label>

                    <span className="text-[10px] text-[#9C9C9C]">Optional</span>
                  </div>

                  <div className="relative">
                    <Ruler className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C9C9C]" />

                    <input
                      type="number"
                      value={roofArea}
                      onChange={(e) => setRoofArea(e.target.value)}
                      placeholder="1200 sq.ft"
                      className=" w-full rounded-xl border border-[#E2E2E2] py-3 pl-10 pr-3 text-sm text-blue-900 outline-none transition-all placeholder:text-[#9C9C9C] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT SIDE - RESULTS
          ========================== */}
          <div className="flex flex-col p-5 sm:p-8 lg:col-span-7 lg:p-9">
            {/* Result Heading */}
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9C9C9C]">
                  Your estimate
                </p>

                <h3 className="mt-1 text-xl font-semibold text-blue-900">
                  Recommended solar system
                </h3>
              </div>

              <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Live calculation
              </div>
            </div>

            {/* =========================
                MAIN RESULT CARD
            ========================== */}
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-900 via-[#DD9300] to-[#DDF800] p-6 text-white sm:p-7">
              {/* Glow */}
              <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

              <div className="relative flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-indigo-100">
                    <Sun className="h-4 w-4" />
                    Recommended Capacity
                  </div>

                  <div className="flex flex-wrap items-end gap-2">
                    <span className="text-5xl font-semibold tracking-tighter sm:text-6xl">
                      {estimate.recommendedCapacity}
                    </span>

                    <span className="pb-1 text-2xl font-medium text-indigo-100">
                      kW
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-indigo-100">
                    Approx. {estimate.panelsCount} solar panels required
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-wider text-indigo-100">
                    Estimated roof area
                  </p>

                  <p className="mt-1 text-xl font-semibold">
                    ~{estimate.areaRequired}
                    <span className="ml-1 text-sm font-normal text-indigo-100">
                      sq.ft
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* =========================
                KEY METRICS
            ========================== */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {/* Generation */}
              <div className="rounded-2xl border border-[#E6E6E6] bg-white p-4">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Zap className="h-4 w-4" />
                </div>

                <p className="text-[11px] font-medium text-[#585858]">
                  Monthly Generation
                </p>

                <p className="mt-1 text-lg font-semibold text-blue-900">
                  {estimate.monthlyGeneration.toLocaleString("en-IN")}
                  <span className="ml-1 text-xs font-normal text-[#9C9C9C]">
                    units
                  </span>
                </p>
              </div>

              {/* Monthly Savings */}
              <div className="rounded-2xl border border-[#d1fadf] bg-[#f6fef9] p-4">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <IndianRupee className="h-4 w-4" />
                </div>

                <p className="text-[11px] font-medium text-emerald-700">
                  Monthly Savings
                </p>

                <p className="mt-1 text-lg font-semibold text-emerald-700">
                  ₹{estimate.monthlySavings.toLocaleString("en-IN")}
                </p>
              </div>

              {/* Annual Savings */}
              <div className="rounded-2xl border border-[#E6E6E6] bg-white p-4">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <IndianRupee className="h-4 w-4" />
                </div>

                <p className="text-[11px] font-medium text-[#585858]">
                  Annual Savings
                </p>

                <p className="mt-1 text-lg font-semibold text-blue-900">
                  ₹{estimate.annualSavings.toLocaleString("en-IN")}
                </p>
              </div>

              {/* 25 Year Savings */}
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <IndianRupee className="h-4 w-4" />
                </div>

                <p className="text-[11px] font-medium text-indigo-700">
                  25-Year Savings
                </p>

                <p className="mt-1 text-lg font-semibold text-indigo-700">
                  ₹{(estimate.savings25Years / 100000).toFixed(1)}
                  <span className="ml-1 text-xs font-normal">Lakhs</span>
                </p>
              </div>

              {/* Payback */}
              <div className="rounded-2xl border border-[#E6E6E6] bg-white p-4">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Clock className="h-4 w-4" />
                </div>

                <p className="text-[11px] font-medium text-[#585858]">
                  Estimated Payback
                </p>

                <p className="mt-1 text-lg font-semibold text-blue-900">
                  {estimate.paybackYears}
                  <span className="ml-1 text-xs font-normal text-[#9C9C9C]">
                    years
                  </span>
                </p>
              </div>

              {/* CO2 */}
              <div className="rounded-2xl border border-[#E6E6E6] bg-white p-4">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Leaf className="h-4 w-4" />
                </div>

                <p className="text-[11px] font-medium text-[#585858]">
                  CO₂ Offset
                </p>

                <p className="mt-1 text-lg font-semibold text-blue-900">
                  {estimate.co2ReductionTonnes}
                  <span className="ml-1 text-xs font-normal text-[#9C9C9C]">
                    T/year
                  </span>
                </p>
              </div>
            </div>

            {/* =========================
                CTA
            ========================== */}
            <div className="mt-auto pt-6">
              <button
                onClick={handleGetProposal}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-indigo-600
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  hover:bg-indigo-700
                  hover:shadow-md
                "
              >
                Get Detailed Solar Proposal
                <span className="hidden font-normal text-indigo-100 sm:inline">
                  ({estimate.recommendedCapacity} kW)
                </span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="mt-3 text-center text-[10px] leading-4 text-[#9C9C9C] sm:text-[11px]">
                * {config.disclaimerText}
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            SMALL TRUST LINE
        ========================== */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#585858]">
          <span>✓ Instant estimate</span>
          <span>✓ No signup required</span>
          <span>✓ Residential, Commercial & Industrial</span>
        </div>
      </div>
    </section>
  );
}
