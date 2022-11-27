import { useRef, useState } from 'react';

function Calculator() {

  const inputEl = useRef(null);
  const age = useRef(null);
  const formData = useState({age:"",sex:""})
  const calculateRisk = (e) =>{
    e.preventDefault()
    alert("We are still refining the risk factor model. Please try again later.")
  }

  return (
    <footer className='bg-gray-200' id='signup'>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='lg:flex lg:gap-8'>
          <div className='grid justify-center gap-8 mt-8 lg:mt-0  lg:gap-y-16'>
            <div className='col-span-2'>
              <div>
                <h2 className='text-2xl font-bold text-black'>Calculate your risk factor</h2>
                <p className='mt-6 text-gray-600'>Please fill out as much information as possible.</p>
              </div>
            </div>
          </div>

          <form className='mt-8'>
          <div class='grid md:grid-cols-2 md:gap-6'>
            <div class='relative z-0 mb-6 w-full group'>
              <input
                type='integer'
                name='floating_email'
                id='floating_email'
                class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                for='floating_email'
                class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                Age
              </label>
            </div>
            
            <div class='relative z-0 mb-6 w-full group'>
              <input
                type='integer'
                name='floating_password'
                id='floating_password'
                class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                for='floating_password'
                class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                Weight
              </label>
            </div>
            <div class='relative z-0 mb-6 w-full group'>
              <input
                type='integer'
                name='Height'
                id='floating_repeat_password'
                class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                for='floating_repeat_password'
                class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                Height
              </label>
            </div>
            
              <div class='relative z-0 mb-6 w-full group'>
                <input
                  type='text'
                  name='floating_first_name'
                  id='floating_first_name'
                  class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  for='floating_first_name'
                  class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Gender
                </label>
              </div>
              
            </div>
            <div class='grid md:grid-cols-2 md:gap-6'>
            <div class='relative z-0 mb-6 w-full group'>
                <input
                  type='Gender'
                  name='Gender'
                  id='Gender'
                  class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  for='floating_last_name'  
                  class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  GFR (ml/min/1.73m2)
                </label>
              </div>
              <div class='relative z-0 mb-6 w-full group'>
                <input
                  type='number'
                  pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                  name='floating_phone'
                  id='floating_phone'
                  class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  for='floating_phone'
                  class='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Urine Albumin (mg/l)
                </label>
              </div>
            </div>
            <button
                className='text-white w-full h-12 px-6 py-3 mt-1 text-sm font-bold tracking-wide uppercase bg-borange-700 sm:ml-4 sm:flex-shrink-0 sm:w-auto sm:mt-0'
                onClick={(e) => calculateRisk(e)}>
                Calculate my risk factor
              </button>
              <button className=' text-white w-full h-12 px-6 py-3 mt-1 text-sm font-bold tracking-wide uppercase bg-borange-700 sm:ml-4 sm:flex-shrink-0 sm:w-auto sm:mt-0'
              onClick={(e) => calculateRisk(e)}>
                
                I have more data
              </button>
          </form>

        </div>
      </div>
    </footer>
  );
}

export default Calculator