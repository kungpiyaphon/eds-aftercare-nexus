import Slider from 'react-slick';
import CountUp from 'react-countup';

const images = [
  '/images/about1.jpg',
  '/images/about2.jpg',
  '/images/about3.jpg',
];

const AboutSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="w-full bg-white py-20 px-4 md:px-16 flex flex-col md:flex-row items-center gap-10">
      {/* Left: Text content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#13255B]">
          EDS Electronics Data Source & Supply Limited
        </h2>
        <p className="text-xl font-medium text-gray-600">
          We are one of the largest Warehousing and After-sales service providers in Thailand.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Working with multiple worldwide brands in consumer electronics, telecom, and IT products</li>
          <li>Providing high-standard facilities and services</li>
          <li>Expertise in reverse logistics and warranty management</li>
        </ul>
      </div>

      {/* Right: Image carousel + stats */}
      <div className="w-full md:w-1/2 relative">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`About us ${index + 1}`}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </Slider>

        {/* Stats overlay */}
        <div className="absolute bottom-4 left-4 md:left-8 bg-white bg-opacity-90 rounded-xl shadow-md p-4 flex gap-6">
          <div className="text-center">
            <p className="text-sm text-gray-500">Established</p>
            <p className="text-2xl font-bold text-[#13255B]">
              <CountUp end={1996} duration={2} separator='' />
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Employees</p>
            <p className="text-2xl font-bold text-[#13255B]">
              <CountUp end={350} duration={2.5} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
