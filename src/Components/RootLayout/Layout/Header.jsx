// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { megaMenuData } from "../../../data/megaMenuData";
import logo from "../../../assets/PMRGlogo.png";

import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ArrowLeft,
  Menu,
  X,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

const menuItems = [
  { label: "Home", hasDropdown: false, href: "/" },
  { label: "Who we serve", hasDropdown: true },
  { label: "CleverSolutions", hasDropdown: true },
  { label: "Clever Way of Work", hasDropdown: true },
  { label: "CleverCrew", hasDropdown: true },
  { label: "Contact", hasDropdown: false, href: "/contact" },
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
  const [openMenu, setOpenMenu] = useState(null);
  const [activeItemId, setActiveItemId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  const desktopNavRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close desktop mega-menu on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileOpen(false);
        setMobileSubMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

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
      <div className="flex flex-col p-3 md:min-h-[260px] md:flex-row">
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
              onClick={() => {
                if (item.href) {
                  navigate(item.href);
                  setOpenMenu(null);
                }
              }}
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
            <button
              className="mt-3 flex items-center gap-1 text-xs font-semibold text-emerald-700"
              onClick={() => {
                if (activeItem?.href) {
                  navigate(activeItem.href);
                  setOpenMenu(null);
                }
              }}
            >
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
      <nav
        ref={desktopNavRef}
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="PMRG Solution"
            className="h-12 w-auto md:h-16"
          />
        </div>

        {/* Desktop nav (≥1024px) */}
        <div className="relative hidden flex-1 items-center justify-center gap-6 text-sm font-medium lg:flex">
          {menuItems.map((item) => {
            const isOpen = openMenu === item.label;
            return (
              <button
                key={item.label}
                onClick={() => {
                  if (item.hasDropdown) {
                    handleOpenMenu(item.label);
                  } else if (item.href) {
                    navigate(item.href);
                    setOpenMenu(null);
                  }
                }}
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

          {/* Mega dropdown */}
          <div className="pointer-events-none absolute left-1/2 top-full w-full max-w-5xl -translate-x-1/2 pt-4 md:pt-8">
            <div
              className={`pointer-events-auto origin-top transform rounded-3xl bg-white shadow-2xl transition-all duration-200 ease-out ${
                openMenu
                  ? "translate-y-0 scale-100 opacity-100"
                  : "-translate-y-2 scale-95 opacity-0"
              }`}
            >
              {openMenu && renderMegaContent(openMenu)}
            </div>
          </div>
        </div>

        {/* Desktop social icons (≥1024px) */}
        <div className="hidden items-center gap-3 lg:flex">
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com" },
            { Icon: Instagram, href: "https://instagram.com" },
            { Icon: Github, href: "https://github.com" },
          ].map(({ Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`rounded-full p-2 transition-colors ${
                scrolled
                  ? "text-blue-600 hover:bg-blue-50"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Mobile hamburger (<1024px) */}
        <button
          className={`inline-flex items-center justify-center rounded-md p-2 ${
            scrolled ? "text-slate-900" : "text-white"
          } lg:hidden`}
          onClick={() => {
            setMobileOpen((v) => !v);
            setMobileSubMenu(null);
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile full menu (<1024px) */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 overflow-y-auto bg-white lg:hidden"
        >
          {/* Top row inside panel */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-4 pb-2 pt-3">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="PMRG Solution"
                className="h-10 w-auto"
              />
            </div>

            {/* Social icons mobile */}
            <div className="flex items-center gap-2">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin size={18} className="text-blue-600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram size={18} className="text-blue-600" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github size={18} className="text-blue-600" />
              </a>
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
            {/* Main list – first tap only opens submenu for dropdowns */}
            {!mobileSubMenu && (
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    className="flex w-full items-center justify-between rounded-lg px-1 py-3 text-left hover:bg-slate-50"
                    onClick={() => {
                      if (item.hasDropdown && megaMenuData[item.label]) {
                        setMobileSubMenu(item.label); // open submenu only
                        setDefaultActiveForLabel(item.label);
                      } else if (item.href) {
                        navigate(item.href); // simple links navigate
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

            {/* Submenu detail view – rows only change preview, More info navigates */}
            {mobileSubMenu && (() => {
              const config = megaMenuData[mobileSubMenu];
              if (!config) return null;

              const activeItem =
                config.items.find((i) => i.id === activeItemId) ||
                config.items.find((i) => i.active) ||
                config.items[0];

              return (
                <div className="pt-2">
                  <button
                    className="mb-4 flex items-center gap-2 text-sm text-slate-700"
                    onClick={() => setMobileSubMenu(null)}
                  >
                    <ArrowLeft size={18} />
                    <span className="font-medium">{mobileSubMenu}</span>
                  </button>

                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700">
                    {config.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-700">
                    {config.description}
                  </p>

                  <div className="mb-4 space-y-2">
                    {config.items.map((item) => {
                      const isActive = activeItem && activeItem.id === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            // only update active item / preview
                            setActiveItemId(item.id);
                          }}
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
                      <button
                        className="mt-3 flex items-center gap-1 text-xs font-semibold text-emerald-700"
                        onClick={() => {
                          if (activeItem?.href) {
                            navigate(activeItem.href);
                            setMobileOpen(false);
                            setMobileSubMenu(null);
                          }
                        }}
                      >
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
