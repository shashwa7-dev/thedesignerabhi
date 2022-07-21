import emailjs from "@emailjs/browser";
import { useRef } from "react";
import styled from "styled-components";

const FooterFormCtr = styled.div`
  padding-bottom: 5rem;
  .formHead {
    p {
      margin: 1rem 0;
    }
  }
  .formContent {
    width: 100%;
    .credentials {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: clamp(1rem, 4vw, 3rem);
      .credField {
        width: 100%;
      }
      .inputFD {
        background: var(--input-field-bg);
        padding: 1rem;
        border: none;
        width: 100%;
        margin-top: 0.75rem;
        color: var(--color-p);
      }
      @media screen and (min-width: 50em) {
        flex-direction: row;
      }
    }

    .mssgField {
      display: flex;
      flex-direction: column;
      margin: 1.5rem 0;
      gap: 1rem;
      .mssgInputFD {
        background: var(--input-field-bg);
        color: var(--color-p);
        padding: 1rem;
        border: none;
        min-height: 22vh;
      }
    }

    .submitBtn {
      padding: clamp(0.5rem, 2vw, 0.75rem) 2rem;
      font-size: clamp(1rem, 2vw, 1.35rem);
      font-weight: var(--fw-b);
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.1s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
const FooterForm = () => {
  const form = useRef();

  //emailJS API credentials
  const SERVICE_ID = "service_9z2lh06";
  const TEMPLATE_ID = "template_90npk2u";
  const PUBLICK_KEY = "Uoej2anv1yGyJ8iSI";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLICK_KEY).then(
      (result) => {
        form.current.reset();
        alert("Email Recevied.");
      },
      (error) => {
        alert("Email Failed.");
        console.log(error.text);
      }
    );
  };

  return (
    <FooterFormCtr className="contentCtr">
      <div className="formHead">
        <p className="titleMd">Drop me a line!</p>
        <p className="infoTxt">
          Are you looking for new ideas? Do not hesitate to ask me, and we can
          brainstorm together.
        </p>
      </div>
      <form className="formContent" ref={form} onSubmit={sendEmail}>
        <div className="credentials">
          <div className="userName credField">
            <label>Name</label>
            <input
              type="text"
              className="username inputFD"
              name="user_name"
              required
            />
          </div>
          <div className="emailAddress credField">
            <label>Email</label>
            <input
              type="email"
              className="useremail inputFD"
              name="user_email"
              required
            />
          </div>
        </div>
        <div className="mssgField">
          <label>Message</label>
          <textarea className="mssgInputFD" name="message" required />
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </FooterFormCtr>
  );
};

export default FooterForm;
