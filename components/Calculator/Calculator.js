import { useState } from 'react';

function Calculator() {
  const [showRisk, setShowRisk] = useState(false);
  const [formData, setFormData] = useState({ age: '', gender: 'male', GFR: '', urineAlbumin: '', weight: '', height: '' });
  const [calcRisk, setRisk] = useState('-');
  const calculateRisk = (e) => {
    e.preventDefault();
    calculateCKDRisk(formData)
    setShowRisk(true);
    // console.log(formData,calcRisk)
  };

  //create function to calculate risk of chronic kidney disease
  function calculateCKDRisk(formData) {
    let { age, gender, GFR, urineAlbumin, weight, height } = formData;
    let BMI = weight / Math.pow(height / 100, 2);
    //initialize risk variable
    let risk = 0;
    //calculate risk based on age and gender
    if (age > 60 && gender === 'male') {
      risk += 20;
    } else if (age > 60 && gender === 'female') {
      risk += 10;
    }
    //calculate risk based on GFR
    if (GFR && GFR < 60) {
      risk += 30;
    } else if (GFR >= 60 && GFR < 90) {
      risk += 15;
    }
    //calculate risk based on urine albumin levels
    if (urineAlbumin && urineAlbumin >= 30 && urineAlbumin < 300) {
      risk += 20;
    } else if (urineAlbumin >= 300) {
      risk += 30;
    }
    //calculate risk based on BMI
    if (BMI && BMI >= 25 && BMI < 30) {
      risk += 10;
    } else if (BMI >= 30) {
      risk += 20;
    }
    //return calculated risk
    return setRisk(risk);
  }

  return (
    <footer className='bg-gray-200' id='signup'>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className=' lg:gap-8'>
          <div className='grid justify-center gap-8 mt-8 lg:mt-0  lg:gap-y-16'>
              <div>
                <h2 className='text-2xl font-bold text-black'>Calculate your risk factor</h2>
                <p className='mt-6 text-gray-600'>Please fill out as much information as possible.</p>
                <p className='mt-2 mb-6 text-gray-600'>
                  You are safe. All the details you provide are processed in your own computer. We do not collect nor
                  process any of your personal data.
                </p>
            </div>
          </div>

          <form className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 mb-6 w-full group'>
                <input
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  type='integer'
                  name='floating_email'
                  id='floating_email'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='floating_email'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Age (years)
                </label>
              </div>

              <div className='relative z-0 mb-6 w-full group'>
                <input
                  type='integer'
                  name='floating_password'
                  id='floating_password'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                />
                <label
                  htmlFor='floating_password'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Weight (kg)
                </label>
              </div>
              <div className='relative z-0 mb-6 w-full group'>
                <input
                  type='integer'
                  name='Height'
                  id='floating_repeat_password'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                />
                <label
                  htmlFor='floating_repeat_password'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Height (cm)
                </label>
              </div>

              <div className='relative z-0 mb-6 w-full group'>
                <select
                  onChange={(e) => (console.log(formData),setFormData({ ...formData, gender: e.target.value }))}
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
                <label
                  htmlFor='floating_first_name'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Gender
                </label>
              </div>
            </div>
            <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 mb-6 w-full group'>
                <input
                  type='Gender'
                  name='Gender'
                  id='Gender'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                  onChange={(e) => setFormData({ ...formData, GFR: e.target.value })}
                />
                <label
                  htmlFor='floating_last_name'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  GFR (ml/min/1.73m2)
                </label>
              </div>
              <div className='relative z-0 mb-6 w-full group'>
                <input
                  type='number'
                  pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                  name='floating_phone'
                  id='floating_phone'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                  onChange={(e) => setFormData({ ...formData, urineAlbumin: e.target.value })}
                />
                <label
                  htmlFor='floating_phone'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Urine Albumin (mg/l)
                </label>
              </div>
            </div>
            <button
              className='text-white w-full h-12 px-6 py-3 mt-1 text-sm font-bold tracking-wide uppercase bg-borange-700 sm:ml-4 sm:flex-shrink-0 sm:w-auto sm:mt-0'
              onClick={(e) => calculateRisk(e)}>
              Calculate my risk factor
            </button>
            {/* <button
              className=' text-white w-full h-12 px-6 py-3 mt-1 text-sm font-bold tracking-wide uppercase bg-borange-700 sm:ml-4 sm:flex-shrink-0 sm:w-auto sm:mt-0'
              onClick={(e) => calculateRisk(e)}>
              I have more data
            </button> */}
          </form>
          {showRisk && (
            <div>
              <h2 className='text-2xl text-center font-bold text-black'>Your risk factor is:</h2>
              <h2 className='text-3xl text-center my-5 font-bold text-black'>{calcRisk}</h2>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Calculator;