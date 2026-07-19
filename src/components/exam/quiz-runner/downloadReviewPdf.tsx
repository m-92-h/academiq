import { pdf } from "@react-pdf/renderer";

import { buildReviewFileName } from "@/lib/quizUtils";
import { ReviewPdfDocument } from "./ReviewPdfDocument";
import type { QuizReviewPayload } from "@/types/quiz-runner";

function triggerBrowserDownload(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 100);
}

export async function downloadReviewPdf(payload: QuizReviewPayload): Promise<void> {
  const blob = await pdf(<ReviewPdfDocument {...payload} />).toBlob();
  const fileName = buildReviewFileName(payload.subjectLabel);

  triggerBrowserDownload(blob, fileName);
}
