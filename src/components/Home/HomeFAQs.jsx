import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import QuoteImg from "../../assets/arrow-right-side.svg"; // Assuming you want to use the quote image for styling

// Animation for the answer
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.div`
  cursor: pointer;
  padding: 25px;
  background-color: #ffcc00;
  border-radius: 8px;
  margin: 12px 0;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  & img {
    transition: transform 0.3s;
  }

  &:hover img {
    transform: rotate(90deg);
  }
`;

const Answer = styled.div`
  padding: 20px;
  background-color: #131e34;
  border-left: 6px solid #ffcc00;
  border-radius: 8px;
  margin-top: 15px;
  color: #dddddd;
  font-size: 1.1rem;
  font-weight: 400;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  animation: ${({ isOpen }) => (isOpen ? slideIn : "none")} 0.3s ease-in-out;
  text-align: left;
  line-height: 1.6;
`;

const FAQsWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            "question": "What services does Tantrija offer?",
            "answer": "Tantrija offers a range of IT services including Blockchain Development, Mobile App Development, Web App Development, Logo Design, UI/UX Design, AI Integration, Digital Marketing, and Game Development."
        },
        {
            "question": "How experienced is Tantrija?",
            "answer": "Tantrija has a highly experienced team with a proven track record in delivering innovative digital solutions across various tech domains. With expertise in blockchain, mobile, web, and game development, Tantrija ensures top-quality, cutting-edge services to clients."
        },
        {
            "question": "What industries does Tantrija serve?",
            "answer": "Tantrija serves a variety of industries, including small businesses, crypto projects, the gaming industry, and companies seeking digital transformation and management solutions. Their expertise spans across multiple sectors, including technology, finance, retail, and more."
        },
        {
            "question": "How can I start a project with Tantrija?",
            "answer": "To start a project with Tantrija, simply reach out via their website or contact their team directly. They will discuss your requirements, understand your vision, and propose a tailored solution to meet your needs."
        },
        {
            "question": "What is the project development process at Tantrija?",
            "answer": "The project development process at Tantrija begins with a detailed consultation to understand client requirements. This is followed by planning, design, development, testing, and deployment phases. The team ensures regular communication and client feedback throughout the process to guarantee the best results."
        },
        {
            "question": "What technologies does Tantrija specialize in?",
            "answer": "Tantrija specializes in various technologies including Blockchain (Crypto Projects), Mobile App Development, Web App Development, Front End and Back End Development, Database Management, and Infra & DevOps. They also integrate AI solutions and offer game development services."
        },
        {
            "question": "How does Tantrija ensure customer satisfaction?",
            "answer": "Tantrija ensures customer satisfaction by maintaining a user-centric approach, regular communication, and delivering high-quality, scalable solutions tailored to each client's needs. The team focuses on transparent collaboration, meeting deadlines, and exceeding expectations."
        },
        {
            "question": "Can I see customer reviews for Tantrija's services?",
            "answer": "Yes, customer reviews and testimonials for Tantrija's services can be found on their website, showcasing the positive experiences of clients who have worked with Tantrija on various projects."
        },
        {
            "question": "Where can I find more information about Tantrija?",
            "answer": "For more information about Tantrija, visit their official website or reach out to their team through social media platforms or email. Detailed information about their services, portfolio, and contact details is available online."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className="bg-circle-right vh-70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="text-center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">
                        <p className="text-uppercase text-white">Let`s Doubt</p>
                        <hr className="border-white mt-1 mx-auto hr-x-small" />
                        <h4 className="text-warning text-uppercase mb-5">Frequently Asked Questions</h4>
                        <FAQsWrapper>
                            {faqs.map((faq, index) => (
                                <FAQItem key={index}>
                                    <Question onClick={() => toggleFAQ(index)}>
                                        <span>{faq.question}</span>
                                        <img src={QuoteImg} width={20} alt="Expand" />
                                    </Question>
                                    <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
                                </FAQItem>
                            ))}
                        </FAQsWrapper>
                    </div>
                </div>
            </div>
        </div>
    );
}
