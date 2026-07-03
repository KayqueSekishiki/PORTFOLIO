import styles from "./PrimaryButton.module.scss";

type PrimaryButtonProps =
  | {
      variant: "link";
      href: string;
      label: string;
      onClick?: never;
    }
  | {
      variant: "button";
      href?: never;
      label: string;
      onClick: React.MouseEventHandler<HTMLButtonElement>;
    };

const PrimaryButton = (props: PrimaryButtonProps) => {
  if (props.variant === "link") {
    return (
      <a className={styles.cta} href={props.href} onClick={props.onClick}>
        {props.label}
      </a>
    );
  }

  return (
    <button className={styles.cta} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default PrimaryButton;
