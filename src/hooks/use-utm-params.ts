"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  extractUTMParams,
  storeUTMParams,
  getStoredUTMParams,
  type UTMParams,
} from "@/lib/analytics";

interface UseUTMParamsReturn {
  utmParams: UTMParams;
  isLoaded: boolean;
}

export function useUTMParams(): UseUTMParamsReturn {
  const searchParams = useSearchParams();
  const [utmParams, setUtmParams] = useState<UTMParams>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedParams = getStoredUTMParams();
    const urlParams = extractUTMParams(searchParams);
    const mergedParams = { ...storedParams, ...urlParams };

    storeUTMParams(mergedParams);
    setUtmParams(mergedParams);
    setIsLoaded(true);
  }, [searchParams]);

  return { utmParams, isLoaded };
}

export function useUTMFormFields(): Record<string, string> {
  const { utmParams, isLoaded } = useUTMParams();
  const [fields, setFields] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!isLoaded) return;

    const formFields: Record<string, string> = {};
    for (const [key, value] of Object.entries(utmParams)) {
      if (value) {
        formFields[key] = value;
      }
    }
    setFields(formFields);
  }, [utmParams, isLoaded]);

  return fields;
}
