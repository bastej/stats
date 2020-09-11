import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const manUnitedSummary = Summary.winsAnalysisWithHtmlReport("Man United");

manUnitedSummary.buildAndPrintReport(matchReader.matches);
