import React, { useReducer } from "react";
import Head from "next/head";
import DropZone from "../components/DropZone";
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Nav/Navbar';
import styles from "../styles/Home.module.css";

function Doctor() {
      // reducer function to handle state changes
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };

  // destructuring state and dispatch, initializing fileList to empty array
  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });
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
      <header className='bg-sgreen-10 dark:bg-sgreen-980 text-center'>
        <div className='grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div className='mx-auto place-self-center lg:col-span-12'>
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900 dark:text-white'>
              Doctor portal
            </h1>
            <p className='max-w-2xl font text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
              Find out the risk factor of your patients. It&apos;s never too soon!
            </p>
          </div>
        </div>
      </header>

      <main className='px-8 py-16 sm:py-24 sm:px-16 bg-white text-black dark:bg-sgreen-980'>
        <h1 className={styles.title}>Drag And Drop File Upload</h1>
        {/* Pass state data and dispatch to the DropZone component */}
        <DropZone data={data} dispatch={dispatch} />
      </main>
      <section>
        <div className='px-8 py-16 sm:py-24 sm:px-16 bg-white text-black dark:bg-sgreen-980 '>
          <div className='mt-8 grid grid-cols-1 gap-8 lg:gap-16'>
            <div className='lg:py-8'>
              <div className='space-y-4'>
                <p>Please upload the patient’s test result.</p>
                <p>
                  Part of the EHH2022.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Doctor;
