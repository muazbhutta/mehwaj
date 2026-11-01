"use client";

// ============================================================================
// CountrySelect: a searchable country picker that replaces the plain browser
// dropdown. With 243 countries a native select is hard to use, so this one
// opens a panel with a search box, keeps the countries that matter to the firm
// in a short group at the top, and lists the rest underneath.
//
// It is a combobox in the ARIA sense: the button owns the listbox, the active
// option is announced through aria-activedescendant, and the arrow keys, Enter,
// Escape, Home and End all behave the way a native select does.
// ============================================================================

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Icon from "../Icons";
import { COUNTRIES } from "@/lib/countries";
import type { Dictionary, Locale } from "@/lib/i18n/types";

interface Props {
  label: string;
  value: string;
  onChange: (country: string) => void;
  locale: Locale;
  dict: Dictionary;
  /** Codes pinned to the top, for example the Gulf on the secondments form. */
  priorityCodes: string[];
}

interface Option {
  code: string;
  name: string;
}

/** Strips accents and Arabic vowel marks so search matches what people type. */
function fold(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ًͯ-ْ]/g, "")
    .toLowerCase();
}

export default function CountrySelect({
  label,
  value,
  onChange,
  locale,
  dict,
  priorityCodes,
}: Props) {
  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const listId = `${baseId}-list`;

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const otherLabel = dict.common.countryOther;

  // Every option in the order the panel shows them: the pinned countries, then
  // the rest sorted by the reading order of the active language, then "Other".
  const { priority, rest } = useMemo(() => {
    const collator = new Intl.Collator(locale);
    const named: Option[] = COUNTRIES.map((country) => ({
      code: country.code,
      name: locale === "ar" ? country.ar : country.en,
    }));

    const pinned = priorityCodes
      .map((code) => named.find((option) => option.code === code))
      .filter((option): option is Option => Boolean(option));

    const others = named
      .filter((option) => !priorityCodes.includes(option.code))
      .sort((a, b) => collator.compare(a.name, b.name));

    return {
      priority: pinned,
      rest: [...others, { code: "OTHER", name: otherLabel }],
    };
  }, [locale, priorityCodes, otherLabel]);

  const filtered = useMemo(() => {
    if (!query.trim()) return { priority, rest };
    const needle = fold(query.trim());
    const match = (option: Option) =>
      fold(option.name).includes(needle) ||
      option.code.toLowerCase() === needle;
    return { priority: priority.filter(match), rest: rest.filter(match) };
  }, [query, priority, rest]);

  const flat = useMemo(
    () => [...filtered.priority, ...filtered.rest],
    [filtered]
  );

  // Close on a click outside or on Escape anywhere in the document.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  // Put the caret in the search box as soon as the panel opens.
  useEffect(() => {
    if (open) searchRef.current?.focus();
    else setQuery("");
  }, [open]);

  // Keep the highlighted row in view while arrowing through the list.
  useEffect(() => {
    if (!open) return;
    const node = listRef.current?.querySelector<HTMLElement>(
      `[data-index="${active}"]`
    );
    node?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  function choose(option: Option) {
    onChange(option.name);
    setOpen(false);
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (!open) {
      if (["ArrowDown", "Enter", " "].includes(event.key)) {
        event.preventDefault();
        setOpen(true);
        setActive(0);
      }
      return;
    }

    switch (event.key) {
      case "Escape":
        event.preventDefault();
        setOpen(false);
        break;
      case "ArrowDown":
        event.preventDefault();
        setActive((i) => (flat.length ? (i + 1) % flat.length : 0));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActive((i) => (flat.length ? (i - 1 + flat.length) % flat.length : 0));
        break;
      case "Home":
        event.preventDefault();
        setActive(0);
        break;
      case "End":
        event.preventDefault();
        setActive(Math.max(0, flat.length - 1));
        break;
      case "Enter":
        event.preventDefault();
        if (flat[active]) choose(flat[active]);
        break;
      default:
        break;
    }
  }

  let index = -1;
  const renderGroup = (heading: string, options: Option[]) => {
    if (options.length === 0) return null;
    return (
      <li role="presentation">
        <p
          role="presentation"
          className="px-3 pb-1 pt-3 font-sans text-[0.65rem] font-semibold uppercase tracking-label text-bronze/80"
        >
          {heading}
        </p>
        <ul role="group" aria-label={heading}>
          {options.map((option) => {
            index += 1;
            const here = index;
            const selected = option.name === value;
            return (
              <li
                key={option.code}
                id={`${listId}-option-${here}`}
                data-index={here}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setActive(here)}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => choose(option)}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 font-sans text-sm transition-colors ${
                  here === active
                    ? "bg-bronze/10 text-espresso"
                    : "text-espresso/85"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Icon
                    name="check"
                    className={`h-3.5 w-3.5 shrink-0 text-bronze ${
                      selected ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {option.name}
                </span>
                {option.code !== "OTHER" && (
                  <span
                    dir="ltr"
                    className="shrink-0 font-sans text-[0.7rem] tracking-wide text-espresso/35"
                  >
                    {option.code}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </li>
    );
  };

  return (
    <div ref={wrapperRef} className="relative">
      <label className="field-label" htmlFor={buttonId}>
        {label}
      </label>

      <button
        id={buttonId}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-haspopup="listbox"
        aria-activedescendant={
          open && flat[active] ? `${listId}-option-${active}` : undefined
        }
        onClick={() => {
          setOpen((v) => !v);
          setActive(0);
        }}
        onKeyDown={onKeyDown}
        className={`field flex items-center justify-between gap-3 text-start ${
          open ? "border-bronze ring-2 ring-gold/30" : ""
        }`}
      >
        <span className={value ? "text-espresso" : "text-espresso/40"}>
          {value || dict.common.form.choosePlaceholder}
        </span>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 shrink-0 text-bronze transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-bronze/30 bg-white shadow-card">
          <div className="border-b border-bronze/20 p-2">
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActive(0);
              }}
              onKeyDown={onKeyDown}
              placeholder={dict.common.countrySearch}
              aria-label={dict.common.countrySearch}
              aria-controls={listId}
              className="w-full rounded-lg border border-bronze/25 bg-offwhite px-3 py-2 font-sans text-sm text-espresso outline-none placeholder:text-espresso/40 focus:border-bronze"
            />
          </div>

          <ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-label={label}
            className="max-h-64 overflow-y-auto p-1.5"
          >
            {flat.length === 0 ? (
              <li
                role="presentation"
                className="px-3 py-6 text-center font-sans text-sm text-espresso/50"
              >
                {dict.common.countryNoMatch}
              </li>
            ) : (
              <>
                {renderGroup(dict.common.countryCommon, filtered.priority)}
                {renderGroup(dict.common.countryAll, filtered.rest)}
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
