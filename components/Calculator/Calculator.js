import { useRef, useState } from 'react';

function Calculator() {

  const inputEl = useRef(null);

  return (
    <footer className='bg-gray-200' id='signup'>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='lg:flex lg:gap-8'>
          <div className='grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16'>
            <div className='col-span-2'>
              <div>
                <h2 className='text-2xl font-bold text-black'>Calculate your risk factor</h2>

                <p className='mt-6 text-gray-600'>Please fill out the information as much as possible.</p>
              </div>
            </div>
            <label>Age</label>
            <input
                    className='w-full text-black h-12 p-3 text-sm font-medium border border-black placeholder-gray-500 uppercase bg-transparent'
                    id="age-input"
                    name="age"
                    placeholder="0-99"
                    ref={inputEl}
                    required
                    type="integer"
                    aria-label='age'
                  />
                  
                   <input
                    className='w-full text-black h-12 p-3 text-sm font-medium border border-black placeholder-gray-500 uppercase bg-transparent'
                    id="age-input"
                    name="age"
                    placeholder="0-99"
                    ref={inputEl}
                    required
                    type="integer"
                  />

            <div className='col-span-2 lg:col-span-3 lg:flex lg:items-end'>
              <form className='w-full text-white'>  


                  <button
                    className='w-full h-12 px-6 py-3 mt-1 text-sm font-bold tracking-wide uppercase bg-borange-700 sm:ml-4 sm:flex-shrink-0 sm:w-auto sm:mt-0'
                    type='submit'>
                    Calculate my risk factor
                  </button>
                  <button
                    className='w-full h-12 px-6 py-3 mt-1 text-sm font-bold tracking-wide uppercase bg-borange-700 sm:ml-4 sm:flex-shrink-0 sm:w-auto sm:mt-0'
                    type='submit'>
                    I have more data
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Calculator