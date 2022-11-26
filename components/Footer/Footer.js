import Link from 'next/link';
import React from 'react'

function Footer() {
  return (
    <footer className='p-4 bg-white sm:p-6 dark:bg-sgreen-990'>
      <div className='md:flex md:justify-between'>
        <div className='mb-6 md:mb-0'>
          <Link legacyBehavior href='/'>
            <a className='flex items-center'>
              <img src='/kidney-icon.png' className='mr-3 h-8' alt='Kais Logo' />
              <span className='self-center text-borange-600 text-2xl font-semibold whitespace-nowrap dark:text-borange-400'>
              CKD Prevention 
              </span>
            </a>
          </Link>
        </div>
        <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2'>
          {/* <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Resources</h2>
            <ul className='text-gray-600 dark:text-gray-400'>
              <li className='mb-4'>
                <a
                  href='#'
                  className='hover:underline'>
                  References
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:underline'>
                  Statistics
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Legal</h2>
            <ul className='text-gray-600 dark:text-gray-400'>
              <li className='mb-4'>
                <Link legacyBehavior href='/privacypolicy'>
                  <a className='hover:underline'>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='/termsandconditions'>  
                  <a className='hover:underline'>Terms &amp; Conditions</a>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          Made in EU
          <svg className='h-8 w-10' viewBox='0 0 810 540'>
            <defs>
              <g id='d'>
                <g id='b'>
                  <path id='a' d='M0 0v1h.5z' transform='rotate(18 3.157 -.5)' />
                  <use xlinkHref='#a' transform='scale(-1 1)' />
                </g>
                <g id='c'>
                  <use xlinkHref='#b' transform='rotate(72)' />
                  <use xlinkHref='#b' transform='rotate(144)' />
                </g>
                <use xlinkHref='#c' transform='scale(-1 1)' />
              </g>
            </defs>
            <path fill='#039' d='M0 0h810v540H0z' />
            <g fill='#fc0' transform='matrix(30 0 0 30 405 270)'>
              <use xlinkHref='#d' y='-6' />
              <use xlinkHref='#d' y='6' />
              <g id='e'>
                <use xlinkHref='#d' x='-6' />
                <use xlinkHref='#d' transform='rotate(-144 -2.344 -2.11)' />
                <use xlinkHref='#d' transform='rotate(144 -2.11 -2.344)' />
                <use xlinkHref='#d' transform='rotate(72 -4.663 -2.076)' />
                <use xlinkHref='#d' transform='rotate(72 -5.076 .534)' />
              </g>
              <use xlinkHref='#e' transform='scale(-1 1)' />
            </g>
          </svg>
        </span>
        <br />
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2022{' '}
          <a href='#' className='hover:underline'>
          CKD Prevention 
          </a>  
        </span>
      </div>
    </footer>
  );
}

export default Footer