export interface BatchPdf {
  batch: string;
  title: string;
  pdfUrl: string;
}

export const batchPdfs: BatchPdf[] = [
  {
    batch: "1965-1970",
    title: "Alumni Reunion Report 1965-1970",
    pdfUrl: "/assets/pdfs/batch-1965-1970-reunion.pdf"
  },
  {
    batch: "1971-1975",
    title: "Alumni Achievements 1971-1975",
    pdfUrl: "/assets/pdfs/batch-1971-1975-achievements.pdf"
  },
  {
    batch: "1976-1980",
    title: "Alumni Network Directory 1976-1980",
    pdfUrl: "/assets/pdfs/batch-1976-1980-directory.pdf"
  }
];
