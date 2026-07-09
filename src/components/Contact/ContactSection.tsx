"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, SendHorizonal } from "lucide-react";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";

import useLocale from "@/hooks/useLocale";
import { getDictionary } from "@/lib/getDictionary";

import ContactToast from "./ContactToast/ContactToast";

import styles from "./ContactSection.module.scss";

const ContactSection = () => {
  const locale = useLocale();
  const dict = getDictionary(locale);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [toast, setToast] = useState({
    show: false,
    type: "success" as "success" | "error",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = dict.contact.errors.name;
    }

    if (!formData.email.includes("@")) {
      newErrors.email = dict.contact.errors.email;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = dict.contact.errors.subject;
    }

    if (formData.message.trim().length < 20) {
      newErrors.message = dict.contact.errors.message;
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((value) => value === "")) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Erro ao enviar");
        }

        setToast({
          show: true,
          type: "success",
          message:
            locale === "pt"
              ? "Mensagem enviada com sucesso!"
              : "Message sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch {
        setToast({
          show: true,
          type: "error",
          message:
            locale === "pt"
              ? "Não foi possível enviar a mensagem."
              : "Unable to send message.",
        });
      }
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.header}>
        <h2 className={styles.title}>
          <Mail size={40} />
          {dict.contact.title}
        </h2>

        <p className={styles.subtitle}>{dict.contact.subtitle}</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.map}>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB_EvBTRS197G64B2JQQcrsrOtx15at3nJOFlhYDINSpkzmySVbG0W0VoP67iDV-KL1GJA1vfMt91Ns-fca_Y6NsNAkIpp9g0I_TVezuz5LREWj4zQVShIEE8P5z5CDqPyVXvkfJL4947CLol57By2RGjp5hrBMJB7ZcPtO6ncoYtXRcUdP3wVU5HaE4lVJ4AaTrIOzDp6u4nUpz53ZMpK9Iwn7l9xyTta3LmRuHvWsVRoSbtkKc270EGgnpAI8AHw4F0cYHWJRH8H"
              alt="map"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.mapImage}
            />

            <div className={styles.mapOverlay}>
              <div className={styles.locationTag}>
                <div className={styles.ping} />
                <span>{dict.contact.location}</span>
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            <Link
              className={styles.card}
              href="mailto:kayque.cunha.dev@gmail.com"
              target="_blank"
            >
              <div className={styles.iconContainer}>
                <Mail size={28} />
              </div>

              <div>
                <span>Email</span>
                <strong>kayque.cunha.dev@gmail.com</strong>
              </div>
            </Link>

            <Link
              className={styles.card}
              href="https://linkedin.com/in/kayque-sekishiki"
              target="_blank"
            >
              <div className={styles.iconContainer}>
                <TbBrandLinkedinFilled size={28} />
              </div>

              <div>
                <span>LinkedIn</span>
                <strong>/kayque-sekishiki</strong>
              </div>
            </Link>

            <Link
              className={styles.card}
              href="https://github.com/kayquesekishiki"
              target="_blank"
            >
              <div className={styles.iconContainer}>
                <FaGithub size={28} />
              </div>

              <div>
                <span>GitHub</span>
                <strong>@KayqueSekishiki</strong>
              </div>
            </Link>

            <Link
              className={styles.card}
              href="https://wa.me/5511962515162"
              target="_blank"
            >
              <div className={styles.iconContainer}>
                <FaWhatsapp size={28} />
              </div>

              <div>
                <span>WhatsApp</span>
                <strong>+55 11 96251-5162</strong>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.formPanel}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label>{dict.contact.form.name}</label>

              <input
                className={errors.name ? styles.inputError : ""}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={dict.contact.form.namePlaceholder}
              />

              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>{dict.contact.form.email}</label>

              <input
                className={errors.email ? styles.inputError : ""}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={dict.contact.form.emailPlaceholder}
              />

              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>{dict.contact.form.subject}</label>

              <input
                className={errors.subject ? styles.inputError : ""}
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={dict.contact.form.subjectPlaceholder}
              />

              {errors.subject && (
                <span className={styles.error}>{errors.subject}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>{dict.contact.form.message}</label>

              <textarea
                className={errors.message ? styles.inputError : ""}
                name="message"
                rows={8}
                value={formData.message}
                onChange={handleChange}
                placeholder={dict.contact.form.messagePlaceholder}
              />

              {errors.message && (
                <span className={styles.error}>{errors.message}</span>
              )}
            </div>

            <button className={styles.button} type="submit">
              <span>{dict.contact.form.button}</span>
              <SendHorizonal size={18} />
            </button>
          </form>
        </div>
      </div>

      {toast.show && (
        <ContactToast
          type={toast.type}
          message={toast.message}
          onClose={() =>
            setToast((prev) => ({
              ...prev,
              show: false,
            }))
          }
        />
      )}
    </section>
  );
};

export default ContactSection;
