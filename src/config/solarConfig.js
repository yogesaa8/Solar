// Solar Configuration & Official Government Subsidy Engine (PM Surya Ghar: Muft Bijli Yojana)

export const DEFAULT_SOLAR_CONFIG = {
  companyInfo: {
    name: "AJ Solar Solutions Rewari Haryana",
    tagline: "Solar energy company in Rewari, Haryana",
    phone: "+91 94165 93467",
    phoneDisplay: "094165 93467",
    whatsapp: "919416593467",
    email: "",
    address: "BO- Shop No 3328/36, Nr Metro Hospital, Azad Chowk Circular Road, HO- Khijuri, Rewari, Haryana 123401",
    workingHours: "Closed · Opens 9:30 AM Wednesday",
    experienceYears: 12,
    projectsCompleted: 850,
    mwInstalled: 45,
    savingsGeneratedCr: 85,
    co2ReducedTonnes: 52000,
  },

  // Electricity Tariff per Unit (kWh) in INR
  tariffs: {
    residential: 7.50,
    commercial: 9.50,
    industrial: 8.50,
  },

  // Monthly Generation per 1 kW capacity (kWh / units)
  monthlyGenerationPerKW: 120, // ~4 units/day/kW -> 120 units/month/kW

  // Rooftop area needed per kW in sq.ft
  sqFtPerKW: 85,

  // Approximate turnkey system cost per kW in INR
  costPerKW: {
    residential: 52000,
    commercial: 44000,
    industrial: 38000,
  },

  // Target Solar Offset (% of monthly bill covered by solar)
  defaultOffsetPercent: 85,

  // Financial Projection Parameters
  annualTariffInflation: 0.05, // 5% tariff rise per year
  annualPanelDegradation: 0.005, // 0.5% degradation per year
  co2PerKWh: 0.82, // 0.82 kg CO2 per kWh generated

  disclaimerText: "Indicative estimate only. Central & State subsidies apply to residential rooftop connections under PM Surya Ghar rules. Final system size, generation, cost and savings depend on site conditions, electricity tariff, DISCOM rules, equipment and engineering assessment."
};

/**
 * PM Surya Ghar: Muft Bijli Yojana Central Government Subsidy Calculator
 * Rules (2024-2026):
 * - Up to 2 kW: ₹30,000 per kW (Max ₹60,000 for 2 kW)
 * - 2 kW to 3 kW: Additional ₹18,000 for 3rd kW (Max ₹78,000 for 3 kW+)
 * - Above 3 kW: Capped at ₹78,000 maximum Central Subsidy
 */
export function calculatePMSuryaGharSubsidy(capacityKW, propertyType = 'residential') {
  if (propertyType.toLowerCase() !== 'residential') return 0;

  const kw = Math.max(0, parseFloat(capacityKW) || 0);
  if (kw <= 0) return 0;

  if (kw <= 1) return 30000;
  if (kw <= 2) return Math.round(kw * 30000);
  if (kw <= 3) return 60000 + Math.round((kw - 2) * 18000);
  return 78000; // Capped at ₹78,000 for residential homes
}

/**
 * State Government Additional Subsidies & Benefits (Delhi, Haryana, UP)
 */
export const STATE_SUBSIDY_DATA = {
  delhi: {
    stateName: "Delhi NCR",
    discom: "BSES Rajdhani / BSES Yamuna / TPDDL",
    gbi: "₹3.00 / unit Generation Based Incentive for 5 Years",
    additionalGrant: "100% Waiver on DISCOM Net Metering Application Fees",
    notes: "Delhi Solar Policy 2024 offers ₹3/unit GBI directly credited to consumer bank accounts."
  },
  haryana: {
    stateName: "Haryana (Gurugram / Rewari / Faridabad)",
    discom: "DHBVN / UHBVN",
    gbi: "₹1.00 / unit Solar Generation Incentive",
    additionalGrant: "Additional ₹15,000 grant for Rural & Housing Societies",
    notes: "Direct DISCOM bill adjustment for exported solar units."
  },
  up: {
    stateName: "Uttar Pradesh (Noida / Ghaziabad)",
    discom: "PVVVN / UPNEDA",
    gbi: "₹15,000 per kW Additional State Subsidy (Max ₹30,000)",
    additionalGrant: "State NEDA subsidy stacked on top of PM Surya Ghar",
    notes: "UP State Govt provides extra ₹15,000/kW state subsidy over central PM Surya Ghar."
  }
};

/**
 * Complete Solar Estimate calculation incorporating PM Surya Ghar subsidy
 */
export function calculateSolarEstimate(inputs, config = DEFAULT_SOLAR_CONFIG) {
  const bill = parseFloat(inputs.monthlyBill) || 0;
  const propertyType = (inputs.propertyType || 'residential').toLowerCase();
  const availableArea = parseFloat(inputs.areaSqFt) || 0;
  const offsetPercent = (parseFloat(inputs.offsetPercent) || config.defaultOffsetPercent) / 100;

  const tariff = config.tariffs[propertyType] || config.tariffs.residential;
  const costKW = config.costPerKW[propertyType] || config.costPerKW.residential;

  // Monthly consumption in kWh
  const monthlyEnergyConsumption = bill > 0 ? bill / tariff : 0;

  // Required monthly energy target
  const targetMonthlyEnergy = monthlyEnergyConsumption * offsetPercent;

  // Energy-based system size required (kW)
  const energyBasedKW = targetMonthlyEnergy > 0
    ? targetMonthlyEnergy / config.monthlyGenerationPerKW
    : 0;

  // If rooftop area provided, calculate max system size allowed by area
  const areaBasedKW = availableArea > 0 ? availableArea / config.sqFtPerKW : Infinity;

  // Recommended capacity (rounded to 1 decimal)
  let rawCapacity = Math.min(energyBasedKW, areaBasedKW);
  if (bill > 0 && rawCapacity < 1) rawCapacity = 1;
  const recommendedCapacity = Math.round(rawCapacity * 10) / 10;

  // Expected Generations
  const monthlyGeneration = Math.round(recommendedCapacity * config.monthlyGenerationPerKW);
  const annualGeneration = Math.round(monthlyGeneration * 12);

  // Financial Estimates
  const monthlySavings = Math.round(monthlyGeneration * tariff);
  const annualSavings = monthlySavings * 12;
  const estimatedSystemCost = Math.round(recommendedCapacity * costKW);

  // PM Surya Ghar Subsidy
  const pmSuryaGharSubsidy = calculatePMSuryaGharSubsidy(recommendedCapacity, propertyType);
  const netEffectiveCost = Math.max(0, estimatedSystemCost - pmSuryaGharSubsidy);

  // Simple Payback period (years) calculated on net cost after subsidy
  const paybackYears = annualSavings > 0
    ? Math.round((netEffectiveCost / annualSavings) * 10) / 10
    : 0;

  // 25-Year Cumulative Savings Calculation with degradation & inflation
  let cumulativeSavings = 0;
  const yearlyProjections = [];

  let currentTariff = tariff;
  let currentGeneration = annualGeneration;

  for (let year = 1; year <= 25; year++) {
    const yearSavings = Math.round(currentGeneration * currentTariff);
    cumulativeSavings += yearSavings;

    yearlyProjections.push({
      year,
      generation: Math.round(currentGeneration),
      tariff: Math.round(currentTariff * 100) / 100,
      annualSavings: yearSavings,
      cumulativeSavings: Math.round(cumulativeSavings),
      withoutSolarCost: Math.round((monthlyEnergyConsumption * 12) * currentTariff * year)
    });

    // Escalation & Degradation
    currentTariff *= (1 + config.annualTariffInflation);
    currentGeneration *= (1 - config.annualPanelDegradation);
  }

  // Estimated CO2 Reduction (Tonnes per year)
  const co2ReductionTonnes = Math.round((annualGeneration * config.co2PerKWh) / 1000 * 10) / 10;

  // Required Panels count (assuming ~550W TOPCon modern panels)
  const panelsCount = Math.ceil((recommendedCapacity * 1000) / 550);

  // Rooftop Area Required
  const areaRequired = Math.round(recommendedCapacity * config.sqFtPerKW);

  return {
    recommendedCapacity,
    monthlyGeneration,
    annualGeneration,
    monthlySavings,
    annualSavings,
    savings25Years: Math.round(cumulativeSavings),
    net25YearBenefit: Math.round(cumulativeSavings - netEffectiveCost),
    estimatedSystemCost,
    pmSuryaGharSubsidy,
    netEffectiveCost,
    paybackYears: paybackYears ? `${paybackYears} - ${(paybackYears + 0.5).toFixed(1)}` : '3.0 - 4.0',
    co2ReductionTonnes,
    panelsCount,
    areaRequired,
    yearlyProjections,
    tariffUsed: tariff
  };
}
