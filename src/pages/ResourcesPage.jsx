import React, { useState } from "react";
import { useLead } from "../context/LeadContext";
import { BLOG_ARTICLES } from "../data/solarData";

import {
  BookOpen,
  Clock,
  ArrowRight,
  Newspaper,
  Lightbulb,
  Landmark,
  Search,
} from "lucide-react";

export default function ResourcesPage() {
  const { setSelectedArticle } = useLead();

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Commercial Solar",
    "Solar Technology",
    "Government Policies",
  ];

  const filteredArticles =
    activeCategory === "All"
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter(
        (article) =>
          article.category === activeCategory
      );

  const categoryIcon = (category) => {
    if (category === "Commercial Solar") {
      return Newspaper;
    }

    if (category === "Solar Technology") {
      return Lightbulb;
    }

    if (category === "Government Policies") {
      return Landmark;
    }

    return BookOpen;
  };

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
        {/* Background glow */}
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
              <BookOpen className="size-4" />

              Knowledge Center
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
              Solar knowledge for{" "}
              <span className="text-indigo-600">
                better decisions.
              </span>
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
              Explore practical guides on solar technology, project economics,
              net metering, government policies and commercial solar planning.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLES
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
          {/* Header */}
          <div
            className="
              mb-8
              flex
              flex-col
              gap-5
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
                Solar Resources
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
                Guides, insights & updates.
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
                Browse articles based on the solar topic most relevant to you.
              </p>
            </div>

            {/* Result Count */}
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
              <Search className="size-4 text-indigo-600" />

              {filteredArticles.length}{" "}
              {filteredArticles.length === 1
                ? "Article"
                : "Articles"}
            </div>
          </div>

          {/* =================================================
              CATEGORY FILTERS
          ================================================== */}
          <div className="mb-10 overflow-x-auto pb-1">
            <div
              className="
                flex
                w-max
                min-w-full
                items-center
                gap-2
                sm:justify-center
              "
            >
              {categories.map((category) => {
                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`
                      shrink-0
                      rounded-full
                      border
                      px-4
                      py-2.5
                      text-xs
                      font-semibold
                      transition-all
                      ${isActive
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
              ARTICLES GRID
          ================================================== */}
          {filteredArticles.length > 0 ? (
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
              {filteredArticles.map(
                (article) => {
                  const CategoryIcon =
                    categoryIcon(
                      article.category
                    );

                  return (
                    <article
                      key={article.id}
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
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
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
                            from-black/30
                            via-transparent
                            to-transparent
                          "
                        />

                        {/* Category */}
                        <div
                          className="
                            absolute
                            left-4
                            top-4
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-full
                            border
                            border-white/60
                            bg-white/95
                            px-3
                            py-1.5
                            text-[10px]
                            font-semibold
                            text-[#4E4E4E]
                            shadow-sm
                            backdrop-blur-sm
                          "
                        >
                          <CategoryIcon className="size-3.5 text-indigo-600" />

                          {article.category}
                        </div>
                      </div>

                      {/* =============================
                          ARTICLE CONTENT
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
                        {/* Metadata */}
                        <div
                          className="
                            flex
                            flex-wrap
                            items-center
                            gap-x-3
                            gap-y-1
                            text-[11px]
                            font-medium
                            text-[#9C9C9C]
                          "
                        >
                          <span
                            className="
                              flex
                              items-center
                              gap-1.5
                            "
                          >
                            <Clock className="size-3.5" />

                            {article.readTime}
                          </span>

                          <span className="size-1 rounded-full bg-[#E2E2E2]" />

                          <span>
                            {article.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="
                            mt-4
                            text-xl
                            font-semibold
                            leading-7
                            tracking-[-0.02em]
                            text-blue-900
                          "
                        >
                          {article.title}
                        </h3>

                        {/* Excerpt */}
                        <p
                          className="
                            mt-3
                            text-sm
                            leading-6
                            text-[#585858]
                          "
                        >
                          {article.excerpt}
                        </p>

                        {/* CTA */}
                        <div className="mt-auto pt-6">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedArticle(
                                article
                              )
                            }
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
                            Read Full Article

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
                  );
                }
              )}
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
              <BookOpen className="mx-auto size-7 text-[#9C9C9C]" />

              <h3
                className="
                  mt-4
                  text-lg
                  font-semibold
                  text-blue-900
                "
              >
                No articles found
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
                There are currently no articles
                available in this category.
              </p>

              <button
                type="button"
                onClick={() =>
                  setActiveCategory("All")
                }
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
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          KNOWLEDGE STRIP
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
          {/* Technology */}
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
              <Lightbulb className="size-5" />
            </div>

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-blue-900
              "
            >
              Solar Technology
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#585858]
              "
            >
              Understand modules, inverters,
              system design and solar performance.
            </p>
          </div>

          {/* Commercial */}
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
              <Newspaper className="size-5" />
            </div>

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-blue-900
              "
            >
              Solar Economics
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#585858]
              "
            >
              Learn about system costs, savings,
              ROI and commercial energy planning.
            </p>
          </div>

          {/* Policies */}
          <div className="text-center">
            <div
              className="
                mx-auto
                flex
                size-10
                items-center
                justify-center
                rounded-xl
                bg-amber-50
                text-amber-600
              "
            >
              <Landmark className="size-5" />
            </div>

            <p
              className="
                mt-3
                text-sm
                font-semibold
                text-blue-900
              "
            >
              Policies & Regulations
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-[#585858]
              "
            >
              Follow relevant subsidy,
              net-metering and policy information.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
