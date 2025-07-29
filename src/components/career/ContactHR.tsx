import { Mail, MessageSquareHeart } from "lucide-react";

export default function ContactHR() {
  return (
    <section className="text-primary py-6">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <MessageSquareHeart className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Apply Now !
        </h2>

        <div className="flex flex-col items-center gap-2 mt-4">
          <div className="flex items-center gap-2 text-lg">
            <Mail className="h-5 w-5" />
            <a
              href="mailto:hr.recruit@eds.co.th?subject=Application for HR Position&body=Dear HR Team, ..."
              className="hover:underline hover:text-primary transition-colors duration-200"
              >
              hr.recruit@eds.co.th
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm text-primary/70">
          We’re always looking for passionate people to join our growing family.
        </p>
      </div>
    </section>
  );
}