import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

// Data
const arabicRows = [
  { score: "50", specialty: "جميع التخصصات", studyType: "ماجستير / دكتوراه" },
  { score: "60", specialty: "لغة عربية", studyType: "ماجستير" },
  { score: "70", specialty: "لغة عربية", studyType: "دكتوراه" },
];

const csRows = [
  { score: "50", specialty: "التخصصات الإنسانية", studyType: "ماجستير" },
  { score: "55", specialty: "التخصصات الإنسانية", studyType: "دكتوراه" },
  { score: "60", specialty: "التخصصات العلمية", studyType: "ماجستير" },
  { score: "65", specialty: "التخصصات العلمية", studyType: "دكتوراه" },
  { score: "70", specialty: "حاسوب", studyType: "ماجستير" },
  { score: "75", specialty: "حاسوب", studyType: "دكتوراه" },
];

const englishRows = [
  {
    score: "50",
    level: "A1",
    specialty: "العلمية / الإنسانية",
    studyType: "دبلوم عالي",
  },
  {
    score: "50",
    level: "A1",
    specialty: "الإنسانية (باستثناء تخصصات اللغة الإنجليزية)",
    studyType: "ماجستير",
  },
  {
    score: "55",
    level: "A2",
    specialty: "الإنسانية (باستثناء تخصصات اللغة الإنجليزية)",
    studyType: "دكتوراه",
  },
  {
    score: "60",
    level: "B1",
    specialty:
      "العلمية (التربية للعلوم الصرفة، الإدارة والاقتصاد، الزراعة، التربية البدنية وعلوم الرياضة، الفنون التطبيقية، الفنون الجميلة، الإدارة الصناعية للنفط والغاز، العلوم السياحية، اقتصاديات الأعمال)",
    studyType: "ماجستير",
  },
  {
    score: "65",
    level: "B2",
    specialty:
      "العلمية (التربية للعلوم الصرفة، الإدارة والاقتصاد، الزراعة، التربية البدنية وعلوم الرياضة، الفنون التطبيقية، الفنون الجميلة، الإدارة الصناعية للنفط والغاز، العلوم السياحية، اقتصاديات الأعمال)",
    studyType: "دكتوراه",
  },
  {
    score: "65",
    level: "B2",
    specialty: "العلمية (الهندسة، العلوم، الكليات التقنية، التمريض، الطب البيطري)",
    studyType: "ماجستير",
  },
  {
    score: "70",
    level: "C1",
    specialty: "العلمية (الهندسة، العلوم، الكليات التقنية، التمريض، الطب البيطري)",
    studyType: "دكتوراه",
  },
  {
    score: "70",
    level: "C1",
    specialty: "اختصاص اللغة الإنجليزية، الترجمة (الإنجليزية)، طرائق التدريس اللغة الإنجليزية",
    studyType: "ماجستير",
  },
  {
    score: "70",
    level: "C1",
    specialty: "طبية (الطب، طب الأسنان، الصيدلة)",
    studyType: "ماجستير",
  },
  {
    score: "75",
    level: "C2",
    specialty: "اختصاص اللغة الإنجليزية، الترجمة (الإنجليزية)، طرائق التدريس اللغة الإنجليزية",
    studyType: "دكتوراه",
  },
  {
    score: "75",
    level: "C2",
    specialty: "الطب، طب الأسنان، الصيدلة",
    studyType: "دكتوراه طبية والبورد العراقي",
  },
];

// Score Badge
function ScoreBadge({ score }: { score: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        "min-w-10 px-2.5 py-0.5 rounded-md",
        "text-sm font-bold tabular-nums",
        "bg-(--accent-soft) text-(--accent)",
        "border border-(--accent)/20",
      )}
    >
      {score}
    </span>
  );
}

// Section Header
function SectionHeader({ title, color, bg }: { title: string; color: string; bg: string }) {
  return (
    <div className={cn("flex items-center gap-3 mb-4 px-4 py-3 rounded-xl", bg)}>
      <div className={cn("w-1 h-7 rounded-full shrink-0", color)} />
      <h2 className={cn("text-lg font-bold tracking-wide", "text-card-foreground")}>{title}</h2>
    </div>
  );
}

// Table Card wrapper
function TableCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-border overflow-hidden", "bg-card", "shadow-(--shadow-card)", "hover:shadow-(--shadow-card-hover) transition-shadow duration-300", className)}>
      {children}
    </div>
  );
}

// Shared Table Head row
function StyledTableHead({ children, accentBg }: { children: React.ReactNode; accentBg: string }) {
  return (
    <TableHeader>
      <TableRow className={cn("border-b border-border", accentBg)}>{children}</TableRow>
    </TableHeader>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <TableHead className="text-right font-bold text-card-foreground py-3 px-4 text-sm">{children}</TableHead>;
}

function Td({ children, className }: { children: React.ReactNode; className?: string }) {
  return <TableCell className={cn("text-right py-3 px-4 text-sm text-muted-foreground align-middle", className)}>{children}</TableCell>;
}

// Arabic Language Table
function ArabicTable() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader title="الاختبار الوطني للغة العربية" color="bg-[var(--subject-arabic)]" bg="bg-[var(--subject-arabic-soft)]" />
      <TableCard>
        <Table dir="rtl">
          <StyledTableHead accentBg="bg-[var(--subject-arabic-soft)]">
            <Th>درجة الاجتياز</Th>
            <Th>التخصص</Th>
            <Th>نوع الدراسة</Th>
          </StyledTableHead>
          <TableBody>
            {arabicRows.map((row, i) => (
              <TableRow
                key={i}
                className={cn("border-b border-border last:border-0", "hover:bg-(--subject-arabic-soft) transition-colors duration-150", i % 2 === 0 ? "bg-card" : "bg-(--bg-secondary)")}
              >
                <Td>
                  <ScoreBadge score={row.score} />
                </Td>
                <Td>{row.specialty}</Td>
                <Td className="font-medium text-card-foreground">{row.studyType}</Td>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableCard>
    </div>
  );
}

// CS Table
function CSTable() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader title="الاختبار الوطني للحاسوب" color="bg-[var(--subject-cs)]" bg="bg-[var(--subject-cs-soft)]" />
      <TableCard>
        <Table dir="rtl">
          <StyledTableHead accentBg="bg-[var(--subject-cs-soft)]">
            <Th>درجة الاجتياز</Th>
            <Th>التخصص</Th>
            <Th>نوع الدراسة</Th>
          </StyledTableHead>
          <TableBody>
            {csRows.map((row, i) => (
              <TableRow key={i} className={cn("border-b border-border last:border-0", "hover:bg-(--subject-cs-soft) transition-colors duration-150", i % 2 === 0 ? "bg-card" : "bg-(--bg-secondary)")}>
                <Td>
                  <ScoreBadge score={row.score} />
                </Td>
                <Td>{row.specialty}</Td>
                <Td className="font-medium text-card-foreground">{row.studyType}</Td>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableCard>
    </div>
  );
}

// English Table (4 columns)
function EnglishTable() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader title="الاختبار الوطني للغة الإنجليزية" color="bg-[var(--subject-english)]" bg="bg-[var(--subject-english-soft)]" />
      <TableCard>
        <div className="overflow-x-auto">
          <Table dir="rtl" className="min-w-160">
            <StyledTableHead accentBg="bg-[var(--subject-english-soft)]">
              <Th>درجة الاجتياز</Th>
              <Th>المستوى</Th>
              <Th>التخصصات</Th>
              <Th>نوع الدراسة</Th>
            </StyledTableHead>
            <TableBody>
              {englishRows.map((row, i) => (
                <TableRow
                  key={i}
                  className={cn("border-b border-border last:border-0", "hover:bg-(--subject-english-soft) transition-colors duration-150", i % 2 === 0 ? "bg-card" : "bg-(--bg-secondary)")}
                >
                  <Td>
                    <ScoreBadge score={row.score} />
                  </Td>
                  <Td>
                    <span
                      className={cn(
                        "inline-flex items-center justify-center",
                        "min-w-8 px-2 py-0.5 rounded-md text-xs font-bold",
                        "bg-(--subject-english-soft) text-(--subject-english)",
                        "border border-(--subject-english)/20",
                      )}
                    >
                      {row.level}
                    </span>
                  </Td>
                  <Td className="max-w-[320px] leading-relaxed whitespace-normal wrap-break-word">{row.specialty}</Td>
                  <Td className="font-medium text-card-foreground whitespace-nowrap">{row.studyType}</Td>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableCard>
    </div>
  );
}

// Notice Banner
function NoticeBanner() {
  return (
    <div dir="rtl" className={cn("flex gap-3 items-start", "rounded-xl border border-amber-200 dark:border-amber-800/60", "bg-amber-50 dark:bg-amber-900/20", "px-4 py-3.5")}>
      <AlertTriangle className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" size={18} />
      <p className="text-sm leading-relaxed text-amber-800 dark:text-amber-300">
        <span className="font-bold">تنبيه: </span>
        الدرجات المذكورة أعلاه للإرشاد فقط — راجع الإعلانات الرسمية للوزارة للتأكد من المعلومات الحالية.
      </p>
    </div>
  );
}

// Main Export
export default function ExamScoresTables() {
  return (
    <section dir="rtl" id="passing-scores" className="w-full max-w-5xl mx-auto px-4 py-10 flex flex-col gap-10">
      {/* Page Title */}
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-card-foreground">درجات الاجتياز لاختبارات الكفاءة الوطني العراقي</h1>
        <p className="text-sm text-muted-foreground">
          <bdo dir="rtl">الاختبارات الوطنية للقبول في الدراسات العليا</bdo> — <bdo dir="ltr">INPT &amp; INELT</bdo>
        </p>
      </div>

      {/* Tables */}
      <ArabicTable />
      <CSTable />
      <EnglishTable />

      {/* Notice */}
      <NoticeBanner />
    </section>
  );
}
