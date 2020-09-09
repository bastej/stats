import fs from "fs";
import { MatchData } from "./MatchReader";

export abstract class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filepath: string) {}

  abstract mapRow(row: string[]): MatchData;

  read(): void {
    this.data = fs
      .readFileSync("football.csv", {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
