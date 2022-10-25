import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
      <div>
        <h3>Frequently Asked Question</h3>
          <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>1.What is Programming language?</Accordion.Header>
          <Accordion.Body>
          A programming language is a system of notation for writing computer programs. Most programming languages are text-based formal languages, but they may also be graphical. They are a kind of computer language
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2.About best practice in software development</Accordion.Header>
          <Accordion.Body>
          One of the software development best practices is to have a software requirements specification document, or SRSD, which includes software requirements and design specifications. This software development best practices resource ensures that requirements are met and processes are followed
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>3. What is firebase authentication</Accordion.Header>
          <Accordion.Body>
          Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    );
};

export default Faq;