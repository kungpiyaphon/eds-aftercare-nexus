import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const jobPositions = [
    {
        title: "HR Manager - EDS HQ",
        qualification: [
            "Manage and lead the end-to-end strategic staffing and talent acquisition including but not limited to planning, sourcing, interviews, onboarding, retention, separation;",
            "Research and propose competitive compensation programs to attract and retain top talent;",
            "Champion employee training programs including onboarding orientation, operational cross-training, and leadership development;",
            "Administer performance review programs and learning initiatives that provide internal development opportunities for employees;",
            "Oversee, implement, and recommend improvements on employee benefits programs;",
            "Ensure legal compliance with federal and state laws and regulations, protect the interests of employees and the company;",
            "Enforce management guidelines by preparing, updating, and recommending human resource policies and procedures;",
            "Develop and implement strategies and initiatives to align the workforce with the organization culture and strategic goals;",
            "Bridge management and employee relations by addressing demands, grievances or other issues;",
            "Maintain knowledge of trends, best practices, regulatory changes, and new technologies in human resources, talent management, and employment law;",
            "Perform other duties or projects as assigned."
        ],
        responsibility: [
            "Bachelor’s degree in Human Resources, Management or related field required",
            "Business Plus system required",
            "A minimum of 3 years of HR experience required",
            "Proficiency in English required",
            "A track record with sourcing and recruiting extraordinary talent",
            "Ability to act with integrity, professionalism, and confidentiality",
            "Exceptional verbal and written communication skills and ethical mindset",
            "Excellent interpersonal, negotiation, and conflict resolution skills",
            "Outstanding relationship building and employee coaching skills",
            "Ability to architect strategy along with leadership skills",
            "Extensive knowledge of HR policies and employment-related laws and regulations",
            "Excellent organizational skills, people oriented and results driven",
            "Strong analytical and problem-solving skills"
        ],
        experience: "0-3 year"
    },
    {
        title: "HR Recruiter",
        qualification: [
            "Bachelor Degree in Business Administration, Psychology or other related fields.",
            "Understanding recruitment criteria",
            "Understanding and developing compensation packages",
            "Operation of recruitment processes",
            "Computer skill",
            "Communication and Problem solving",
            "Have knowledge in labor law"
        ],
        responsibility: [
            "Recruitment & Selection , review job advertisement prior to posting",
            "Screen CVs conduct telephone screening",
            "Coordinate to contact job applicants and schedule interviews",
            "Create Employment contract , salary offer maintain employee records probation period",
            "Control employee refer workforce planning",
            "Conduct new employee orientation and guide general work system & welfare benefit in the company",
            "Contact with government and any other jobs requested",
            "Coordinate to headhunter for recruitment & Selection"
        ],
        experience: "0-3 year"
    },
    {
        title: "Junior Business Head – Consumer Electric Product (TV, A/C, WM, REF)",
        qualification: [
            "Manage and lead the end-to-end strategic planning staffing and talent acquisition including but not limited to planning, solve issue",
            "Summary data analysis and dashboard present, improvement plan",
            "Research and propose competition to complete target",
            "Champion employee training programs including operational cross-training, and leadership development",
            "Develop and implement strategies and initiatives to align the workforce with the organization culture and strategic goals",
            "Bridge management and employee relations",
            "Should have integrity, accountability, empathy, humility, resilience, vision, influence, and positivity.",
            "And inspiring people to do things they never thought they could",
            "Perform other duties or projects as assigned.",
            "Strong business management skills, be decisive, action-oriented."
        ],
        responsibility: [
            "Bachelor’s degree in Management or related field required",
            "Able to learning and working on our system required",
            "A minimum of 3 years of work on After Sale service about In-House & On-site service management",
            "Knowledge about route of area BKK and Up-Country requirement",
            "Responsible for developing and executing business plan for assigned work to meet company objectives by defining strategies",
            "Ensure operational excellence through input into business management as well as manage cost & revenue, P&L responsibility for the categories with a direct control over the annual business budget",
            "Manage a cross-functional team, work closely with Business Head and other functions to ensure that support the company’s overall strategy, goal and as well as work with various departments throughout the business involved",
            "Proficiency in English required",
            "Ability to act with integrity, professionalism, and confidentiality",
            "Exceptional verbal and written communication skills and ethical mindset",
            "Excellent interpersonal to develop and implement strategy to grow team",
            "Outstanding relationship building and employee coaching skills",
            "Ability to architect strategy along with leadership skills",
            "Excellent organizational skills, people oriented and results driven",
            "Strong analytical and problem-solving skills",
            "Owner Car, Car License required",
            "Able to travel able to work in other provinces"
        ],
        experience: "0-3 year"
    },
    // you can add other 2 positions in same pattern or refactor into json + map if needed.
];

const Career = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <>
            <Header />
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-primary mb-4">Grow With Us</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We promise:
                        </p>
                        <ul className="mt-6 space-y-2 text-lg text-muted-foreground">
                            <li>1. Long term growth</li>
                            <li>2. Great career opportunities</li>
                            <li>3. Overall development of Leadership</li>
                            <li>4. Multi brand experience</li>
                            <li>5. Financial stability</li>
                        </ul>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl font-semibold text-primary mb-6 text-center">
                            Job Positions Online
                        </h3>

                        {jobPositions.map((job, index) => (
                            <div
                                key={index}
                                className="border border-border rounded-lg mb-6 overflow-hidden"
                            >
                                <Button
                                    className="w-full flex justify-between items-center px-6 py-4 bg-accent hover:bg-accent/70 transition-colors"
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                >
                                    <span className="text-lg font-medium text-left">
                                        {job.title}
                                    </span>
                                    <ChevronDown
                                        className={cn("h-5 w-5 transition-transform", {
                                            "rotate-180": activeIndex === index
                                        })}
                                    />
                                </Button>
                                {activeIndex === index && (
                                    <div className="p-6 space-y-6 bg-background">
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2 text-primary">Qualification</h4>
                                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                                                {job.qualification.map((q, i) => (
                                                    <li key={i}>{q}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2 text-primary">Job Details / Responsibility Role</h4>
                                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                                                {job.responsibility.map((r, i) => (
                                                    <li key={i}>{r}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            <strong>Experience:</strong> {job.experience}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <h4 className="text-xl text-primary font-semibold mb-2">If you are the one... If you have the hunger... If you want a long-term family bonding with EDS</h4>
                        <p className="text-muted-foreground mb-4">Then contact HR</p>
                        <p className="text-lg font-medium text-primary">Email: hr.recruit@eds.co.th</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Career;
