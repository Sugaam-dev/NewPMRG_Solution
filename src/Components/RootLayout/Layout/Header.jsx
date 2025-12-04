// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { megaMenuData } from "../../../data/megaMenuData";
import logo from "../../../assets/PMRGlogo.png";   // adjust path / name

import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { label: "Home", hasDropdown: false },
  { label: "Who we serve", hasDropdown: true },
  { label: "CleverSolutions", hasDropdown: true },
  { label: "Clever Way of Work", hasDropdown: true },
  { label: "CleverCrew", hasDropdown: true },
  { label: "Contact", hasDropdown: false },
];

const DropdownItem = ({ item, active, onHover, onClick }) => (
  <button
    onMouseEnter={onHover}
    onClick={onClick}
    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition-colors ${
      active ? "bg-emerald-50" : "hover:bg-slate-50"
    }`}
  >
    <div className="flex items-center gap-3">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full border text-lg ${
          active
            ? "border-emerald-500 text-emerald-600"
            : "border-slate-200 text-slate-500"
        }`}
      >
        {item.icon}
      </div>
      <span className={active ? "font-semibold text-slate-900" : "text-slate-800"}>
        {item.label}
      </span>
    </div>
  </button>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);       // desktop which top item
  const [activeItemId, setActiveItemId] = useState(null); // active inner item
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null); // which section open on mobile

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setDefaultActiveForLabel = (label) => {
    const config = megaMenuData[label];
    if (config) {
      const def = config.items.find((i) => i.active) || config.items[0];
      setActiveItemId(def?.id);
    }
  };

  const handleOpenMenu = (label) => {
    if (openMenu === label) {
      setOpenMenu(null);
      return;
    }
    setOpenMenu(label);
    setDefaultActiveForLabel(label);
  };

const renderMegaContent = (label) => {
  const config = megaMenuData[label];
  if (!config) return null;

  const activeItem =
    config.items.find((i) => i.id === activeItemId) ||
    config.items.find((i) => i.active) ||
    config.items[0];

  return (
    <div className="flex flex-col md:min-h-[260px] md:flex-row p-3">
      {/* Left: description */}
      <div className="w-full border-b border-slate-100 p-6 md:w-[35%] md:border-b-0 md:border-r md:p-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">
          {config.title}
        </p>
        <p className="text-sm leading-relaxed text-slate-700">
          {config.description}
        </p>
      </div>

      {/* Middle: list */}
      <div className="w-full space-y-2 p-6 md:w-[35%] md:p-8">
        {config.items.map((item) => (
          <DropdownItem
            key={item.id}
            item={item}
            active={activeItem && activeItem.id === item.id}
            onHover={() => setActiveItemId(item.id)}
            onClick={() => {}}
          />
        ))}
      </div>

      {/* Right: image + text */}
      <div className="flex w-full flex-col md:w-[30%]">
        <div className="flex-1 overflow-hidden md:rounded-r-3xl">
          <img
            src={activeItem.image}
            alt={activeItem.heading}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:border-t-0">
          <h3 className="mb-1 text-base font-semibold text-slate-900">
            {activeItem.heading}
          </h3>
          <p className="text-xs leading-relaxed text-slate-700">
            {activeItem.text}
          </p>
          <button className="mt-3 flex items-center gap-1 text-xs font-semibold text-emerald-700">
            More information <ChevronUp size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};




  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
     
      {/* Logo */}
<div className="flex items-center gap-3">
  <img
    src={logo}               // import from top, or use "/logo.svg" from public
    alt="CleverMobi"
    className="h-16 w-auto md:h-16"
  />
</div>


   {/* Desktop nav with click dropdowns */}
<div className="relative hidden items-center gap-6 text-sm font-medium md:flex">
  {menuItems.map((item) => {
    const isOpen = openMenu === item.label;
    return (
      <button
        key={item.label}
        onClick={() =>
          item.hasDropdown ? handleOpenMenu(item.label) : setOpenMenu(null)
        }
        className={`flex items-center gap-1 ${
          scrolled ? "text-slate-900" : "text-white"
        }`}
      >
        {item.label}
        {item.hasDropdown &&
          (isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />)}
      </button>
    );
  })}

  {/* shared mega dropdown – positioned under nav, smooth animation */}
  <div className="pointer-events-none absolute left-1/2 top-full pt-16 w-[1100px] max-w-[96vw] -translate-x-1/2">
    <div
      className={`pointer-events-auto origin-top transform rounded-3xl bg-white shadow-2xl transition-all duration-200 ease-out ${
        openMenu
          ? "scale-100 opacity-100 translate-y-0"
          : "scale-95 opacity-0 -translate-y-2"
      }`}
    >
      {openMenu && renderMegaContent(openMenu)}
    </div>
  </div>
</div>


        {/* Careers button (desktop) */}
        <button
          className={`hidden rounded-full px-6 py-2 text-sm font-semibold transition-colors md:inline-flex ${
            scrolled
              ? "bg-emerald-500 text-white hover:bg-emerald-600"
              : "bg-white text-emerald-700 hover:bg-slate-100"
          }`}
        >
          Careers
        </button>

        {/* Mobile hamburger */}
        <button
          className={`inline-flex items-center justify-center rounded-md p-2 ${
            scrolled ? "text-slate-900" : "text-white"
          } md:hidden`}
          onClick={() => {
            setMobileOpen((v) => !v);
            setMobileSubMenu(null);
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {/* Mobile full menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden overflow-y-auto">
          {/* Top row inside panel */}
          <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-4 pt-3 pb-2 border-b border-slate-100">
           {/* Logo */}
<div className="flex items-center gap-3">
  <img
    src={logo}               // import from top, or use "/logo.svg" from public
    alt="CleverMobi"
    className="h-12 w-auto md:h-12"
  />
</div>

            <button
              onClick={() => {
                setMobileOpen(false);
                setMobileSubMenu(null);
              }}
            >
              <X size={22} className="text-slate-700" />
            </button>
          </div>

          {/* Content area */}
          <div className="px-4 pb-6 pt-3 text-sm font-medium text-slate-900">
            {/* Main list (first screen) */}
            {!mobileSubMenu && (
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    className="flex w-full items-center justify-between rounded-lg px-1 py-3 text-left hover:bg-slate-50"
                    onClick={() => {
                      if (item.hasDropdown && megaMenuData[item.label]) {
                        setMobileSubMenu(item.label);
                        setDefaultActiveForLabel(item.label);
                      } else {
                        // navigate here if needed
                        setMobileOpen(false);
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && <ChevronRight size={18} />}
                  </button>
                ))}
              </div>
            )}

            {/* Submenu detail view */}
            {mobileSubMenu && (() => {
              const config = megaMenuData[mobileSubMenu];
              if (!config) return null;

              const activeItem =
                config.items.find((i) => i.id === activeItemId) ||
                config.items.find((i) => i.active) ||
                config.items[0];

              return (
                <div className="pt-2">
                  {/* Back row */}
                  <button
                    className="mb-4 flex items-center gap-2 text-sm text-slate-700"
                    onClick={() => setMobileSubMenu(null)}
                  >
                    <ArrowLeft size={18} />
                    <span className="font-medium">{mobileSubMenu}</span>
                  </button>

                  {/* Title + description */}
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">
                    {config.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-700">
                    {config.description}
                  </p>

                  {/* Items list */}
                  <div className="mb-4 space-y-2">
                    {config.items.map((item) => {
                      const isActive = activeItem && activeItem.id === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveItemId(item.id)}
                          className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left text-sm ${
                            isActive ? "bg-emerald-50" : "hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full border text-base ${
                                isActive
                                  ? "border-emerald-500 text-emerald-600"
                                  : "border-slate-200 text-slate-500"
                              }`}
                            >
                              {item.icon}
                            </div>
                            <span
                              className={
                                isActive
                                  ? "font-semibold text-slate-900"
                                  : "text-slate-800"
                              }
                            >
                              {item.label}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Image + text card */}
                  <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                    <img
                      src={activeItem.image}
                      alt={activeItem.heading}
                      className="h-48 w-full object-cover"
                    />
                    <div className="px-4 py-4">
                      <h4 className="mb-1 text-base font-semibold text-slate-900">
                        {activeItem.heading}
                      </h4>
                      <p className="text-xs leading-relaxed text-slate-700">
                        {activeItem.text}
                      </p>
                      <button className="mt-3 flex items-center gap-1 text-xs font-semibold text-emerald-700">
                        More information <ChevronUp size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;
