import React, { useEffect, useState } from "react";
import { useLead } from "../../context/LeadContext";
import { calculateSolarEstimate } from "../../config/solarConfig";

import {
  X,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Building,
  Home as HomeIcon,
  Factory,
  Zap,
  Phone,
  User,
  MapPin,
  ShieldCheck,
  Sun,
} from "lucide-react";

export default function LeadModal() {
  const {
    isLeadModalOpen,
    closeLeadModal,
    leadModalInitialData,
    addLead,
    config,
  } = useLead();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    propertyType: "residential",
    monthlyBill: "",
    cityPin: "",
    fullName: "",
    phone: "",
    email: "",
    roofArea: "",
    systemPreference: "On-Grid",
  });

  const [submittedLead, setSubmittedLead] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (leadModalInitialData) {
      setFormData((prev) => ({
        ...prev,
        ...leadModalInitialData,
      }));
    }

    if (isLeadModalOpen) {
      setStep(1);
      setSubmittedLead(null);
    }
  }, [isLeadModalOpen, leadModalInitialData]);

  if (!isLeadModalOpen) return null;

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.phone || formData.phone.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);

    const estimate = calculateSolarEstimate(formData, config);

    const leadPayload = {
      propertyType: formData.propertyType,

      monthlyBill: formData.monthlyBill
        ? `₹${formData.monthlyBill}`
        : "Not provided",

      cityPin: formData.cityPin || "Not provided",

      fullName: formData.fullName || "Valued Customer",

      phone: formData.phone,

      email: formData.email || "N/A",

      roofArea: formData.roofArea ? `${formData.roofArea} sq.ft` : "N/A",

      systemPreference: formData.systemPreference,

      estimatedKW: `${estimate.recommendedCapacity} kW`,

      estimatedAnnualSavings: `₹${estimate.annualSavings.toLocaleString(
        "en-IN",
      )}`,

      estimatedSystemCost: `₹${estimate.estimatedSystemCost.toLocaleString(
        "en-IN",
      )}`,
    };

    setTimeout(() => {
      const saved = addLead(leadPayload);

      setSubmittedLead(saved);
      setIsSubmitting(false);
      setStep(5);
    }, 400);
  };

  const estimate = calculateSolarEstimate(formData, config);

  const labelClass = "mb-2 block text-xs font-semibold text-[#4E4E4E]";

  const inputClass =
    "w-full rounded-xl border border-[#E2E2E2] bg-white px-4 py-3 text-sm text-blue-900 outline-none transition-all placeholder:text-[#9C9C9C] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10";

  const primaryButton =
    "flex items-center justify-center gap-2 rounded-full bg-indigo-600 py-3.5 font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50";

  const secondaryButton =
    "flex items-center justify-center gap-1 rounded-full border border-[#E2E2E2] bg-white py-3.5 font-semibold text-[#4E4E4E] transition-all hover:bg-[#FAFAFA]";

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
      sub: "Office / School",
      icon: Building,
    },
    {
      id: "industrial",
      label: "Industrial",
      sub: "Factory / Shed",
      icon: Factory,
    },
  ];

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        overflow-y-auto
        bg-blue-900/55
        p-3
        backdrop-blur-md
        sm:p-5
      "
    >
      <div
        className="
          relative
          w-full
          max-w-xl
          overflow-hidden
          rounded-[28px]
          border
          border-white/60
          bg-white
          shadow-[0_30px_90px_rgba(16,24,40,0.24)]
          animate-in
          fade-in
          zoom-in-95
          duration-200
        "
      >
        {/* =================================
            HEADER
        ================================== */}

        <div
          className="
            relative
            border-b
            border-[#E6E6E6]
            bg-linear-to-r
            from-[#F8FFD5]
            via-white
            to-[#f8f9ff]
            px-5
            py-5
            sm:px-7
          "
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div
                className="
                  mb-2
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-indigo-200
                  bg-white/80
                  px-3
                  py-1.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-widest
                  text-indigo-600
                "
              >
                <Sun className="h-3.5 w-3.5" />
                Free Solar Assessment
              </div>

              <h3
                className="
                  text-xl
                  font-semibold
                  tracking-tight
                  text-blue-900
                  sm:text-2xl
                "
              >
                Get Your Solar Proposal
              </h3>

              <p className="mt-1 max-w-md text-xs leading-5 text-[#585858]">
                Share a few details and get a system recommendation based on
                your property and electricity usage.
              </p>
            </div>

            <button
              type="button"
              onClick={closeLeadModal}
              className="
                flex h-9 w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#E2E2E2]
                bg-white
                text-[#585858]
                shadow-sm
                transition-all
                hover:bg-[#FAFAFA]
                hover:text-blue-900
              "
              aria-label="Close modal"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        {/* =================================
            PROGRESS
        ================================== */}

        {step <= 4 && (
          <div
            className="
              border-b
              border-[#E6E6E6]
              bg-white
              px-5
              py-4
              sm:px-7
            "
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#4E4E4E]">
                Step {step} of 4
              </span>

              <span className="text-[10px] font-medium text-[#9C9C9C]">
                {step * 25}% completed
              </span>
            </div>

            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`
                    h-1.5 flex-1 rounded-full transition-all duration-300
                    ${s <= step ? "bg-indigo-600" : "bg-[#E6E6E6]"}
                  `}
                />
              ))}
            </div>
          </div>
        )}

        {/* =================================
            CONTENT
        ================================== */}

        <div className="p-5 sm:p-7">
          {/* =================================
              STEP 1
          ================================== */}

          {step === 1 && (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                  Property
                </p>

                <h4 className="mt-1 text-lg font-semibold text-blue-900">
                  What type of property is this?
                </h4>

                <p className="mt-1 text-xs leading-5 text-[#585858]">
                  This helps us estimate the applicable tariff and solar system
                  requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {propertyTypes.map((type) => {
                  const Icon = type.icon;

                  const isSelected = formData.propertyType === type.id;

                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          propertyType: type.id,
                        })
                      }
                      className={`
                        group
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        p-4
                        text-left
                        transition-all
                        sm:flex-col
                        sm:items-start
                        ${isSelected
                          ? "border-indigo-500 bg-indigo-50/70 shadow-sm ring-2 ring-indigo-500/10"
                          : "border-[#E2E2E2] bg-white hover:border-indigo-200 hover:bg-[#fafaff]"
                        }
                      `}
                    >
                      <div
                        className={`
                          flex h-10 w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          transition-all
                          ${isSelected
                            ? "bg-indigo-600 text-white"
                            : "bg-[#f2f4f7] text-[#585858] group-hover:bg-indigo-50 group-hover:text-indigo-600"
                          }
                        `}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <span
                          className={`
                            block text-sm font-semibold
                            ${isSelected ? "text-indigo-700" : "text-[#4E4E4E]"}
                          `}
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

              <button
                type="button"
                onClick={handleNext}
                className={`${primaryButton} w-full`}
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* =================================
              STEP 2
          ================================== */}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                  Electricity usage
                </p>

                <h4 className="mt-1 text-lg font-semibold text-blue-900">
                  Electricity Bill & Roof Details
                </h4>

                <p className="mt-1 text-xs leading-5 text-[#585858]">
                  We'll estimate the recommended kW size based on your
                  electricity usage.
                </p>
              </div>

              {/* Bill */}

              <div>
                <label className={labelClass}>
                  Average Monthly Electricity Bill (₹) *
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[#9C9C9C]">
                    ₹
                  </span>

                  <input
                    type="number"
                    value={formData.monthlyBill}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        monthlyBill: e.target.value,
                      })
                    }
                    placeholder="e.g. 12000"
                    className={`${inputClass} pl-8`}
                  />
                </div>
              </div>

              {/* Roof */}

              <div>
                <label className={labelClass}>
                  Approx Available Rooftop Area (sq.ft)
                  <span className="ml-1 font-normal text-[#9C9C9C]">
                    Optional
                  </span>
                </label>

                <input
                  type="number"
                  value={formData.roofArea}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      roofArea: e.target.value,
                    })
                  }
                  placeholder="e.g. 1500"
                  className={inputClass}
                />
              </div>

              {/* Estimate teaser */}

              {Number(formData.monthlyBill) > 0 && (
                <div
                  className="
                    rounded-2xl
                    border
                    border-indigo-100
                    bg-indigo-50/60
                    p-4
                  "
                >
                  <div className="mb-3 flex items-center gap-2">
                    <div
                      className="
                        flex h-8 w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-indigo-600
                        text-white
                      "
                    >
                      <Zap className="h-4 w-4" />
                    </div>

                    <span className="text-xs font-semibold text-indigo-700">
                      Instant Estimate
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] text-[#585858]">
                        Recommended Capacity
                      </p>

                      <p className="mt-1 text-base font-semibold text-blue-900">
                        {estimate.recommendedCapacity} kW
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] text-[#585858]">
                        Monthly Savings
                      </p>

                      <p className="mt-1 text-base font-semibold text-emerald-700">
                        ₹{estimate.monthlySavings.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  className={`${secondaryButton} w-1/3`}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className={`${primaryButton} w-2/3`}
                >
                  Continue
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* =================================
              STEP 3
          ================================== */}

          {step === 3 && (
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                  Location
                </p>

                <h4 className="mt-1 text-lg font-semibold text-blue-900">
                  Installation Location
                </h4>

                <p className="mt-1 text-xs leading-5 text-[#585858]">
                  This helps us understand local DISCOM and net-metering
                  requirements.
                </p>
              </div>

              {/* City */}

              <div>
                <label className={labelClass}>City / PIN Code *</label>

                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C9C9C]" />

                  <input
                    type="text"
                    value={formData.cityPin}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        cityPin: e.target.value,
                      })
                    }
                    placeholder="e.g. Gurugram, 122001"
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              {/* System */}

              <div>
                <label className={labelClass}>Preferred Solar System</label>

                <select
                  value={formData.systemPreference}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      systemPreference: e.target.value,
                    })
                  }
                  className={inputClass}
                >
                  <option value="On-Grid">
                    On-Grid — Best for electricity bill reduction
                  </option>

                  <option value="Hybrid">
                    Hybrid — Solar + battery backup
                  </option>

                  <option value="Off-Grid">
                    Off-Grid — Independent solar power
                  </option>

                  <option value="Not Sure">
                    Not Sure — Need expert advice
                  </option>
                </select>
              </div>

              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  className={`${secondaryButton} w-1/3`}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className={`${primaryButton} w-2/3`}
                >
                  Final Step
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* =================================
              STEP 4
          ================================== */}

          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                  Contact details
                </p>

                <h4 className="mt-1 text-lg font-semibold text-blue-900">
                  Where should we send your proposal?
                </h4>

                <p className="mt-1 text-xs leading-5 text-[#585858]">
                  Our team will use these details to follow up on your solar
                  assessment.
                </p>
              </div>

              {/* Name */}

              <div>
                <label className={labelClass}>Full Name *</label>

                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C9C9C]" />

                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      })
                    }
                    placeholder="e.g. Alok Sharma"
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              {/* Phone */}

              <div>
                <label className={labelClass}>Mobile Phone Number *</label>

                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C9C9C]" />

                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    placeholder="10-digit Mobile Number"
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              {/* Email */}

              <div>
                <label className={labelClass}>
                  Email Address
                  <span className="ml-1 font-normal text-[#9C9C9C]">
                    Optional
                  </span>
                </label>

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="name@domain.com"
                  className={inputClass}
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className={`${secondaryButton} w-1/3`}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${primaryButton} w-2/3`}
                >
                  {isSubmitting ? "Generating..." : "Get Free Proposal"}

                  {!isSubmitting && <ChevronRight className="h-4 w-4" />}
                </button>
              </div>

              <p
                className="
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  pt-1
                  text-center
                  text-[10px]
                  text-[#9C9C9C]
                "
              >
                <ShieldCheck className="h-3.5 w-3.5 text-indigo-500" />
                Your details are kept private and used only for this solar
                assessment.
              </p>
            </form>
          )}

          {/* =================================
              STEP 5 SUCCESS
          ================================== */}

          {step === 5 && (
            <div className="space-y-6 py-3 text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-emerald-50
                  text-emerald-600
                  ring-8
                  ring-emerald-50/60
                "
              >
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
                  Request submitted
                </p>

                <h4
                  className="
                    mt-1
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-blue-900
                  "
                >
                  Enquiry Received!
                </h4>

                <p
                  className="
                    mx-auto
                    mt-2
                    max-w-sm
                    text-sm
                    leading-6
                    text-[#585858]
                  "
                >
                  Thank you,{" "}
                  <span className="font-semibold text-[#4E4E4E]">
                    {submittedLead?.fullName}
                  </span>
                  . Your solar assessment request has been recorded.
                </p>
              </div>

              {/* Summary */}

              <div
                className="
                  rounded-2xl
                  border
                  border-[#E6E6E6]
                  bg-[#FAFAFA]
                  p-5
                  text-left
                "
              >
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#E6E6E6]
                    pb-4
                  "
                >
                  <span className="text-xs text-[#585858]">Enquiry ID</span>

                  <span className="font-mono text-xs font-semibold text-[#4E4E4E]">
                    {submittedLead?.id}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs text-[#585858]">
                      Recommended System
                    </span>

                    <span className="text-sm font-semibold text-indigo-600">
                      {submittedLead?.estimatedKW}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs text-[#585858]">
                      Annual Savings
                    </span>

                    <span className="text-sm font-semibold text-emerald-700">
                      {submittedLead?.estimatedAnnualSavings}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs text-[#585858]">Location</span>

                    <span className="text-sm font-medium text-[#4E4E4E]">
                      {submittedLead?.cityPin}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={closeLeadModal}
                className={`${primaryButton} w-full`}
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
