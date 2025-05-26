import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useParams } from 'react-router';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };
const userId= useParams();
  const handleSubmitFeedBack = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/feedback/${userId}`, {
        feedback: feedback
      });

      if (response.status === 201 || response.status === 200) {
        alert('Feedback submitted successfully');
        setFeedback('');
      } else {
        alert('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occurred while submitting feedback');
    }
  };

  return (
    <div className='w-full md:w-1/2 mt-7 md:mt-22'>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className='relative rounded-2xl shadow-lg border border-gray-200 p-6 bg-white'
      >
        <form onSubmit={handleSubmitFeedBack} className='flex flex-col gap-5 items-center w-full'>
          <textarea
            name='feedback'
            value={feedback}
            onChange={handleChange}
            cols='20'
            rows='5'
            placeholder='Your Feedback'
            className='w-full text-gray-500 p-4 outline-none shadow shadow-pink-800 rounded-md'
            required
          ></textarea>
          <button
            type='submit'
            className='cursor-pointer p-2 rounded-2xl text-white text-xl w-[50%] md:w-[30%] bg-pink-700 hover:bg-pink-600 shadow-amber-100 shadow'
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Feedback;
