import React, { useState } from "react";
import { useLead } from "../context/LeadContext";
import { calculateSolarEstimate } from "../config/solarConfig";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Upload,
  CheckCircle2,
  MessageSquare,
  Send,
  Building2,
  ShieldCheck,
  Sun,
} from "lucide-react";

export default function ContactPage() {
  const { config, addLead } = useLead();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cityPin: "",
    propertyType: "residential",
    monthlyBill: "",
    roofArea: "",
    systemPreference: "On-Grid",
    message: "",
    fileName: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setFormData((prev) => ({
        ...prev,
        fileName: file.name,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.phone || formData.phone.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const estimate = calculateSolarEstimate(formData, config);

    const payload = {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email || "N/A",
      cityPin: formData.cityPin,
      propertyType: formData.propertyType,

      monthlyBill: formData.monthlyBill ? `₹${formData.monthlyBill}` : "N/A",

      roofArea: formData.roofArea ? `${formData.roofArea} sq.ft` : "N/A",

      systemPreference: formData.systemPreference,

      message: formData.message,

      billAttachment: formData.fileName
        ? `Uploaded: ${formData.fileName}`
        : "None",

      estimatedKW: `${estimate.recommendedCapacity} kW`,

      estimatedAnnualSavings: `₹${estimate.annualSavings.toLocaleString(
        "en-IN",
      )}`,
    };

    const saved = addLead(payload);

    setSubmittedLeadId(saved.id);
    setIsSubmitted(true);
  };

  const inputClass = `
    w-full
    rounded-xl
    border border-[#E2E2E2]
    bg-white
    px-4
    py-3
    text-sm
    text-blue-900
    outline-none
    transition-all
    placeholder:text-[#9C9C9C]
    focus:border-indigo-500
    focus:ring-4
    focus:ring-indigo-500/10
  `;

  const labelClass = "mb-2 block text-xs font-semibold text-[#4E4E4E]";

  const whatsappMessage = encodeURIComponent(
    "Hi AJ Solar Solutions, I'd like a solar quote.",
  );

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

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div className="mx-auto max-w-3xl text-center">
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
              <ShieldCheck className="h-4 w-4" />
              Direct EPC Assistance
            </div>

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
              Let's talk <span className="text-indigo-600">solar.</span>
            </h1>

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
              Speak with our solar team or share your electricity details for a
              property-specific feasibility assessment.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT + FORM
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
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-8
            px-4
            sm:px-6
            lg:grid-cols-12
            lg:gap-10
            lg:px-8
          "
        >
          {/* =================================================
              LEFT
          ================================================== */}
          <div
            className="
              space-y-5
              lg:col-span-5
            "
          >
            {/* Contact Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                bg-blue-900
                p-6
                text-white
                shadow-[0_24px_70px_rgba(16,24,40,0.16)]
                sm:p-8
              "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute inset-0">
                <div
                  className="
                    absolute
                    -right-24
                    -top-24
                    h-64
                    w-64
                    rounded-full
                    bg-indigo-500/20
                    blur-[80px]
                  "
                />
              </div>

              <div className="relative">
                <div
                  className="
                    mb-6
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/10
                      text-indigo-300
                    "
                  >
                    <Building2 className="h-5 w-5" />
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-indigo-300
                      "
                    >
                      Contact
                    </p>

                    <h2 className="text-xl font-semibold text-white">
                      Corporate Solar Office
                    </h2>
                  </div>
                </div>

                <div
                  className="
                    space-y-5
                    border-t
                    border-white/10
                    pt-6
                  "
                >
                  {/* Phone */}
                  <a
                    href={`tel:${config.companyInfo.phone}`}
                    className="
                      group
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-indigo-500/15
                        text-indigo-300
                      "
                    >
                      <Phone className="h-4 w-4" />
                    </div>

                    <div>
                      <span className="block text-[11px] text-slate-400">
                        Phone & Consultation
                      </span>

                      <strong
                        className="
                          mt-0.5
                          block
                          text-sm
                          font-semibold
                          text-white
                          transition-colors
                          group-hover:text-indigo-300
                        "
                      >
                        {config.companyInfo.phoneDisplay}
                      </strong>
                    </div>
                  </a>

                  {/* Email */}
                  {config.companyInfo.email && (
                    <a
                      href={`mailto:${config.companyInfo.email}`}
                      className="
                        group
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-indigo-500/15
                          text-indigo-300
                        "
                      >
                        <Mail className="h-4 w-4" />
                      </div>

                      <div>
                        <span className="block text-[11px] text-slate-400">
                          Email Enquiries
                        </span>

                        <strong
                          className="
                            mt-0.5
                            block
                            break-all
                            text-sm
                            font-semibold
                            text-white
                            transition-colors
                            group-hover:text-indigo-300
                          "
                        >
                          {config.companyInfo.email}
                        </strong>
                      </div>
                    </a>
                  )}

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-indigo-500/15
                        text-indigo-300
                      "
                    >
                      <MapPin className="h-4 w-4" />
                    </div>

                    <div>
                      <span className="block text-[11px] text-slate-400">
                        Headquarters
                      </span>

                      <span className="mt-0.5 block text-sm leading-6 text-white">
                        {config.companyInfo.address}
                      </span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-amber-500/10
                        text-amber-300
                      "
                    >
                      <Clock className="h-4 w-4" />
                    </div>

                    <div>
                      <span className="block text-[11px] text-slate-400">
                        Working Hours
                      </span>

                      <span className="mt-0.5 block text-sm text-white">
                        {config.companyInfo.workingHours}
                      </span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${config.companyInfo.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-7
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-emerald-500
                    px-5
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-emerald-600
                  "
                >
                  <MessageSquare className="h-4 w-4" />
                  WhatsApp Enquiry
                </a>
              </div>
            </div>

            {/* Service Area */}
            <div
              className="
                rounded-3xl
                border
                border-[#E2E2E2]
                bg-white
                p-6
              "
            >
              <div className="flex items-start gap-3">
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
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <h3
                    className="
                      text-sm
                      font-semibold
                      text-blue-900
                    "
                  >
                    Regional Service Coverage
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-xs
                      leading-6
                      text-[#585858]
                    "
                  >
                    Serving Gurugram, Delhi NCR, Rewari, Bawal, Noida, Greater
                    Noida, Faridabad and Jaipur.
                  </p>
                </div>
              </div>
            </div>

            {/* Small Trust Block */}
            <div
              className="
                grid
                grid-cols-2
                gap-3
              "
            >
              <div
                className="
                  rounded-2xl
                  border
                  border-[#E2E2E2]
                  bg-white
                  p-4
                "
              >
                <Sun className="h-5 w-5 text-indigo-600" />

                <p
                  className="
                    mt-3
                    text-sm
                    font-semibold
                    text-blue-900
                  "
                >
                  Solar Engineering
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#585858]">
                  Property-specific system sizing.
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-[#E2E2E2]
                  bg-white
                  p-4
                "
              >
                <ShieldCheck className="h-5 w-5 text-indigo-600" />

                <p
                  className="
                    mt-3
                    text-sm
                    font-semibold
                    text-blue-900
                  "
                >
                  EPC Support
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#585858]">
                  From assessment to installation.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT FORM
          ================================================== */}
          <div
            className="
              rounded-[28px]
              border
              border-[#E2E2E2]
              bg-white
              p-5
              shadow-[0_20px_60px_rgba(16,24,40,0.06)]
              sm:p-8
              lg:col-span-7
              lg:p-9
            "
          >
            {isSubmitted ? (
              /* =============================
                  SUCCESS
              ============================== */
              <div
                className="
                  flex
                  min-h-130
                  flex-col
                  items-center
                  justify-center
                  py-10
                  text-center
                "
              >
                <div
                  className="
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

                <p
                  className="
                    mt-7
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-emerald-600
                  "
                >
                  Request Submitted
                </p>

                <h3
                  className="
                    mt-2
                    max-w-lg
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-blue-900
                    sm:text-3xl
                  "
                >
                  We've received your solar enquiry.
                </h3>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-md
                    text-sm
                    leading-6
                    text-[#585858]
                  "
                >
                  Reference ID:{" "}
                  <strong className="font-mono font-semibold text-[#4E4E4E]">
                    {submittedLeadId}
                  </strong>
                  . Our team will review the information you submitted and
                  follow up with you.
                </p>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="
                    mt-7
                    inline-flex
                    items-center
                    justify-center
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
                  "
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              /* =============================
                  FORM
              ============================== */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Header */}
                <div>
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-widest
                      text-indigo-600
                    "
                  >
                    Solar Assessment
                  </p>

                  <h2
                    className="
                      mt-1
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-blue-900
                    "
                  >
                    Tell us about your property.
                  </h2>

                  <p
                    className="
                      mt-2
                      max-w-xl
                      text-sm
                      leading-6
                      text-[#585858]
                    "
                  >
                    Share your electricity and property details so we can
                    prepare a more relevant solar estimate.
                  </p>
                </div>

                <div
                  className="
                    border-t
                    border-[#E6E6E6]
                    pt-6
                  "
                >
                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-4
                      sm:grid-cols-2
                    "
                  >
                    {/* Name */}
                    <div>
                      <label className={labelClass}>Full Name *</label>

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
                        className={inputClass}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className={labelClass}>Phone Number *</label>

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
                        placeholder="10-digit Mobile"
                        className={inputClass}
                      />
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
                        placeholder="name@company.com"
                        className={inputClass}
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className={labelClass}>City / PIN Code *</label>

                      <input
                        type="text"
                        required
                        value={formData.cityPin}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            cityPin: e.target.value,
                          })
                        }
                        placeholder="e.g. Gurugram, 122001"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Energy Details */}
                <div>
                  <p
                    className="
                      mb-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.08em]
                      text-[#585858]
                    "
                  >
                    Energy Details
                  </p>

                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-4
                      sm:grid-cols-3
                    "
                  >
                    {/* Property */}
                    <div>
                      <label className={labelClass}>Property Type</label>

                      <select
                        value={formData.propertyType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            propertyType: e.target.value,
                          })
                        }
                        className={inputClass}
                      >
                        <option value="residential">Residential</option>

                        <option value="commercial">Commercial</option>

                        <option value="industrial">Industrial</option>
                      </select>
                    </div>

                    {/* Bill */}
                    <div>
                      <label className={labelClass}>Monthly Bill (₹)</label>

                      <input
                        type="number"
                        value={formData.monthlyBill}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            monthlyBill: e.target.value,
                          })
                        }
                        placeholder="e.g. 18000"
                        className={inputClass}
                      />
                    </div>

                    {/* System */}
                    <div>
                      <label className={labelClass}>System Preference</label>

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
                        <option value="On-Grid">On-Grid</option>

                        <option value="Off-Grid">Off-Grid</option>

                        <option value="Hybrid">Hybrid</option>

                        <option value="Not Sure">Not Sure</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Roof Area */}
                <div>
                  <label className={labelClass}>
                    Available Roof Area (sq.ft)
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

                {/* File */}
                <div>
                  <label className={labelClass}>
                    Upload Recent Electricity Bill
                    <span className="ml-1 font-normal text-[#9C9C9C]">
                      Optional PDF/Image
                    </span>
                  </label>

                  <div
                    className="
                      relative
                      cursor-pointer
                      rounded-2xl
                      border
                      border-dashed
                      border-[#E2E2E2]
                      bg-[#fbfcff]
                      p-5
                      text-center
                      transition-all
                      hover:border-indigo-300
                      hover:bg-indigo-50/40
                    "
                  >
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      className="
                        absolute
                        inset-0
                        cursor-pointer
                        opacity-0
                      "
                    />

                    <div
                      className="
                        mx-auto
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-indigo-50
                        text-indigo-600
                      "
                    >
                      <Upload className="h-5 w-5" />
                    </div>

                    <p className="mt-3 text-xs font-semibold text-[#4E4E4E]">
                      {formData.fileName
                        ? formData.fileName
                        : "Choose electricity bill"}
                    </p>

                    <p className="mt-1 text-[10px] text-[#9C9C9C]">
                      PDF, JPG or PNG
                    </p>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className={labelClass}>Additional Notes</label>

                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Mention roof structure, shadow concerns or any specific requirements..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
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
                  <Send className="h-4 w-4" />
                  Get Free Solar Assessment
                </button>

                <p
                  className="
                    flex
                    items-center
                    justify-center
                    gap-1.5
                    text-center
                    text-[10px]
                    text-[#9C9C9C]
                  "
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-indigo-500" />
                  Your details are used only for your solar assessment.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
