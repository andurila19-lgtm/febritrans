import Link from "next/link";
import React from "react";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHeader({
  badge,
  title,
  description,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-sky-50/70 via-white to-white border-b border-slate-200/80 pt-24 pb-8 md:pt-28 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center space-x-2 text-[11px] text-slate-500 uppercase tracking-wider">
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  {index > 0 && <span className="text-slate-400">/</span>}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-sky-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-slate-800 font-bold">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {badge && (
          <div className="inline-block mb-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100/80 border border-sky-200 rounded">
            {badge}
          </div>
        )}

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-2 max-w-[65ch] text-sm sm:text-base text-slate-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
