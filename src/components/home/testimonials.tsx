'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Testimonials = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const testimonials = [
    {
      name: 'Saqlain Shaikh',
      role: 'CEO Osker Tech',
      content:
        'Lahoti Textile towels are consistently our best sellers! Their vibrant designs and unique patterns attract customers, while the soft, durable materials guarantee satisfaction. Their towels are perfect for the beach, pool, or even just relaxing at home. We appreciate their competitive pricing and reliable production schedules, which allow us to offer our customers a fantastic product at a great value',
      rating: '⭐⭐⭐⭐⭐',
      image: '/testimonials/saqlain.png', // replace with the actual image path
    },

    {
      name: 'Girish Digge',
      role: 'Founder Fitness Gym',
      content: `At our gym, hygiene is paramount. That's why we chose towels from Lahoti Textile. Their towels are highly absorbent and quick-drying, which keeps our equipment and workout areas clean and fresh. Additionally, the towels are lightweight and comfortable, allowing our members to focus on their workout without bulky distractions.`,
      rating: '⭐⭐⭐⭐⭐',
      image: '/testimonials/girish.png', // replace with the actual image path
    },
  ];

  return (
    <div className='flex flex-col items-center mt-20'>
      <div className=''>
        <h1 className='text-7xl text-num-orange opacity-10 font-medium'>
          Testimonials
        </h1>

        <h2 className='-translate-y-12 ml-28 text-4xl text-num-indigo font-medium'>
          Testimonials
        </h2>
      </div>
      <div className='relative mb-10 w-4/5 border border-1 rounded-sm shadow-lg'>
        <Slider {...settings}>
          {testimonials.map((test, index) => (
            <div key={index} className='flex mt-10 mb-5 '>
              <div className='md:grid grid-cols-2'>
                <div className='md:w-4/5 flex flex-row-reverse pr-10  border-dotted border-r border-r-1 pb-1 border-num-indigo '>
                  <Image
                    src={test.image}
                    height={200}
                    width={200}
                    alt='img'
                    className='w-72 '
                  />
                </div>
                <div className='flex items-center'>
                  <div className='mb-2'>
                    <h1 className='h-3 text-8xl  text-left text-num-indigo'>
                      “
                    </h1>
                    <p className='px-8 py-4 text-md text-center text-num-indigo'>
                      {test.content}
                    </p>
                    <div className='h-3 text-8xl text-right text-num-indigo'>
                      ”
                    </div>
                  </div>
                </div>
                <div className='w-4/5 flex flex-col items-center '>
                  <h1 className='text-4xl text-num-indigo'>{test.name}</h1>
                  <h2 className='text-md'>{test.role}</h2>
                </div>
                <div className='flex justify-center items-center mr-10'>
                  {test.rating}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Testimonials;
