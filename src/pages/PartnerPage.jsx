import React, { useState } from "react";
import { useLead } from "../context/LeadContext";

import {
  Users,
  CheckCircle2,
  Building2,
  Handshake,
  Wrench,
  PackageCheck,
  Landmark,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function PartnerPage() {
  const { addLead } = useLead();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    businessType: "Installer",
    experienceYears: "3",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.phone || formData.phone.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    addLead({
      fullName: formData.name,
      phone: formData.phone,
      email: formData.email || "N/A",
      cityPin: formData.location || "N/A",
      propertyType: "B2B Partner",
      message: `Partner App [${formData.businessType}] - Company: ${formData.company || "N/A"
        }, Exp: ${formData.experienceYears} yrs. Note: ${formData.message || "N/A"
        }`,
    });

    setSubmitted(true);
  };

  const partnerTypes = [
    {
      icon: Wrench,
      title: "Solar Installers & Sub-Contractors",
      description:
        "Access execution opportunities, standardized engineering BOQs and structured project coordination.",
      iconClass: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: Handshake,
      title: "Dealers & Channel Partners",
      description:
        "Collaborate on qualified lead referrals and solar EPC opportunities in your local market.",
      iconClass: "bg-violet-50 text-violet-600",
    },
    {
      icon: PackageCheck,
      title: "Equipment Manufacturers & Suppliers",
      description:
        "Support our project pipeline with modules, inverters, mounting structures and other solar equipment.",
      iconClass: "bg-amber-50 text-amber-600",
    },
    {
      icon: Landmark,
      title: "Financing & NBFC Partners",
      description:
        "Enable solar financing options for residential and commercial customers.",
      iconClass: "bg-emerald-50 text-emerald-600",
    },
  ];

  const inputClass =
    "w-full rounded-xl border border-[#E2E2E2] bg-white px-4 py-3 text-sm text-blue-900 outline-none transition-all placeholder:text-[#9C9C9C] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10";

  const labelClass = "mb-2 block text-xs font-semibold text-[#4E4E4E]";

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
              <Handshake className="size-4" />
              B2B Collaboration
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
              Grow with <span className="text-indigo-600">solar.</span>
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
              Partner with AJ Solar Solutions to build stronger execution,
              distribution, supply and financing networks across North India.
            </p>

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
                Installers
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                Dealers
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                Suppliers
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                Finance Partners
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNER TYPES
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
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-indigo-600
              "
            >
              Partnership Network
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
              Different ways to work with us.
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
              We collaborate with execution, distribution, equipment and
              financing partners across the solar value chain.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {partnerTypes.map((partner, index) => {
              const Icon = partner.icon;

              return (
                <div
                  key={partner.title}
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
                    className={`
                      mb-5
                      flex
                      size-11
                      items-center
                      justify-center
                      rounded-xl
                      ${partner.iconClass}
                    `}
                  >
                    <Icon className="size-5" />
                  </div>

                  <p
                    className="
                      mb-2
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-[#9C9C9C]
                    "
                  >
                    Partner 0{index + 1}
                  </p>

                  <h3
                    className="
                      text-lg
                      font-semibold
                      leading-6
                      text-blue-900
                    "
                  >
                    {partner.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-[#585858]
                    "
                  >
                    {partner.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNER APPLICATION
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
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-12
              lg:gap-10
            "
          >
            {/* =============================
                LEFT INFO
            ============================== */}
            <div className="lg:col-span-5">
              <div
                className="
                  relative
                  h-full
                  overflow-hidden
                  rounded-[28px]
                  bg-blue-900
                  p-6
                  text-white
                  shadow-[0_24px_70px_rgba(16,24,40,0.15)]
                  sm:p-8
                "
              >
                <div className="pointer-events-none absolute inset-0">
                  <div
                    className="
                      absolute
                      -right-24
                      -top-24
                      size-64
                      rounded-full
                      bg-indigo-500/20
                      blur-[90px]
                    "
                  />
                </div>

                <div className="relative">
                  <div
                    className="
                      flex
                      size-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-indigo-500/15
                      text-indigo-300
                    "
                  >
                    <Users className="size-5" />
                  </div>

                  <p
                    className="
                      mt-7
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-indigo-300
                    "
                  >
                    Partnership Application
                  </p>

                  <h2
                    className="
                      mt-2
                      text-3xl
                      font-semibold
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    Build solar opportunities together.
                  </h2>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-slate-300
                    "
                  >
                    Tell us about your business, location and experience. Our
                    team can review where a partnership may fit within our EPC
                    network.
                  </p>

                  <div
                    className="
                      mt-8
                      space-y-4
                      border-t
                      border-white/10
                      pt-7
                    "
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-300" />

                      <p className="text-sm text-slate-300">
                        Project execution collaboration
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-300" />

                      <p className="text-sm text-slate-300">
                        Lead and channel partnerships
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-300" />

                      <p className="text-sm text-slate-300">
                        Equipment and procurement network
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-300" />

                      <p className="text-sm text-slate-300">
                        Solar financing ecosystem
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =============================
                FORM
            ============================== */}
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
              {submitted ? (
                <div
                  className="
                    flex
                    min-h-130
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >
                  <div
                    className="
                      flex
                      size-16
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-50
                      text-emerald-600
                      ring-8
                      ring-emerald-50/60
                    "
                  >
                    <CheckCircle2 className="size-8" />
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
                    Application Submitted
                  </p>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-blue-900
                    "
                  >
                    Partner application received.
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
                    Thank you, {formData.name}. Our partnership team will review
                    your information and get in touch if there is a relevant
                    collaboration opportunity.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="
                      mt-7
                      rounded-full
                      bg-indigo-600
                      px-7
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      transition-colors
                      hover:bg-indigo-700
                    "
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
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
                      Become a Partner
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
                      Partner application
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
                      Share your basic business details and we'll review the
                      potential collaboration.
                    </p>
                  </div>

                  <div
                    className="
                      border-t
                      border-[#E6E6E6]
                      pt-6
                    "
                  >
                    {/* Name + Company */}
                    <div
                      className="
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                      "
                    >
                      <div>
                        <label className={labelClass}>Your Name *</label>

                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>Company Name</label>

                        <div className="relative">
                          <Building2 className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#9C9C9C]" />

                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                            placeholder="Company / Business"
                            className={`${inputClass} pl-10`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone + Email */}
                    <div
                      className="
                        mt-4
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                      "
                    >
                      <div>
                        <label className={labelClass}>Phone Number *</label>

                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#9C9C9C]" />

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
                            placeholder="10-digit mobile"
                            className={`${inputClass} pl-10`}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>
                          Email
                          <span className="ml-1 font-normal text-[#9C9C9C]">
                            Optional
                          </span>
                        </label>

                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#9C9C9C]" />

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
                            className={`${inputClass} pl-10`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Partnership Details */}
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
                      Partnership Details
                    </p>

                    <div
                      className="
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-3
                      "
                    >
                      {/* Location */}
                      <div>
                        <label className={labelClass}>Location</label>

                        <div className="relative">
                          <MapPin className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#9C9C9C]" />

                          <input
                            type="text"
                            value={formData.location}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                location: e.target.value,
                              })
                            }
                            placeholder="e.g. Gurugram"
                            className={`${inputClass} pl-10`}
                          />
                        </div>
                      </div>

                      {/* Partner Type */}
                      <div>
                        <label className={labelClass}>Partner Type</label>

                        <select
                          value={formData.businessType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              businessType: e.target.value,
                            })
                          }
                          className={inputClass}
                        >
                          <option value="Installer">Solar Installer</option>

                          <option value="Dealer">Dealer / Referral</option>

                          <option value="Supplier">Equipment Supplier</option>

                          <option value="Financier">Financing Partner</option>
                        </select>
                      </div>

                      {/* Experience */}
                      <div>
                        <label className={labelClass}>Experience</label>

                        <input
                          type="number"
                          min="0"
                          value={formData.experienceYears}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              experienceYears: e.target.value,
                            })
                          }
                          placeholder="Years"
                          className={inputClass}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className={labelClass}>
                      Tell us about your business
                      <span className="ml-1 font-normal text-[#9C9C9C]">
                        Optional
                      </span>
                    </label>

                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      placeholder="Tell us about your services, coverage area, existing solar work or how you want to collaborate..."
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
                    Submit Partner Application
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
