"use client";

// ============================================================================
// Dropdown: the styled picker every select on the site uses, in place of the
// browser default, whose open list is drawn by the operating system and cannot
// be brought in line with the brand.
//
// It comes in two shapes. A short list keeps a button and a panel. A long one,
// such as the country list, turns the field itself into the search box: you
// click it, type straight into it, and the list below narrows as you go. Both
// follow the ARIA combobox pattern, so the arrow keys, Enter, Escape, Home and
// End behave the way a native select does and the active row is announced
// through aria-activedescendant.
// ============================================================================

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Icon from "../Icons";

export interface DropdownOption {
  /** Stable key. The label is what the form sends. */
  key: string;
  label: string;
  /** Small muted text at the far end of the row, for example a country code. */
  hint?: string;
}

export interface DropdownGroup {
  heading?: string;
  options: DropdownOption[];
}

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  groups: DropdownGroup[];
  placeholder: string;
  /** Present for a list long enough to need typing. */
  search?: { placeholder: string; noMatch: string };
}

/** Strips accents and Arabic vowel marks so search matches what people type. */
function fold(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ًͯ-ْ]/g, "")
    .toLowerCase();
}

export default function Dropdown({
  label,
  value,
  onChange,
  groups,
  placeholder,
  search,
}: Props) {
  const baseId = useId();
  const fieldId = `${baseId}-field`;
  const listId = `${baseId}-list`;

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = useMemo(() => {
    if (!search || !query.trim()) return groups;
    const needle = fold(query.trim());
    return groups
      .map((group) => ({
        ...group,
        options: group.options.filter(
          (option) =>
            fold(option.label).includes(needle) ||
            option.hint?.toLowerCase() === needle
        ),
      }))
      .filter((group) => group.options.length > 0);
  }, [groups, query, search]);

  const flat = useMemo(
    () => filtered.flatMap((group) => group.options),
    [filtered]
  );

  // Close on a click outside the field.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  // Opening starts on the row that is already selected and clears what was
  // typed last time; closing puts the chosen label back in the field.
  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    const current = flat.findIndex((option) => option.label === value);
    setActive(current >= 0 ? current : 0);
    // Only when the panel opens, not on every keystroke.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Keep the highlighted row in view while arrowing through the list.
  useEffect(() => {
    if (!open) return;
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  function choose(option: DropdownOption) {
    onChange(option.label);
    setOpen(false);
    if (search) inputRef.current?.blur();
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (!open) {
      if (["ArrowDown", "Enter", " "].includes(event.key)) {
        // A space belongs to the search field once it is open for typing.
        if (event.key === " " && search) return;
        event.preventDefault();
        setOpen(true);
      }
      return;
    }

    switch (event.key) {
      case "Escape":
        event.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
      case "ArrowDown":
        event.preventDefault();
        setActive((i) => (flat.length ? (i + 1) % flat.length : 0));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActive((i) =>
          flat.length ? (i - 1 + flat.length) % flat.length : 0
        );
        break;
      case "Home":
        if (search) break;
        event.preventDefault();
        setActive(0);
        break;
      case "End":
        if (search) break;
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

  const chevron = (
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
  );

  const fieldClasses = `field flex items-center justify-between gap-3 text-start ${
    open ? "border-bronze ring-2 ring-gold/30" : ""
  }`;

  let index = -1;

  return (
    <div ref={wrapperRef} className="relative">
      <label className="field-label" htmlFor={fieldId}>
        {label}
      </label>

      {search ? (
        // The field is the search box: one place to type in and to choose from.
        <div
          className={fieldClasses}
          onClick={() => {
            setOpen(true);
            inputRef.current?.focus();
          }}
        >
          <input
            ref={inputRef}
            id={fieldId}
            type="text"
            role="combobox"
            autoComplete="off"
            aria-expanded={open}
            aria-controls={open ? listId : undefined}
            aria-autocomplete="list"
            aria-activedescendant={
              open && flat[active] ? `${listId}-option-${active}` : undefined
            }
            value={open ? query : value}
            placeholder={open ? value || search.placeholder : placeholder}
            onChange={(event) => {
              setOpen(true);
              setQuery(event.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            className="w-full bg-transparent font-sans text-sm text-espresso outline-none placeholder:text-espresso/40"
          />
          {chevron}
        </div>
      ) : (
        <button
          id={fieldId}
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          aria-haspopup="listbox"
          aria-activedescendant={
            open && flat[active] ? `${listId}-option-${active}` : undefined
          }
          onClick={() => setOpen((v) => !v)}
          onKeyDown={onKeyDown}
          className={fieldClasses}
        >
          <span className={value ? "text-espresso" : "text-espresso/40"}>
            {value || placeholder}
          </span>
          {chevron}
        </button>
      )}

      {open && (
        <div className="dropdown-panel absolute inset-x-0 top-full z-30 mt-2 rounded-xl border border-bronze/30 bg-white shadow-card">
          <div className="relative">
            <ul
              ref={listRef}
              id={listId}
              role="listbox"
              aria-label={label}
              className="no-scrollbar max-h-64 overflow-y-auto p-1.5"
            >
              {flat.length === 0 ? (
                <li
                  role="presentation"
                  className="px-3 py-6 text-center font-sans text-sm text-espresso/50"
                >
                  {search?.noMatch}
                </li>
              ) : (
                filtered.map((group, gi) => (
                  <li key={group.heading ?? gi} role="presentation">
                    {group.heading && (
                      <p className="px-3 pb-1 pt-3 font-sans text-[0.65rem] font-semibold uppercase tracking-label text-bronze/80">
                        {group.heading}
                      </p>
                    )}
                    <ul role="group" aria-label={group.heading}>
                      {group.options.map((option) => {
                        index += 1;
                        const here = index;
                        const selected = option.label === value;
                        return (
                          <li
                            key={option.key}
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
                              {option.label}
                            </span>
                            {option.hint && (
                              <span
                                dir="ltr"
                                className="shrink-0 font-sans text-[0.7rem] tracking-wide text-espresso/35"
                              >
                                {option.hint}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ))
              )}
            </ul>

            {/* The scrollbar is hidden, so a soft fade marks a list that runs on. */}
            {flat.length > 6 && (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-8 rounded-b-xl bg-gradient-to-t from-white to-transparent"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
