import React, { useState } from "react";
import { useLead } from "../../context/LeadContext";
import { calculateSolarEstimate } from "../../config/solarConfig";
import SavingsChart from "../common/SavingsChart";

import {
  Calculator,
  Zap,
  IndianRupee,
  Leaf,
  Clock,
  ChevronRight,
  Building,
  Home as HomeIcon,
  Factory,
  Phone,
  User,
  MapPin,
  CheckCircle2,
  Sun,
  Ruler,
  Gauge,
} from "lucide-react";

export default function AdvancedCalculator() {
  const { config, addLead } = useLead();

  const [monthlyBill, setMonthlyBill] = useState("25000");
  const [propertyType, setPropertyType] = useState("commercial");
  const [cityPin, setCityPin] = useState("Gurugram, Haryana");
  const [roofArea, setRoofArea] = useState("2500");
  const [roofType, setRoofType] = useState("Flat Concrete");
  const [offsetPercent, setOffsetPercent] = useState("90");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const estimate = calculateSolarEstimate(
    {
      monthlyBill,
      propertyType,
      areaSqFt: roofArea,
      offsetPercent,
      cityPin,
    },
    config,
  );

  const handleLeadSubmit = (e) => {
    e.preventDefault();

    if (!phone || phone.length < 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const payload = {
      fullName,
      phone,
      email,
      propertyType,
      monthlyBill: `₹${monthlyBill}`,
      cityPin,
      roofArea: `${roofArea} sq.ft (${roofType})`,
      systemPreference: "On-Grid",
      estimatedKW: `${estimate.recommendedCapacity} kW`,
      estimatedAnnualSavings: `₹${estimate.annualSavings.toLocaleString(
        "en-IN",
      )}`,
      estimatedSystemCost: `₹${estimate.estimatedSystemCost.toLocaleString(
        "en-IN",
      )}`,
    };

    addLead(payload);
    setFormSubmitted(true);
  };

  const propertyTypes = [
    {
      id: "residential",
      label: "Residential",
      sub: "Home / Villa",
      icon: HomeIcon,
    },
    {
      id: "commercial",
      label: "Commercial",
      sub: "Office / Business",
      icon: Building,
    },
    {
      id: "industrial",
      label: "Industrial",
      sub: "Factory / Shed",
      icon: Factory,
    },
  ];

  const inputClass =
    "w-full rounded-xl border border-[#E2E2E2] bg-white px-4 py-3 text-sm text-blue-900 outline-none transition-all placeholder:text-[#9C9C9C] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10";

  const labelClass = "mb-2 block text-xs font-semibold text-[#4E4E4E]";

  return (
    <div className="min-h-screen bg-[#f6f7ff] py-14 sm:py-18 lg:py-22">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        {/* =========================
            HERO
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              mb-4 inline-flex items-center gap-2
              rounded-full
              border border-indigo-200
              bg-white
              px-3.5 py-1.5
              text-xs font-semibold
              text-indigo-600
              shadow-sm
            "
          >
            <Calculator className="h-4 w-4" />
            Advanced Solar ROI Calculator
          </div>

          <h1
            className="
              text-3xl
              font-semibold
              tracking-[-0.04em]
              text-blue-900
              sm:text-5xl
            "
          >
            See what solar could save
            <span className="text-indigo-600"> your property.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#585858] sm:text-base">
            Configure your electricity usage, roof details and solar offset to
            generate an indicative engineering and 25-year financial estimate.
          </p>
        </div>

        {/* =========================
            MAIN CALCULATOR
        ========================== */}
        <div
          className="
            grid
            grid-cols-1
            overflow-hidden
            rounded-[28px]
            border border-[#E2E2E2]
            bg-white
            shadow-[0_24px_70px_rgba(16,24,40,0.08)]
            lg:grid-cols-12
          "
        >
          {/* =========================
              LEFT INPUTS
          ========================== */}
          <div
            className="
              border-b border-[#E6E6E6]
              bg-[#fbfcff]
              p-5 sm:p-8
              lg:col-span-5
              lg:border-b-0
              lg:border-r
              lg:p-9
            "
          >
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                Configuration
              </p>

              <h2 className="mt-1 text-xl font-semibold text-blue-900">
                Building & energy inputs
              </h2>

              <p className="mt-1.5 text-sm leading-6 text-[#585858]">
                Adjust the inputs and your solar estimate updates instantly.
              </p>
            </div>

            <div className="space-y-7">
              {/* Property Type */}
              <div>
                <label className={labelClass}>Property category</label>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {propertyTypes.map((type) => {
                    const Icon = type.icon;
                    const selected = propertyType === type.id;

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
                          ${selected
                            ? "border-indigo-500 bg-indigo-50/70 ring-2 ring-indigo-500/10"
                            : "border-[#E2E2E2] bg-white hover:border-indigo-200 hover:bg-[#fafaff]"
                          }
                        `}
                      >
                        <div
                          className={`
                            flex h-9 w-9 items-center justify-center rounded-xl
                            ${selected
                              ? "bg-indigo-600 text-white"
                              : "bg-[#f2f4f7] text-[#585858]"
                            }
                          `}
                        >
                          <Icon className="h-4 w-4" />
                        </div>

                        <div>
                          <span
                            className={`block text-xs font-semibold ${selected ? "text-indigo-700" : "text-[#4E4E4E]"
                              }`}
                          >
                            {type.label}
                          </span>

                          <span className="mt-0.5 block text-[10px] text-[#9C9C9C]">
                            {type.sub}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Monthly Bill */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label className="text-xs font-semibold text-[#4E4E4E]">
                    Average monthly electricity bill
                  </label>

                  <span className="text-xs font-semibold text-indigo-600">
                    ₹{Number(monthlyBill || 0).toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="relative">
                  <IndianRupee className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C9C9C]" />

                  <input
                    type="number"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    placeholder="25000"
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className={labelClass}>City / State</label>

                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C9C9C]" />

                  <input
                    type="text"
                    value={cityPin}
                    onChange={(e) => setCityPin(e.target.value)}
                    className={`${inputClass} pl-10`}
                  />
                </div>

                <div className="mt-2 flex items-center justify-between rounded-xl bg-[#f2f4f7] px-3 py-2">
                  <span className="text-[11px] text-[#585858]">
                    DISCOM Tariff
                  </span>

                  <span className="text-xs font-semibold text-[#4E4E4E]">
                    ₹{estimate.tariffUsed.toFixed(2)} / kWh
                  </span>
                </div>
              </div>

              {/* Roof */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <label className={labelClass}>Roof area</label>

                  <div className="relative">
                    <Ruler className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C9C9C]" />

                    <input
                      type="number"
                      value={roofArea}
                      onChange={(e) => setRoofArea(e.target.value)}
                      placeholder="2500"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Roof surface</label>

                  <select
                    value={roofType}
                    onChange={(e) => setRoofType(e.target.value)}
                    className={inputClass}
                  >
                    <option value="Flat Concrete">Flat Concrete Roof</option>

                    <option value="Metal Industrial Shed">
                      Metal Shed Structure
                    </option>

                    <option value="Tiled / Slanted">Slanted Roof</option>

                    <option value="Ground Mounted">Open Ground Area</option>
                  </select>
                </div>
              </div>

              {/* Offset */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#4E4E4E]">
                    Target solar offset
                  </label>

                  <span className="text-xs font-semibold text-indigo-600">
                    {offsetPercent}%
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {["50", "70", "90", "100"].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setOffsetPercent(val)}
                      className={`
                        rounded-xl border py-2.5 text-xs font-semibold transition-all
                        ${offsetPercent === val
                          ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                          : "border-[#E2E2E2] bg-white text-[#4E4E4E] hover:border-indigo-200 hover:bg-indigo-50"
                        }
                      `}
                    >
                      {val}%
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT RESULTS
          ========================== */}
          <div className="p-5 sm:p-8 lg:col-span-7 lg:p-9">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9C9C9C]">
                  Engineering output
                </p>

                <h2 className="mt-1 text-xl font-semibold text-blue-900">
                  Calculated solar specification
                </h2>
              </div>

              <span
                className="
                  inline-flex w-fit items-center gap-1.5
                  rounded-full
                  bg-indigo-50
                  px-3 py-1.5
                  text-[11px]
                  font-semibold
                  text-indigo-700
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Indicative estimate
              </span>
            </div>

            {/* Main Capacity */}
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                bg-linear-to-br
                from-indigo-600
                via-[#DD9900]
                to-violet-600
                p-6
                text-white
                sm:p-7
              "
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

              <div className="relative flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-xs text-indigo-100">
                    <Sun className="h-4 w-4" />
                    Recommended solar capacity
                  </div>

                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-semibold tracking-tighter sm:text-6xl">
                      {estimate.recommendedCapacity}
                    </span>

                    <span className="pb-1 text-2xl text-indigo-100">kW</span>
                  </div>

                  <p className="mt-3 text-sm text-indigo-100">
                    Approx. {estimate.panelsCount} TOPCon panels
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-wider text-indigo-100">
                    Estimated investment
                  </p>

                  <p className="mt-1 text-xl font-semibold">
                    ₹{(estimate.estimatedSystemCost / 100000).toFixed(2)}
                    <span className="ml-1 text-sm font-normal text-indigo-100">
                      Lakhs
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Metric Cards */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <MetricCard
                icon={Zap}
                iconClass="bg-indigo-50 text-indigo-600"
                label="Monthly Generation"
                value={estimate.monthlyGeneration.toLocaleString("en-IN")}
                suffix="kWh"
              />

              <MetricCard
                icon={IndianRupee}
                iconClass="bg-emerald-100 text-emerald-700"
                cardClass="border-emerald-100 bg-emerald-50/60"
                label="Monthly Savings"
                value={`₹${estimate.monthlySavings.toLocaleString("en-IN")}`}
              />

              <MetricCard
                icon={IndianRupee}
                iconClass="bg-violet-50 text-violet-600"
                label="Annual Savings"
                value={`₹${estimate.annualSavings.toLocaleString("en-IN")}`}
              />

              <MetricCard
                icon={Gauge}
                iconClass="bg-indigo-50 text-indigo-600"
                label="10-Year Savings"
                value={`₹${(
                  (estimate.yearlyProjections[9]?.cumulativeSavings || 0) /
                  100000
                ).toFixed(1)}`}
                suffix="L"
              />

              <MetricCard
                icon={IndianRupee}
                iconClass="bg-amber-50 text-amber-600"
                label="25-Year Net Benefit"
                value={`₹${(estimate.net25YearBenefit / 100000).toFixed(1)}`}
                suffix="L"
              />

              <MetricCard
                icon={Leaf}
                iconClass="bg-emerald-50 text-emerald-600"
                label="CO₂ Offset"
                value={estimate.co2ReductionTonnes}
                suffix="T/yr"
              />
            </div>

            {/* Payback Bar */}
            <div
              className="
                mt-5
                flex
                flex-col
                gap-4
                rounded-2xl
                border
                border-[#E6E6E6]
                bg-[#FAFAFA]
                p-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Clock className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] text-[#585858]">Capital Payback</p>

                  <p className="text-sm font-semibold text-blue-900">
                    {estimate.paybackYears} Years
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Leaf className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] text-[#585858]">
                    Annual CO₂ Offset
                  </p>

                  <p className="text-sm font-semibold text-blue-900">
                    {estimate.co2ReductionTonnes} T/year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            FINANCIAL CHART
        ========================== */}
        <SavingsChart yearlyProjections={estimate.yearlyProjections} />

        {/* =========================
            LEAD CAPTURE
        ========================== */}
        <div
          className="
            mx-auto
            max-w-4xl
            rounded-[28px]
            border
            border-[#E2E2E2]
            bg-white
            p-5
            shadow-[0_20px_60px_rgba(16,24,40,0.06)]
            sm:p-8
            lg:p-10
          "
        >
          {!formSubmitted ? (
            <>
              <div className="mx-auto mb-8 max-w-xl text-center">
                <div
                  className="
                    mx-auto mb-4
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    bg-indigo-50
                    text-indigo-600
                  "
                >
                  <Calculator className="h-5 w-5" />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
                  Want a site-specific solar proposal?
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#585858]">
                  Share your contact details and we'll attach your calculated{" "}
                  <strong className="font-semibold text-indigo-600">
                    {estimate.recommendedCapacity} kW
                  </strong>{" "}
                  system estimate.
                </p>
              </div>

              <form
                onSubmit={handleLeadSubmit}
                className="grid grid-cols-1 gap-4 sm:grid-cols-3"
              >
                {/* Name */}
                <div>
                  <label className={labelClass}>Full Name *</label>

                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C9C9C]" />

                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Alok Sharma"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className={labelClass}>Phone Number *</label>

                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C9C9C]" />

                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value.replace(/\D/g, ""))
                      }
                      placeholder="10-digit Mobile"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass}>
                    Email
                    <span className="ml-1 font-normal text-[#9C9C9C]">
                      Optional
                    </span>
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className={inputClass}
                  />
                </div>

                <div className="pt-2 sm:col-span-3">
                  <button
                    type="submit"
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
                </div>
              </form>
            </>
          ) : (
            <div className="py-4 text-center">
              <div
                className="
                  mx-auto
                  flex h-16 w-16
                  items-center justify-center
                  rounded-full
                  bg-emerald-50
                  text-emerald-600
                  ring-8
                  ring-emerald-50/60
                "
              >
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-emerald-600">
                Request Submitted
              </p>

              <h3 className="mt-1 text-2xl font-semibold text-blue-900">
                Proposal Request Logged!
              </h3>

              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#585858]">
                Thank you {fullName}. Our solar team will review your{" "}
                <span className="font-semibold text-indigo-600">
                  {estimate.recommendedCapacity} kW
                </span>{" "}
                estimate for {cityPin}.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ======================================================
   METRIC CARD
====================================================== */

function MetricCard({
  icon: Icon,
  iconClass,
  cardClass = "border-[#E6E6E6] bg-white",
  label,
  value,
  suffix,
}) {
  return (
    <div
      className={`
        rounded-2xl
        border
        p-4
        ${cardClass}
      `}
    >
      <div
        className={`
          mb-4
          flex h-9 w-9
          items-center justify-center
          rounded-xl
          ${iconClass}
        `}
      >
        <Icon className="h-4 w-4" />
      </div>

      <p className="text-[11px] font-medium text-[#585858]">{label}</p>

      <p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-blue-900">
        {value}

        {suffix && (
          <span className="ml-1 text-xs font-normal text-[#9C9C9C]">
            {suffix}
          </span>
        )}
      </p>
    </div>
  );
}
