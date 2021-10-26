/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import FAQ from '../FAQ';
import '../../sass/sections/MentorFAQ.scss';

const MentorFAQ = () => {
  const [faqs, setfaqs] = useState([
    {
      question: 'Is there  a fee for the programme?',
      answer: 'No. The programme is completely free for its entire duration.',
      open: false,
    },
    {
      question: 'Are there any restrictions to applying for the programme?',
      answer: 'The programme is open to all GUBC members regardless of their degree, year of study, and goals.',
      open: false,
    },
    {
      question: 'What if I´m not sure what I want to achieve?',
      answer: 'A lack of clarity on your goals is not a barrier to entry to the programme - quite the opposite. With the amount of options available to students nowadays, it is easy to fall into analysis paralysis. Guidance from a mentor can be incredibly useful to help clarify what would be a suitable starting point for you.',
      open: false,
    },
    {
      question: 'How many spaces are available?',
      answer: 'We are limiting the programme to a maximum of 15 mentees, but don´t let that discourage you from applying! We carefully consider each application and are primarily looking for qualities such as drive to improve, and motivation.',
      open: false,
    },
    {
      question: 'Can I quit the programme before its conclusion?      ',
      answer: 'The mentoring programme is 100% voluntary, and works best when both the mentor and the mentee are motivated to cooperate. While we encourage all of the mentees to finish the programme, we understand that serious reasons to quit the programme may occur – no one will be pressured to remain in the programme.',
      open: false,
    },

    {
      question: 'Can I select my mentor?',
      answer: 'Based on your application, you will be paired with a mentor that best fits your goals and requirements. We are also available to support you throughout the mentorship programme to assure smooth and effective collaboration.',
      open: false,
    },

  ]);

  const toggleFAQ = (index) => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }

      return faq;
    }));
  };

  return (
    <div className="App">

      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
};

export default MentorFAQ;
