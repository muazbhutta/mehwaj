"use client";

// ============================================================================
// CountrySelect: the country picker, built on the shared Dropdown. The full
// list runs to well over two hundred entries, so it turns the search box on and
// pins the countries that matter to the firm in a short group at the top.
// ============================================================================

import { useMemo } from "react";
import Dropdown, { type DropdownGroup } from "./Dropdown";
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

export default function CountrySelect({
  label,
  value,
  onChange,
  locale,
  dict,
  priorityCodes,
}: Props) {
  const groups = useMemo<DropdownGroup[]>(() => {
    const collator = new Intl.Collator(locale);
    const named = COUNTRIES.map((country) => ({
      key: country.code,
      label: locale === "ar" ? country.ar : country.en,
      hint: country.code,
    }));

    const pinned = priorityCodes
      .map((code) => named.find((option) => option.key === code))
      .filter((option): option is (typeof named)[number] => Boolean(option));

    const rest = named
      .filter((option) => !priorityCodes.includes(option.key))
      .sort((a, b) => collator.compare(a.label, b.label));

    return [
      { heading: dict.common.countryCommon, options: pinned },
      {
        heading: dict.common.countryAll,
        options: [
          ...rest,
          { key: "OTHER", label: dict.common.countryOther, hint: undefined },
        ],
      },
    ];
  }, [locale, priorityCodes, dict.common]);

  return (
    <Dropdown
      label={label}
      value={value}
      onChange={onChange}
      groups={groups}
      placeholder={dict.common.form.choosePlaceholder}
      search={{
        placeholder: dict.common.countrySearch,
        noMatch: dict.common.countryNoMatch,
      }}
    />
  );
}
