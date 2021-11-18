import React, { useState } from "react";
import styles from "./index.module.css";
import {
  RadioField,
  InputField,
  ThemeButton,
} from "../../components";
import { Arrow } from "../../components/icons";
import {
  serviceType,
  forecastBudgets,
} from "./constants";

const FieldsetWrap = ({
  label,
  id,
  optionsList,
  ...props
}) => (
  <fieldset id={id}>
    <div className={styles.fieldWrap}>
      <legend>
        {label}{" "}
        <span className="text-messaging-warning">
          *
        </span>
      </legend>
      <div className={styles.radioGroup}>
        {optionsList.map((option, index) => (
          <RadioField
            key={`${option.id}-${index}`}
            id={option.id}
            value={option.value}
            name={id}
            {...props}
          />
        ))}
      </div>
    </div>
  </fieldset>
);

export default function ContactForm({
  children,
  ...props
}) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [selectedService, setSelectedService] =
    useState("");
  const [selectedBudget, setSelectedBudget] =
    useState("");

  const [
    showSuccessMessage,
    setShowSuccessMessage,
  ] = useState(false);
  const [
    showFailureMessage,
    setShowFailureMessage,
  ] = useState(false);

  const resetState = () => {
    setShowSuccessMessage(false);
    setShowFailureMessage(false);
    setModalOpen(false);
  };
  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] =
    useState("Gönder");

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
    if (selectedService.length <= 0) {
      tempErrors["serviceType"] = true;
      isValid = false;
    }
    if (selectedBudget.length <= 0) {
      tempErrors["forecastBudget"] = true;
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
    <section className="content-container">
      {selectedService}
      {selectedBudget}
      <form
        name="contact"
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <FieldsetWrap
          id="service-type"
          optionsList={serviceType}
          label="Size Nasıl Yardımcı Olabilirim?"
          onClick={(e) =>
            setSelectedService(e.target.value)
          }
        />
        <FieldsetWrap
          id="budget"
          optionsList={forecastBudgets}
          label="Tahmini Bütçeniz Nedir?"
          onClick={(e) =>
            setSelectedBudget(e.target.value)
          }
        />
        <fieldset className={styles.inputsGroup}>
          <legend className="hidden">
            Kişisel Bilgiler
          </legend>
          <InputField
            name="fullname"
            value={fullname}
            onChange={(e) =>
              setFullname(e.target.value)
            }
          >
            İsim - Soyisim
          </InputField>
          <InputField
            name="phone"
            value={phone}
            type="tel"
            isRequired={false}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          >
            Telefon
          </InputField>
          <InputField
            name="email"
            value={email}
            type="email"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          >
            E-Posta
          </InputField>
          <InputField
            name="subject"
            value={subject}
            onChange={(e) =>
              setSubject(e.target.value)
            }
          >
            Konu
          </InputField>
          <InputField
            name="message"
            value={message}
            textArea
            onChange={(e) =>
              setMessage(e.target.value)
            }
          >
            Mesaj
          </InputField>
        </fieldset>
        <ThemeButton
          type="submit"
          withIcon
          className="ml-auto mt-4"
        >
          {buttonText} <Arrow />
        </ThemeButton>
      </form>
    </section>
  );
}
