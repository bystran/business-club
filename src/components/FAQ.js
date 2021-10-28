import React from 'react';

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={`faq ${faq.open ? 'open' : ''}`}
      key={index}
      onClick={() => toggleFAQ(index)}
      role="button"
      tabIndex={0}
      onKeyDown={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        {faq.question}
      </div>
      <div className="faq-answer">
        {faq.answer}
      </div>
    </div>
  );
}

export default FAQ;
