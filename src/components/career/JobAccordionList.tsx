import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Job {
  title: string;
  qualification: string[];
  responsibility: string[];
  experience: string;
}

const jobPositions: Job[] = [
  {
    title: "HR Manager - EDS HQ",
    qualification: [
      "Manage and lead the end-to-end strategic staffing and talent acquisition.",
      "Propose competitive compensation programs.",
      "Champion employee training and onboarding.",
      "Administer performance review and learning initiatives.",
      "Ensure legal compliance with HR regulations.",
      "Recommend improvements on employee benefits.",
      "Bridge management and employee relations.",
      "Align workforce with company culture.",
      "Handle grievances and internal issues.",
      "Stay updated with HR trends and laws."
    ],
    responsibility: [
      "Bachelor’s degree in HR, Management or related field.",
      "Experience in Business Plus system is required.",
      "Minimum 3 years in HR role.",
      "Proficiency in English.",
      "Strong sourcing and recruiting skills.",
      "Confidentiality and professionalism.",
      "Excellent communication and coaching skills.",
      "Strong organizational and problem-solving skills."
    ],
    experience: "3+ years"
  },
  {
    title: "HR Recruiter",
    qualification: [
      "Bachelor’s in Business Admin, Psychology, or related.",
      "Experience in screening and recruitment flow.",
      "Understanding compensation packages.",
      "Communication and problem-solving skills.",
      "Knowledge in Thai labor law."
    ],
    responsibility: [
      "Manage full recruitment cycle.",
      "Coordinate interviews and onboarding.",
      "Prepare contracts and maintain employee records.",
      "Coordinate with external agencies and headhunters.",
      "Handle employee orientation."
    ],
    experience: "0-3 years"
  },
  {
    title: "Junior Business Head – Consumer Electric Product",
    qualification: [
      "Strategic planning and data analysis.",
      "Team leadership and development.",
      "Cross-functional collaboration.",
      "Excellent interpersonal and problem-solving skills.",
      "Understanding of After Sale service (On-site/In-house)."
    ],
    responsibility: [
      "Bachelor’s in Management or related.",
      "Minimum 3 years in relevant industry.",
      "P&L and business planning responsibilities.",
      "Work with multiple departments.",
      "English proficiency and frequent travel required.",
      "Car and driver’s license required."
    ],
    experience: "3+ years"
  }
];

export default function JobAccordionList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-10">
      <div className="container mx-auto rounded-xl px-4 py-10 max-w-4xl bg-gradient-to-r from-[#13255B] via-[#3E4E85] to-[#9CB2E0] text-white">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Job Positions Available
        </h2>

        {jobPositions.map((job, index) => (
          <div
            key={index}
            className="mb-6 border border-border rounded-xl shadow-sm overflow-hidden transition-all"
          >
            <Button
              variant="ghost"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className={cn(
                "w-full justify-between px-6 py-5 text-left text-lg font-medium transition-all hover:bg-accent",
                {
                  "bg-accent/40": activeIndex === index
                }
              )}
            >
              {job.title}
              <ChevronDown
                className={cn("h-5 w-5 transition-transform", {
                  "rotate-180": activeIndex === index
                })}
              />
            </Button>

            {activeIndex === index && (
              <div className="px-6 pb-6 pt-2 bg-card animate-in fade-in slide-in-from-top-2 space-y-6">
                <div>
                  <h4 className="text-md font-semibold text-primary mb-2">
                    Qualifications
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {job.qualification.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-primary mb-2">
                    Responsibilities
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {job.responsibility.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-muted-foreground pt-2">
                  <strong>Experience:</strong> {job.experience}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}