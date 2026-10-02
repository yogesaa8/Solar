import React from "react";
import { useLead } from "../../context/LeadContext";

import { Phone, MessageSquare, Calculator } from "lucide-react";

export default function MobileBottomBar() {
  const { config, openLeadModal } = useLead();

  const whatsappMessage = encodeURIComponent(
    "Hi AJ Solar Solutions, I would like to enquire about installing a solar rooftop system.",
  );

  const whatsappUrl = `https://wa.me/${config.companyInfo.whatsapp}?text=${whatsappMessage}`;

  return (
    <div
      className="
        lg:hidden
        fixed
        bottom-0
        left-0
        right-0
        z-40
        border-t
        border-[#E6E6E6]
        bg-white/95
        backdrop-blur-xl
        shadow-[0_-8px_30px_rgba(16,24,40,0.08)]
        px-3
        pt-2
        pb-[calc(env(safe-area-inset-bottom)+0.5rem)]
      "
    >
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        {/* Call */}
        <a
          href={`tel:${config.companyInfo.phone}`}
          className="
            group
            flex
            min-h-14.5
            flex-col
            items-center
            justify-center
            rounded-2xl
            border
            border-[#E6E6E6]
            bg-white
            px-2
            py-2.5
            text-[#4E4E4E]
            transition-all
            hover:bg-[#FAFAFA]
            active:scale-[0.98]
          "
        >
          <Phone
            className="
              mb-1
              h-4
              w-4
              text-indigo-600
              transition-transform
              group-hover:scale-105
            "
          />

          <span className="text-[11px] font-semibold">Call Us</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            flex
            min-h-14.5
            flex-col
            items-center
            justify-center
            rounded-2xl
            border
            border-emerald-200
            bg-emerald-50
            px-2
            py-2.5
            text-emerald-800
            transition-all
            hover:bg-emerald-100
            active:scale-[0.98]
          "
        >
          <MessageSquare
            className="
              mb-1
              h-4
              w-4
              text-emerald-600
              transition-transform
              group-hover:scale-105
            "
          />

          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>

        {/* Quote */}
        <button
          type="button"
          onClick={() => openLeadModal()}
          className="
            group
            flex
            min-h-14.5
            flex-col
            items-center
            justify-center
            rounded-2xl
            bg-indigo-600
            px-2
            py-2.5
            text-white
            shadow-sm
            transition-all
            hover:bg-indigo-700
            hover:shadow-md
            active:scale-[0.98]
          "
        >
          <Calculator
            className="
              mb-1
              h-4
              w-4
              transition-transform
              group-hover:scale-105
            "
          />

          <span className="text-[11px] font-semibold">Get Quote</span>
        </button>
      </div>
    </div>
  );
}
