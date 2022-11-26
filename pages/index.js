
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Nav/Navbar';
import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>CKD</title>
        <meta name='description' content='CKD' />
        <meta property='og:url' content='https://alignhealth.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='CKD Prevention' />
        <meta property='og:description' content=' Know early, stop the symptoms from starting.' />
        <meta property='og:image' content='https://alignhealth.vercel.app/kidney-icon.png' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='https://alignhealth.vercel.app/' />
        <meta property='twitter:url' content='https://alignhealth.vercel.app/' />
        <meta name='twitter:title' content='CKD Prevention' />
        <meta name='twitter:description' content=' Know early, stop the symptoms from starting.' />
        <meta name='twitter:image' content='https://alignhealth.vercel.app/kidney-icon.png' />
      </Head>
      <Navbar></Navbar>
      <header className='bg-sgreen-10 dark:bg-sgreen-980'>
        <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div className='mr-auto place-self-center lg:col-span-6'>
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900 dark:text-white'>
              CKD Prevention 
            </h1>
            <p className='max-w-2xl mb-6 font text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
              Know early, stop the symptoms from starting.
            </p>
            <a
              // onClick={() => plausible('PreOrderClick', { props: { location: 'hero' } })}
              href='#signup'
              className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-borange-600 hover:bg-borange-800 focus:ring-4 focus:ring-borange-300 dark:focus:ring-borange-900'>
              I am a patient
              <svg
                className='w-5 h-5 ml-2 -mr-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'></path>
              </svg>
            </a>
            <a
              href='#feature-section'
              className='inline-flex items-center justify-center px-5 py-3 my-1 text-base font-medium text-center text-gray-900 border border-gray-500 rounded-lg hover:bg-sgreen-40 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
              I am a doctor
            </a>
          </div>
          <div className='m-3 lg:col-span-5 lg:flex round motion-safe:animate-fadeIn'>
            <img
              className='rounded-lg '
              src='/kidney-icon.png' 
              alt='kidney'
            />
          </div>
        </div>
      </header>
      {/* <TestimonialSection />
      <FeatureSection></FeatureSection>
      <GallerySection></GallerySection>
      <FAQSection></FAQSection>
      <EmailSection></EmailSection> */}
      <Footer></Footer>
    </>
  );
}

export default Home;