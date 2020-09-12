import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const manUnitedSummary = Summary.winsAnalysisWithHtmlReport("Man United");

manUnitedSummary.buildAndPrintReport(matchReader.matches);
