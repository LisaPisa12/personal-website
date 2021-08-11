import React from "react";
import emailjs from "emailjs-com";
import {
  WorksSection,
  ContactHeader,
  ContactText,
  WorkContent,
  Form,
  Input,
  MessageBox,
  SubmitButton,
} from "./Contact.Elements";

const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID || "",
        process.env.TEMPLATE_ID || "",
        event.target,
        process.env.REACT_APP_USER_ID || ""
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <WorksSection>
      <WorkContent>
        <ContactHeader>Contact</ContactHeader>
        <ContactText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit voluptate nesciunt iure sit obcaecati aliquam, soluta,
          harum deleniti similique laboriosam in perspiciatis nemo repellat
          nihil. Dicta rem numquam quibusdam ab?
        </ContactText>
        <Form className="contact-form" onSubmit={sendEmail}>
          <div>
            <Input type="hidden" name="contact_number" />
            <Input type="text" name="user_name" placeholder="Your Name" />
            <Input type="email" name="user_email" placeholder="Your Email" />
          </div>

          <MessageBox
            name="message"
            placeholder="Your Message to Me"
            maxLength="280"
          />
          <SubmitButton type="submit">Get in touch</SubmitButton>
        </Form>
      </WorkContent>
    </WorksSection>
  );
};

export default Contact;
