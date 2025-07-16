import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react";
import { Warehouse, Truck } from "lucide-react"; // ใช้ icon จาก Lucide

const SmartHomeBanner = () => {
    const navigate = useNavigate();
    const { ref, inView } = useInView({ threshold: 0.5 });
    const [key, setKey] = useState(0);

    // ทุกครั้งที่เห็น section ให้เริ่มใหม่
    useEffect(() => {
        if (inView) {
            setKey((prev) => prev + 1); // 🔁 trigger animation
        }
    }, [inView]);

    return (
        <section className="py-20 bg-background" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        Smart Home Electronics
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Expert in Smart Warehouse Integration & Automation Solution
                    </p>
                </div>

                {/* Animated Banner */}
                <div className="bg-gradient-primary rounded-2xl p-12 text-center relative overflow-hidden">
                    {/* Icons Animation */}
                    <div key={key} className="relative h-28 mb-12">
                        {/* Truck moving in */}
                        <Truck className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 text-white w-10 h-10 animate-truck-in" />

                        {/* Logo above warehouse */}
                        <div className="bg-white rounded-lg p-1 inline-block shadow-md">
                            <img
                                src="/logos/smarthome-logo.png"
                                alt="SmartHome Logo"
                                className="w-16 mx-auto"
                            />
                        </div>


                        {/* Warehouse */}
                        <Warehouse className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12 animate-fade-in-warehouse delay-[1.8s]" />

                        {/* Truck moving out */}
                        <Truck className="absolute left-[56%] top-1/2 transform -translate-y-1/2 text-white w-10 h-10 animate-truck-out delay-[3s]" />
                    </div>

                    {/* Text CTA */}
                    <h3 className="text-3xl font-bold text-primary-foreground mb-6">
                        Explore SmartHome Solutions
                    </h3>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="rounded-full"
                        onClick={() => navigate("/smart-home")}
                    >
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SmartHomeBanner;
