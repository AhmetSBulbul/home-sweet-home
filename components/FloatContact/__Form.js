import styles from "./index.module.css";
import { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import BaseButton from "../BaseButton";
import FormField from "./__Field";

const CloseBtn = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-2 flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default function Form({
  setShowFailureMessage,
  setShowSuccessMessage,
  onClickClose,
}) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  //const ref = useRef();
  //useOnClickOutside(ref, clickOuter);

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] =
    useState("Gönder");

  // Setting success or failure messages states

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Gönderiliyor");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Gönder");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Gönderildi");
    }
    console.log(
      fullname,
      email,
      subject,
      message
    );
  };

  return (
    <>
      <div className="flex justify-between">
        <h2 className="font-display font-bold text-xl">
          Bana Ulaşın!
        </h2>
        <CloseBtn onClick={onClickClose} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <FormField
          labelText="Ad Soyad"
          name="fullname"
          type="text"
          value={fullname}
          onChange={(e) =>
            setFullname(e.target.value)
          }
        />
        <FormField
          labelText="E-Posta"
          name="email"
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
        <FormField
          labelText="Konu"
          name="subject"
          type="text"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
        />
        <label
          htmlFor="message"
          className={styles.label}
        >
          Mesaj
        </label>
        <textarea
          name="message"
          className={styles.input}
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />
        <div className="flex flex-row">
          <button
            type="submit"
            className="bg-secondary w-full h-full text-center text-white font-link rounded-md antialiased px-4 py-2"
          >
            {buttonText}
          </button>
        </div>
      </form>
      <div className="flex flex-row items-center justify-center text-center mb-4 font-display antialised">
        ya da
      </div>
      <a
        href="https://superpeer.com/ahmetsbulbul/-/bana-soru-sor"
        target="_blank"
        rel="noreferrer"
        className="bg-night bg-opacity-80 font-link font-light subpixel-antialiased text-white rounded-md px-2 py-2 text-center"
      >
        Superpeer üzerinden ücretsiz olarak 1:1
        görüşme için randevu alabilirsiniz.
      </a>
    </>
  );
}
