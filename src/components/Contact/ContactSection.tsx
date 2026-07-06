"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, SendHorizonal } from "lucide-react";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";

import styles from "./ContactSection.module.scss";
import { useState } from "react";

const ContactSection = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Informe um nome válido.";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Informe um e-mail válido.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Informe um assunto.";
    }

    if (formData.message.trim().length < 20) {
      newErrors.message = "Sua mensagem deve possuir pelo menos 20 caracteres.";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((value) => value === "")) {
      console.log(formData);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.header}>
        <h2 className={styles.title}>
          <Mail size={40} />
          VAMOS_CONVERSAR
        </h2>

        <p className={styles.subtitle}>
          Estou sempre aberto a novos projetos, colaborações ou apenas uma
          conversa sobre café e código.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.map}>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB_EvBTRS197G64B2JQQcrsrOtx15at3nJOFlhYDINSpkzmySVbG0W0VoP67iDV-KL1GJA1vfMt91Ns-fca_Y6NsNAkIpp9g0I_TVezuz5LREWj4zQVShIEE8P5z5CDqPyVXvkfJL4947CLol57By2RGjp5hrBMJB7ZcPtO6ncoYtXRcUdP3wVU5HaE4lVJ4AaTrIOzDp6u4nUpz53ZMpK9Iwn7l9xyTta3LmRuHvWsVRoSbtkKc270EGgnpAI8AHw4F0cYHWJRH8H"
              alt="map"
              fill
              className={styles.mapImage}
            />

            <div className={styles.mapOverlay}>
              <div className={styles.locationTag}>
                <div className={styles.ping} />
                <span>LOCATED: BAHIA, BR</span>
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            <Link className={styles.card} href="mailto:hello.kayque@gmail.com">
              <div className={styles.iconContainer}>
                <Mail size={28} />
              </div>
              <div>
                <span>Email</span>
                <strong>hello.kayque@gmail.com</strong>
              </div>
            </Link>

            <Link
              className={styles.card}
              href="https://linkedin.com/in/kayque-sekishiki"
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
            >
              <div className={styles.iconContainer}>
                <FaGithub size={28} />
              </div>
              <div>
                <span>GitHub</span>
                <strong>@KayqueSekishiki</strong>
              </div>
            </Link>

            <Link className={styles.card} href="https://wa.me/5511962515162">
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
              <label>Nome</label>
              <input
                className={errors.name ? styles.inputError : ""}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
              />

              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>Email</label>
              <input
                className={errors.email ? styles.inputError : ""}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
              />

              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>Assunto</label>
              <input
                className={errors.subject ? styles.inputError : ""}
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="O que você precisa?"
              />

              {errors.subject && (
                <span className={styles.error}>{errors.subject}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>Mensagem</label>
              <textarea
                className={errors.message ? styles.inputError : ""}
                name="message"
                rows={8}
                value={formData.message}
                onChange={handleChange}
                placeholder="Escreva sua mensagem aqui..."
              />

              {errors.message && (
                <span className={styles.error}>{errors.message}</span>
              )}
            </div>

            <button className={styles.button} type="submit">
              <span>ENVIAR MENSAGEM</span>
              <SendHorizonal size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
