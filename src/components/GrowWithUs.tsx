import { Sparkles } from "lucide-react";

export default function GrowWithUs() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4 justify-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 flex justify-center items-center gap-2">
            <Sparkles className="text-accent w-6 h-6" />
            Grow With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We promise:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Long term growth",
            "Great career opportunities",
            "Overall development of Leadership",
            "Multi brand experience",
            "Financial stability",
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border p-6 shadow-md bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300"
            >
              <h4 className="text-base font-semibold text-primary text-center mb-2">
                {index + 1}.{item}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
