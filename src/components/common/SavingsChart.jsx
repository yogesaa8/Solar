import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  BarChart3,
  Table as TableIcon,
  TrendingUp,
  Info,
  ArrowUpRight,
} from "lucide-react";

export default function SavingsChart({ yearlyProjections = [] }) {
  const [activeView, setActiveView] = useState("bars");

  const [hoveredIdx, setHoveredIdx] = useState(null);

  /* =========================================
      FALLBACK DATA
  ========================================== */

  const defaultData = [
    {
      year: 1,
      withoutSolarCost: 180000,
      cumulativeSavings: 145000,
    },
    {
      year: 3,
      withoutSolarCost: 590000,
      cumulativeSavings: 480000,
    },
    {
      year: 5,
      withoutSolarCost: 1080000,
      cumulativeSavings: 920000,
    },
    {
      year: 10,
      withoutSolarCost: 2650000,
      cumulativeSavings: 2350000,
    },
    {
      year: 15,
      withoutSolarCost: 4680000,
      cumulativeSavings: 4250000,
    },
    {
      year: 20,
      withoutSolarCost: 7420000,
      cumulativeSavings: 6900000,
    },
    {
      year: 25,
      withoutSolarCost: 11200000,
      cumulativeSavings: 10800000,
    },
  ];

  /* =========================================
      DATA NORMALIZATION
  ========================================== */

  const displayData = useMemo(() => {
    if (!Array.isArray(yearlyProjections) || yearlyProjections.length === 0) {
      return defaultData;
    }

    const requiredYears = [1, 3, 5, 10, 15, 20, 25];

    const filtered = yearlyProjections.filter((item) =>
      requiredYears.includes(Number(item?.year)),
    );

    if (filtered.length === 0) {
      return defaultData;
    }

    return filtered
      .map((item) => ({
        ...item,

        year: Number(item?.year) || 0,

        withoutSolarCost: Number(item?.withoutSolarCost) || 0,

        cumulativeSavings: Number(item?.cumulativeSavings) || 0,
      }))
      .sort((a, b) => a.year - b.year);
  }, [yearlyProjections]);

  /* =========================================
      MAX VALUE
  ========================================== */

  const maxVal = useMemo(() => {
    const calculatedMax = Math.max(
      ...displayData.flatMap((item) => [
        Number(item.withoutSolarCost) || 0,
        Number(item.cumulativeSavings) || 0,
      ]),
    );

    return calculatedMax > 0 ? calculatedMax : 1000000;
  }, [displayData]);

  /* =========================================
      HELPERS
  ========================================== */

  const formatMoney = (value) => {
    const num = Number(value) || 0;

    if (num >= 10000000) {
      return `₹${(num / 10000000).toFixed(2)} Cr`;
    }

    if (num >= 100000) {
      return `₹${(num / 100000).toFixed(1)} L`;
    }

    return `₹${num.toLocaleString("en-IN")}`;
  };

  const peakReturn =
    displayData[displayData.length - 1]?.cumulativeSavings || 0;

  /*
    IMPORTANT:
    We use PIXEL HEIGHT instead of percentage.

    This fixes the invisible bar issue.
  */

  const chartBarHeight = 230;

  const getBarHeight = (value) => {
    const numberValue = Number(value) || 0;

    if (numberValue <= 0) {
      return 4;
    }

    return Math.max(8, (numberValue / maxVal) * chartBarHeight);
  };

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-[#E2E2E2]
        bg-white
        shadow-[0_24px_60px_rgba(16,24,40,0.06)]
      "
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-90 w-90 rounded-full bg-indigo-500/5 blur-[100px]" />

      {/* =================================
          HEADER
      ================================== */}

      <div className="relative z-10 p-5 sm:p-7 lg:p-8">
        <div
          className="
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Heading */}

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
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              25-Year Financial Model
            </div>

            <h3
              className="
                mt-2
                text-2xl
                font-semibold
                tracking-[-0.03em]
                text-blue-900
                sm:text-3xl
              "
            >
              Without Solar vs. With Solar Savings
            </h3>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-[#585858]
              "
            >
              Compare rising DISCOM electricity costs against long-term solar
              savings.
            </p>
          </div>

          {/* Tabs */}

          <div
            className="
              flex
              w-full
              overflow-x-auto
              rounded-2xl
              border
              border-[#E2E2E2]
              bg-[#f2f4f7]
              p-1
              lg:w-auto
            "
          >
            <button
              type="button"
              onClick={() => setActiveView("bars")}
              className={`
                flex
                shrink-0
                items-center
                gap-2
                rounded-xl
                px-4
                py-2.5
                text-xs
                font-semibold
                transition-all
                ${activeView === "bars"
                  ? "bg-blue-900 text-white shadow-sm"
                  : "text-[#4E4E4E] hover:text-blue-900"
                }
              `}
            >
              <BarChart3 className="h-4 w-4" />
              Dual Bar Graph
            </button>

            <button
              type="button"
              onClick={() => setActiveView("trend")}
              className={`
                flex
                shrink-0
                items-center
                gap-2
                rounded-xl
                px-4
                py-2.5
                text-xs
                font-semibold
                transition-all
                ${activeView === "trend"
                  ? "bg-blue-900 text-white shadow-sm"
                  : "text-[#4E4E4E] hover:text-blue-900"
                }
              `}
            >
              <TrendingUp className="h-4 w-4" />
              Trend Area
            </button>

            <button
              type="button"
              onClick={() => setActiveView("table")}
              className={`
                flex
                shrink-0
                items-center
                gap-2
                rounded-xl
                px-4
                py-2.5
                text-xs
                font-semibold
                transition-all
                ${activeView === "table"
                  ? "bg-blue-900 text-white shadow-sm"
                  : "text-[#4E4E4E] hover:text-blue-900"
                }
              `}
            >
              <TableIcon className="h-4 w-4" />
              Data Table
            </button>
          </div>
        </div>

        {/* =================================
            LEGEND
        ================================== */}

        <div
          className="
            mt-7
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
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
            "
          >
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-[#cbd5e1]" />

              <span className="text-xs font-medium text-[#4E4E4E]">
                Without Solar
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-indigo-600" />

              <span className="text-xs font-semibold text-blue-900">
                With Solar Savings
              </span>
            </div>
          </div>

          <div
            className="
              inline-flex
              w-fit
              items-center
              gap-1.5
              rounded-full
              border
              border-emerald-200
              bg-emerald-50
              px-3
              py-1.5
              text-[11px]
              font-semibold
              text-emerald-700
            "
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
            25-Year Return:
            {formatMoney(peakReturn)}
          </div>
        </div>
      </div>

      {/* =================================
          CONTENT
      ================================== */}

      <div
        className="
          border-t
          border-[#E6E6E6]
          px-5
          pb-6
          pt-7
          sm:px-7
          lg:px-8
        "
      >
        {/* =================================
            DUAL BAR GRAPH
        ================================== */}

        {activeView === "bars" && (
          <div className="overflow-x-auto pb-2">
            <div className="min-w-180">
              <div className="relative h-87.5">
                {/* Grid Lines */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-12
                    top-5
                    flex
                    flex-col
                    justify-between
                  "
                >
                  {[0, 1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="
                          border-t
                          border-dashed
                          border-[#E6E6E6]
                        "
                    />
                  ))}
                </div>

                {/* Bar Groups */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    top-0
                    flex
                    items-end
                    justify-between
                    gap-3
                    px-2
                  "
                >
                  {displayData.map((data, idx) => {
                    const withoutVal = Number(data.withoutSolarCost) || 0;

                    const savingsVal = Number(data.cumulativeSavings) || 0;

                    const withoutHeight = getBarHeight(withoutVal);

                    const savingsHeight = getBarHeight(savingsVal);

                    const isHovered = hoveredIdx === idx;

                    return (
                      <div
                        key={`${data.year}-${idx}`}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        className="
                            relative
                            flex
                            h-full
                            flex-1
                            cursor-pointer
                            flex-col
                            items-center
                            justify-end
                          "
                      >
                        {/* Tooltip */}

                        {isHovered && (
                          <div
                            className="
                                absolute
                                left-1/2
                                top-1
                                z-40
                                -translate-x-1/2
                                whitespace-nowrap
                                rounded-xl
                                bg-blue-900
                                px-3
                                py-2.5
                                text-[11px]
                                text-white
                                shadow-xl
                              "
                          >
                            <div className="mb-1 font-semibold">
                              Year {data.year}
                            </div>

                            <div className="text-slate-300">
                              Grid Cost:{" "}
                              <span className="font-semibold text-white">
                                {formatMoney(withoutVal)}
                              </span>
                            </div>

                            <div className="text-slate-300">
                              Solar Savings:{" "}
                              <span className="font-semibold text-indigo-300">
                                {formatMoney(savingsVal)}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Value */}

                        <div
                          className="
                              mb-2
                              whitespace-nowrap
                              text-[10px]
                              font-semibold
                              text-[#4E4E4E]
                              sm:text-[11px]
                            "
                        >
                          {formatMoney(savingsVal)}
                        </div>

                        {/* BAR AREA - FIXED HEIGHT */}

                        <div
                          className="
                              flex
                              h-57.5
                              w-full
                              items-end
                              justify-center
                              gap-1.5
                              sm:gap-2
                            "
                        >
                          {/* Without solar */}

                          <motion.div
                            initial={{
                              height: 0,
                            }}
                            whileInView={{
                              height: withoutHeight,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.6,
                              delay: idx * 0.05,
                            }}
                            className="
                                w-6
                                rounded-t-lg
                                bg-[#cbd5e1]
                                transition-colors
                                hover:bg-[#94a3b8]
                                sm:w-8
                              "
                          />

                          {/* With solar */}

                          <motion.div
                            initial={{
                              height: 0,
                            }}
                            whileInView={{
                              height: savingsHeight,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.6,
                              delay: idx * 0.05 + 0.08,
                            }}
                            className={`
                                w-6
                                rounded-t-lg
                                bg-linear-to-t
                                from-indigo-600
                                to-violet-500
                                shadow-sm
                                transition-all
                                sm:w-8
                                ${isHovered ? "scale-[1.03] shadow-md" : ""}
                              `}
                          />
                        </div>

                        {/* Year */}

                        <span
                          className={`
                              mt-3
                              text-xs
                              font-semibold
                              ${isHovered ? "text-indigo-600" : "text-[#4E4E4E]"
                            }
                            `}
                        >
                          Year {data.year}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================
            TREND GRAPH
        ================================== */}

        {activeView === "trend" && (
          <TrendChart
            data={displayData}
            maxVal={maxVal}
            formatMoney={formatMoney}
          />
        )}

        {/* =================================
            TABLE
        ================================== */}

        {activeView === "table" && (
          <div
            className="
              overflow-x-auto
              rounded-2xl
              border
              border-[#E6E6E6]
            "
          >
            <table className="w-full min-w-162.5 text-left">
              <thead className="border-b border-[#E6E6E6] bg-[#FAFAFA]">
                <tr>
                  <th className="px-4 py-3.5 text-[11px] font-semibold uppercase tracking-wider text-[#585858]">
                    Timeline
                  </th>

                  <th className="px-4 py-3.5 text-[11px] font-semibold uppercase tracking-wider text-[#585858]">
                    Without Solar
                  </th>

                  <th className="px-4 py-3.5 text-[11px] font-semibold uppercase tracking-wider text-[#585858]">
                    Solar Savings
                  </th>

                  <th className="px-4 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wider text-[#585858]">
                    Savings
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#f2f4f7]">
                {displayData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="transition-colors hover:bg-[#FAFAFA]"
                  >
                    <td className="px-4 py-4 text-sm font-semibold text-blue-900">
                      Year {row.year}
                    </td>

                    <td className="px-4 py-4 text-sm text-[#585858]">
                      {formatMoney(row.withoutSolarCost)}
                    </td>

                    <td className="px-4 py-4 text-sm font-semibold text-indigo-600">
                      {formatMoney(row.cumulativeSavings)}
                    </td>

                    <td className="px-4 py-4 text-right text-sm font-semibold text-emerald-600">
                      {formatMoney(row.cumulativeSavings)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* =================================
            FOOTER
        ================================== */}

        <div
          className="
            mt-7
            flex
            items-start
            justify-center
            gap-2
            border-t
            border-[#E6E6E6]
            pt-5
            text-center
            text-[10px]
            leading-5
            text-[#9C9C9C]
            sm:text-[11px]
          "
        >
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />

          <span>
            Financial projections account for 5% p.a. DISCOM electricity tariff
            inflation and 0.5% module output degradation.
          </span>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
    TREND CHART
===================================================== */

function TrendChart({ data, maxVal, formatMoney }) {
  const width = 760;
  const height = 300;

  const leftPadding = 40;
  const rightPadding = 40;
  const topPadding = 30;
  const bottomPadding = 50;

  const usableWidth = width - leftPadding - rightPadding;

  const usableHeight = height - topPadding - bottomPadding;

  const safeDivisor = Math.max(data.length - 1, 1);

  const getX = (index) => leftPadding + (index / safeDivisor) * usableWidth;

  const getY = (value) =>
    topPadding + usableHeight - ((Number(value) || 0) / maxVal) * usableHeight;

  const savingsPoints = data
    .map((item, index) => `${getX(index)},${getY(item.cumulativeSavings)}`)
    .join(" ");

  const gridPoints = data
    .map((item, index) => `${getX(index)},${getY(item.withoutSolarCost)}`)
    .join(" ");

  const areaPoints = `
    ${leftPadding},${height - bottomPadding}
    ${savingsPoints}
    ${width - rightPadding},${height - bottomPadding}
  `;

  return (
    <div className="overflow-x-auto pb-2">
      <div className="min-w-180">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-80 w-full">
          <defs>
            <linearGradient
              id="solarSavingsGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#DD9300" stopOpacity="0.22" />

              <stop offset="100%" stopColor="#DD9300" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid */}

          {[0, 1, 2, 3].map((item) => {
            const y = topPadding + (item / 3) * usableHeight;

            return (
              <line
                key={item}
                x1={leftPadding}
                y1={y}
                x2={width - rightPadding}
                y2={y}
                stroke="#E6E6E6"
                strokeDasharray="5 5"
              />
            );
          })}

          {/* Area */}

          <polygon points={areaPoints} fill="url(#solarSavingsGradient)" />

          {/* Grid Cost */}

          <polyline
            points={gridPoints}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="3"
            strokeDasharray="7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Savings */}

          <polyline
            points={savingsPoints}
            fill="none"
            stroke="#DD9300"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Points */}

          {data.map((item, index) => {
            const x = getX(index);

            const y = getY(item.cumulativeSavings);

            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r="5"
                  fill="white"
                  stroke="#DD9300"
                  strokeWidth="3"
                />

                <text
                  x={x}
                  y={y - 12}
                  textAnchor="middle"
                  fill="#4E4E4E"
                  fontSize="10"
                  fontWeight="600"
                >
                  {formatMoney(item.cumulativeSavings)}
                </text>
              </g>
            );
          })}

          {/* X labels */}

          {data.map((item, index) => (
            <text
              key={item.year}
              x={getX(index)}
              y={height - 15}
              textAnchor="middle"
              fill="#4E4E4E"
              fontSize="11"
              fontWeight="600"
            >
              Year {item.year}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}
