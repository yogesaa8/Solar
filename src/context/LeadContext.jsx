import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DEFAULT_SOLAR_CONFIG } from '../config/solarConfig';

const LeadContext = createContext();

const PAGE_ROUTES = {
  home: '/',
  subsidies: '/subsidies',
  solutions: '/solutions',
  'res-solar': '/solar/residential',
  'com-solar': '/solar/commercial',
  'ind-solar': '/solar/industrial',
  about: '/about',
  services: '/services',
  products: '/products',
  projects: '/projects',
  calculator: '/calculator',
  resources: '/resources',
  partner: '/partner',
  contact: '/contact',
  'city-gurugram': '/solar-in-gurugram',
  'city-delhi': '/solar-in-delhi',
  'city-rewari': '/solar-in-rewari',
};

const ROUTE_PAGES = Object.fromEntries(
  Object.entries(PAGE_ROUTES).map(([page, path]) => [path, page]),
);

function getRoutePath(page, param = null) {
  if (page === 'city' && param) {
    return `/solar-city/${encodeURIComponent(param)}`;
  }

  return PAGE_ROUTES[page] ?? null;
}

export function LeadProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation state is derived from React Router so the URL and UI stay in sync.
  const normalizedPath = location.pathname.replace(/\/+$/, '') || '/';
  const cityMatch = normalizedPath.match(/^\/solar-city\/([^/]+)$/);
  const activePage = cityMatch
    ? 'city'
    : (ROUTE_PAGES[normalizedPath] ?? 'home');
  const pageParam = cityMatch ? decodeURIComponent(cityMatch[1]) : null;

  // Global Config (Loads from localStorage if customized via Admin)
  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('surya_solar_config');
      if (!saved) return DEFAULT_SOLAR_CONFIG;

      const savedConfig = JSON.parse(saved);
      if (savedConfig?.companyInfo?.name === 'SuryaSpark Solar EPC') {
        return {
          ...savedConfig,
          companyInfo: DEFAULT_SOLAR_CONFIG.companyInfo,
        };
      }

      return savedConfig;
    } catch (e) {
      return DEFAULT_SOLAR_CONFIG;
    }
  });

  // Submitted Leads List (Persisted in localStorage)
  const [leads, setLeads] = useState(() => {
    try {
      const saved = localStorage.getItem('surya_solar_leads');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Lead Modal Controls
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalInitialData, setLeadModalInitialData] = useState({});

  // Active Project Detail Modal State
  const [selectedProject, setSelectedProject] = useState(null);

  // Active Article View Modal State
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Save config changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('surya_solar_config', JSON.stringify(config));
    } catch (e) {
      console.error("Failed to save config:", e);
    }
  }, [config]);

  // Save leads to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('surya_solar_leads', JSON.stringify(leads));
    } catch (e) {
      console.error("Failed to save leads:", e);
    }
  }, [leads]);

  // Migrate bookmarked links from the previous hash-based navigation.
  useEffect(() => {
    if (!window.location.hash.startsWith('#/')) return;

    const [page, param] = window.location.hash.slice(2).split('/');
    const route = getRoutePath(page || 'home', param || null);

    if (route) navigate(route, { replace: true });
  }, [navigate]);

  const navigateTo = (page, param = null) => {
    const route = getRoutePath(page, param);

    if (!route) {
      console.warn(`No route is configured for page: ${page}`);
      return;
    }

    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLeadModal = (initialData = {}) => {
    setLeadModalInitialData(initialData);
    setIsLeadModalOpen(true);
  };

  const closeLeadModal = () => {
    setIsLeadModalOpen(false);
    setLeadModalInitialData({});
  };

  const addLead = (newLeadData) => {
    const newEntry = {
      id: `LEAD-${Date.now()}`,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      status: 'New',
      ...newLeadData
    };
    setLeads(prev => [newEntry, ...prev]);
    return newEntry;
  };

  const updateConfig = (newConfig) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const resetConfig = () => {
    setConfig(DEFAULT_SOLAR_CONFIG);
  };

  const clearLeads = () => {
    setLeads([]);
  };

  return (
    <LeadContext.Provider value={{
      activePage,
      pageParam,
      navigateTo,
      config,
      updateConfig,
      resetConfig,
      leads,
      addLead,
      clearLeads,
      isLeadModalOpen,
      openLeadModal,
      closeLeadModal,
      leadModalInitialData,
      selectedProject,
      setSelectedProject,
      selectedArticle,
      setSelectedArticle
    }}>
      {children}
    </LeadContext.Provider>
  );
}

export function useLead() {
  return useContext(LeadContext);
}
