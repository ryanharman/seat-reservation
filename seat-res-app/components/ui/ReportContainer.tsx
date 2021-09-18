import React from "react";

interface ReportCard {
  bgColor?: string;
  reportTitle: string;
  reportSummary: string;
  reportQty: string | number;
}

const ReportCard = ({ bgColor, reportTitle, reportSummary, reportQty }: IReportCard) => {
  return (
    <div className={`${bgColor ? bgColor : "bg-red-300"} bg-opacity-50 rounded-3xl p-8 text-black max-w-sm shadow-md`}>
      <div className="flex justify-between gap-4">
        <div>
          <ReportTitle title={reportTitle} summary={reportSummary} />
          <div className="mt-4 text-3xl font-bold">{reportQty}</div>
        </div>
        <div className="flex items-center">
          <span className="text-5xl pr-4">⭕</span>
        </div>
      </div>
    </div>
  );
};

interface ReportTitle {
  title: string;
  summary: string;
}

export const ReportTitle = ({ title, summary }: IReportTitle) => {
  return (
    <>
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-gray-400 text-base">{summary}</div>
    </>
  );
};

export default ReportCard;
