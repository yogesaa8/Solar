import React from 'react';
import { useLead } from '../../context/LeadContext';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton({ calculatedKW = null }) {
  const { config } = useLead();

  const message = calculatedKW
    ? `Hi AJ Solar Solutions, I used your solar calculator. My estimated solar requirement is approximately ${calculatedKW} kW. I'd like a detailed engineering assessment.`
    : `Hi AJ Solar Solutions, I'm interested in installing a solar rooftop system and would like a free site assessment.`;

  const whatsappUrl = `https://wa.me/${config.companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 sm:bottom-8 right-5 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-105"
      aria-label="Chat with Solar Expert on WhatsApp"
      title="Chat with Solar Expert on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-semibold px-0 group-hover:px-2">
        Chat with Expert
      </span>
    </a>
  );
}
