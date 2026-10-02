import React, { useState } from "react";
import { useLead } from "../context/LeadContext";
import { PROJECTS_DATA } from "../data/solarData";

import {
  CheckCircle2,
  ArrowRight,
  Filter,
  MapPin,
  Zap,
  IndianRupee,
  FolderOpen,
} from "lucide-react";

export default function Projects() {
  const { setSelectedProject, openLeadModal } = useLead();

  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Industrial",
    "On-Grid",
    "Hybrid",
  ];

  const filteredProjects =
    filter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(
        (project) =>
          project.category === filter || project.systemType === filter,
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
            {/* Badge */}
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
              <FolderOpen className="size-4" />
              Execution Portfolio
            </div>

            {/* Heading */}
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
              Solar projects <span className="text-indigo-600">in action.</span>
            </h1>

            {/* Description */}
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
              Explore rooftop solar installations across residential, commercial
              and industrial applications.
            </p>

            {/* Trust row */}
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
                Residential
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                Commercial
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-indigo-500" />
                Industrial
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT PORTFOLIO
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
          {/* Header + Filter */}
          <div
            className="
              mb-10
              flex
              flex-col
              gap-6
              sm:mb-12
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-indigo-600
                "
              >
                Project Portfolio
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
                Explore completed solar projects.
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-[#585858]
                  sm:text-base
                "
              >
                Filter by property type or system configuration to explore
                relevant solar installations.
              </p>
            </div>

            {/* Filter Indicator */}
            <div
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-[#E2E2E2]
                bg-[#FAFAFA]
                px-4
                py-2
                text-xs
                font-semibold
                text-[#4E4E4E]
              "
            >
              <Filter className="size-4 text-indigo-600" />
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "Project" : "Projects"}
            </div>
          </div>

          {/* =================================================
              FILTER TABS
          ================================================== */}
          <div className="mb-10 overflow-x-auto pb-1">
            <div
              className="
                mx-auto
                flex
                w-max
                min-w-full
                items-center
                gap-2
                sm:justify-center
              "
            >
              {categories.map((category) => {
                const selected = filter === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setFilter(category)}
                    className={`
                      shrink-0
                      rounded-full
                      border
                      px-4
                      py-2.5
                      text-xs
                      font-semibold
                      transition-all
                      ${selected
                        ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                        : "border-[#E2E2E2] bg-white text-[#4E4E4E] hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================
              PROJECT GRID
          ================================================== */}
          {filteredProjects.length > 0 ? (
            <div
              className="
                grid
                grid-cols-1
                gap-7
                md:grid-cols-2
                lg:grid-cols-3
                lg:gap-8
              "
            >
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="
                    group
                    flex
                    flex-col
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-[#E2E2E2]
                    bg-white
                    shadow-[0_10px_35px_rgba(16,24,40,0.04)]
                    transition-all
                    hover:-translate-y-1
                    hover:border-indigo-200
                    hover:shadow-[0_22px_55px_rgba(16,24,40,0.09)]
                  "
                >
                  {/* =============================
                      IMAGE
                  ============================== */}
                  <div className="relative h-60 overflow-hidden sm:h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-[1.04]
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-linear-to-t
                        from-black/35
                        via-black/5
                        to-transparent
                      "
                    />

                    {/* Capacity */}
                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        border
                        border-white/60
                        bg-white/95
                        px-3
                        py-1.5
                        text-[11px]
                        font-semibold
                        text-[#4E4E4E]
                        shadow-sm
                        backdrop-blur-md
                      "
                    >
                      {project.capacity} • {project.systemType}
                    </div>

                    {/* Category */}
                    <span
                      className="
                        absolute
                        bottom-4
                        left-4
                        rounded-full
                        bg-blue-900/85
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-white
                        backdrop-blur-md
                      "
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* =============================
                      CONTENT
                  ============================== */}
                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      p-5
                      sm:p-6
                    "
                  >
                    {/* Location / Year */}
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-3
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          text-[11px]
                          font-semibold
                          text-indigo-600
                        "
                      >
                        <MapPin className="size-3.5" />

                        {project.city}
                      </div>

                      <span
                        className="
                          text-[11px]
                          font-medium
                          text-[#9C9C9C]
                        "
                      >
                        {project.completionYear}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mt-3
                        text-lg
                        font-semibold
                        leading-6
                        text-blue-900
                      "
                    >
                      {project.title}
                    </h3>

                    {/* Metrics */}
                    <div
                      className="
                        mt-5
                        grid
                        grid-cols-2
                        gap-3
                      "
                    >
                      {/* Generation */}
                      <div
                        className="
                          rounded-2xl
                          border
                          border-[#E6E6E6]
                          bg-[#FAFAFA]
                          p-3.5
                        "
                      >
                        <div
                          className="
                            mb-2
                            flex
                            size-8
                            items-center
                            justify-center
                            rounded-lg
                            bg-indigo-50
                            text-indigo-600
                          "
                        >
                          <Zap className="size-4" />
                        </div>

                        <p
                          className="
                            text-[10px]
                            font-medium
                            text-[#585858]
                          "
                        >
                          Annual Generation
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            font-semibold
                            text-blue-900
                          "
                        >
                          {project.annualGeneration}
                        </p>
                      </div>

                      {/* Savings */}
                      <div
                        className="
                          rounded-2xl
                          border
                          border-emerald-100
                          bg-emerald-50/60
                          p-3.5
                        "
                      >
                        <div
                          className="
                            mb-2
                            flex
                            size-8
                            items-center
                            justify-center
                            rounded-lg
                            bg-emerald-100
                            text-emerald-700
                          "
                        >
                          <IndianRupee className="size-4" />
                        </div>

                        <p
                          className="
                            text-[10px]
                            font-medium
                            text-emerald-700
                          "
                        >
                          Annual Savings
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            font-semibold
                            text-emerald-700
                          "
                        >
                          {project.annualSavings}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-5">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="
                          group/button
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-2
                          rounded-full
                          border
                          border-[#E2E2E2]
                          bg-white
                          px-5
                          py-3
                          text-xs
                          font-semibold
                          text-[#4E4E4E]
                          transition-all
                          hover:border-indigo-200
                          hover:bg-indigo-50
                          hover:text-indigo-700
                        "
                      >
                        View Case Study
                        <ArrowRight
                          className="
                            size-3.5
                            transition-transform
                            group-hover/button:translate-x-1
                          "
                        />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* =================================================
                EMPTY STATE
            ================================================== */
            <div
              className="
                rounded-[28px]
                border
                border-dashed
                border-[#E2E2E2]
                bg-[#fbfcff]
                px-6
                py-16
                text-center
              "
            >
              <Filter className="mx-auto size-7 text-[#9C9C9C]" />

              <h3
                className="
                  mt-4
                  text-lg
                  font-semibold
                  text-blue-900
                "
              >
                No matching projects found
              </h3>

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
                Try selecting another project category or system type.
              </p>

              <button
                type="button"
                onClick={() => setFilter("All")}
                className="
                  mt-5
                  rounded-full
                  bg-indigo-600
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-indigo-700
                "
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          TRUST / EXECUTION BAND
      ====================================================== */}
      <section
        className="
          border-b
          border-[#E6E6E6]
          bg-[#FAFAFA]
          py-12
          sm:py-14
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-6
            px-4
            sm:grid-cols-3
            sm:px-6
            lg:px-8
          "
        >
          <div className="text-center">
            <div
              className="
                mx-auto
                flex
                size-10
                items-center
                justify-center
                rounded-xl
                bg-indigo-50
                text-indigo-600
              "
            >
              <CheckCircle2 className="size-5" />
            </div>

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-blue-900
              "
            >
              Site Assessment
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#585858]
              "
            >
              Roof, load and electrical conditions are reviewed before
              execution.
            </p>
          </div>

          <div className="text-center">
            <div
              className="
                mx-auto
                flex
                size-10
                items-center
                justify-center
                rounded-xl
                bg-violet-50
                text-violet-600
              "
            >
              <Zap className="size-5" />
            </div>

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-blue-900
              "
            >
              Engineering Design
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#585858]
              "
            >
              System capacity and equipment are matched to project requirements.
            </p>
          </div>

          <div className="text-center">
            <div
              className="
                mx-auto
                flex
                size-10
                items-center
                justify-center
                rounded-xl
                bg-emerald-50
                text-emerald-600
              "
            >
              <IndianRupee className="size-5" />
            </div>

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-blue-900
              "
            >
              Measurable Savings
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#585858]
              "
            >
              Project performance can be evaluated against expected generation
              and savings.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section
        className="
          bg-white
          py-16
          sm:py-20
          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              bg-linear-to-r
              from-indigo-600
              via-[#DD9900]
              to-violet-600
              px-5
              py-12
              text-center
              text-white
              shadow-[0_24px_70px_rgba(221,147,0,0.20)]
              sm:px-10
              sm:py-14
              lg:px-16
              lg:py-16
            "
          >
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0">
              <div
                className="
                  absolute
                  -left-24
                  -top-24
                  size-64
                  rounded-full
                  bg-white/10
                  blur-3xl
                "
              />

              <div
                className="
                  absolute
                  -bottom-28
                  -right-20
                  size-72
                  rounded-full
                  bg-violet-300/20
                  blur-3xl
                "
              />
            </div>

            <div className="relative mx-auto max-w-3xl">
              <CheckCircle2 className="mx-auto size-6 text-indigo-100" />

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-[-0.03em]
                  sm:text-4xl
                "
              >
                Want a similar solar installation?
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-indigo-100
                  sm:text-base
                "
              >
                Share your property details and our team can evaluate suitable
                solar capacity, roof feasibility and projected savings.
              </p>

              <button
                type="button"
                onClick={() => openLeadModal()}
                className="
                  group
                  mt-8
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-white
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-indigo-600
                  shadow-sm
                  transition-all
                  hover:bg-indigo-50
                  sm:w-auto
                "
              >
                Get Free Solar Assessment
                <ArrowRight
                  className="
                    size-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
