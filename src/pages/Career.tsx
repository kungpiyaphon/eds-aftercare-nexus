import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CareerHeroBanner from "@/components/CareerHeroBanner";
import LeaveBenefitsSection from "@/components/LeaveBenefitsSection";
import GrowWithUs from "@/components/GrowWithUs";

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
        <div className="min-h-screen bg-background">
            <Header />
            <section className="py-20 bg-background">
            <CareerHeroBanner />
            <LeaveBenefitsSection />
            <GrowWithUs />
            
            </section>
            <Footer />
        </div>
    );
};

export default Career;
