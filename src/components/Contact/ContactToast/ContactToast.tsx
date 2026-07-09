"use client";

import { useEffect } from "react";
import { CheckCircle2, CircleAlert, X } from "lucide-react";
import styles from "./ContactToast.module.scss";

type ContactToastProps = {
  type: "success" | "error";
  message: string;
  onClose: () => void;
};

const ContactToast = ({ type, message, onClose }: ContactToastProps) => {
  useEffect(() => {
    const timeout = setTimeout(onClose, 4000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <aside
      className={`${styles.toast} ${
        type === "success" ? styles.success : styles.error
      }`}
    >
      <div className={styles.icon}>
        {type === "success" ? (
          <CheckCircle2 size={22} />
        ) : (
          <CircleAlert size={22} />
        )}
      </div>

      <p className={styles.message}>{message}</p>

      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Fechar"
      >
        <X size={18} />
      </button>

      <span
        className={`${styles.progress} ${
          type === "success" ? styles.successProgress : styles.errorProgress
        }`}
      />
    </aside>
  );
};

export default ContactToast;
