const KeyFacts = () => {
  return (
    <div>
      <div className='md:flex mt-16 mb-16'>
        <div className='md:flex items-center justify-center w-10'>
          <div className='hidden md:flex bg-num-orange h-32 w-10 mt-10 mb-10'></div>
        </div>
        <div className='md:flex md:flex-col justify-center items-center w-2/5'>
          <h1 className='text-4xl font-bold text-num-indigo w-4/5 mb-5'>
            Key Facts
          </h1>
          <p className='hidden md:flex text-md text-num-indigo font-medium w-4/5'>
            We are commited to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
        </div>
        <div className='md:grid md:grid-cols-3 items-center w-3/5 '>
          <div className='flex flex-col  w-4/5 ml-5'>
            <h1 className='text-6xl text-num-orange font-bold mb-2'>6600+</h1>{' '}
            <p className='text-md text-num-blue font-medium'>
              Road & Highway Project(km)
            </p>
          </div>
          <div className='flex flex-col  w-4/5 ml-5'>
            <h1 className='text-6xl text-num-orange font-bold  mb-2'>1230+</h1>{' '}
            <p className='text-md text-num-blue font-medium w-2/3'>
              Oil & Gas Pipeline(km)
            </p>
          </div>
          <div className='flex flex-col  w-4/5 ml-5'>
            <h1 className='text-6xl text-num-orange font-bold  mb-2'>900+</h1>{' '}
            <p className='text-md text-num-blue font-medium'>
              Civil Construction Projects(Mil sq ft)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KeyFacts;
