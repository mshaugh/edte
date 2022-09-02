import { parse } from 'csv-parse/browser/esm/sync';

export type CarbonData = {
  Week: number;
  tCO2e: number;
};

export function cumulativeToWeekly(csvString: string): CarbonData[] {
  const parsed: CarbonData[] = parse(csvString, {
    cast: true,
    columns: true,
    skip_empty_lines: true,
  });

  return parsed.map((value, index) => ({
    Week: value.Week,
    tCO2e: value.tCO2e - (parsed[index - 1]?.tCO2e ?? 0),
  }));
}
