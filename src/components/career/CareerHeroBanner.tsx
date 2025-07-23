import { useEffect, useState } from "react";

const careerImages = [
  "/images/career/career1.jpg",
  "/images/career/career2.jpg",
  "/images/career/career3.jpg",
  "/images/career/career4.jpg",
  "/images/career/career5.jpg",
  "/images/career/career6.jpg",
  "/images/career/career7.jpg",
  "/images/career/career8.jpg",
  "/images/career/career9.jpg",
  "/images/career/career10.jpg",
  "/images/career/career11.jpg",
  "/images/career/career12.jpg",
];

const lines = [
  "If you are the one ...",
  "If you have the hunger ... ",
  "If you want a long-term family",
  "Bonding with EDS",
];

export default function CareerHeroBanner() {
  const [currentImage, setCurrentImage] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % careerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Typing animation effect
  useEffect(() => {
    let typingInterval: NodeJS.Timeout;

    if (isTyping) {
      typingInterval = setInterval(() => {
        const fullText = lines[currentLineIndex];
        if (charIndex < fullText.length) {
          setTypedText((prev) => prev + fullText[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);

          setTimeout(() => {
            const nextLineIndex = currentLineIndex + 1;

            if (nextLineIndex < lines.length) {
              // Add completed line to displayed lines, start next line
              setDisplayedLines((prev) => [...prev, fullText]);
              setTypedText("");
              setCharIndex(0);
              setCurrentLineIndex(nextLineIndex);
              setIsTyping(true);
            } else {
              // All lines completed
              setDisplayedLines((prev) => [...prev, fullText]);
              setTimeout(() => {
                // Reset all
                setDisplayedLines([]);
                setTypedText("");
                setCharIndex(0);
                setCurrentLineIndex(0);
                setIsTyping(true);
              }, 3000);
            }
          }, 500);
        }
      }, 90);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, currentLineIndex, isTyping]);

  return (
    <section className="min-h-[70vh] bg-gradient-to-br from-[#13255B] via-[#3E4E85] to-[#9CB2E0] flex items-center justify-center px-4">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        {/* Left Text Content */}
        <div className="text-white text-xl md:text-3xl font-semibold tracking-wide space-y-2">
          {displayedLines.map((line, idx) => (
            <p key={idx} className="whitespace-nowrap">{line}</p>
          ))}
          {isTyping && (
            <p className="whitespace-nowrap">
              {typedText}
              <span className="animate-pulse text-white">|</span>
            </p>
          )}
        </div>

        {/* Right Image Layout */}
        <div className="grid grid-cols-10 grid-rows-10 w-full h-[420px] gap-2 relative">
          {/* Column 1 */}
          <div className="col-span-3 row-span-7">
            <img
              src={careerImages[(currentImage + 0) % careerImages.length]}
              alt="career-1"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="col-span-3 row-start-8 row-span-3">
            <img
              src={careerImages[(currentImage + 1) % careerImages.length]}
              alt="career-2"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Column 2 */}
          <div className="col-start-4 col-span-4 row-span-4">
            <img
              src={careerImages[(currentImage + 2) % careerImages.length]}
              alt="career-3"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="col-start-4 col-span-4 row-start-5 row-span-6">
            <img
              src={careerImages[(currentImage + 3) % careerImages.length]}
              alt="career-4"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Column 3 */}
          <div className="col-start-8 col-span-3 row-span-5">
            <img
              src={careerImages[(currentImage + 4) % careerImages.length]}
              alt="career-5"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="col-start-8 col-span-3 row-start-6 row-span-5">
            <img
              src={careerImages[(currentImage + 5) % careerImages.length]}
              alt="career-6"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
