import styles from "./PrimaryButton.module.scss";

type PrimaryButtonProps =
  | {
      variant: "link";
      href: string;
      text: string;
      onClick?: never;
    }
  | {
      variant: "button";
      href?: never;
      text: string;
      onClick: React.MouseEventHandler<HTMLButtonElement>;
    };

const PrimaryButton = (props: PrimaryButtonProps) => {
  if (props.variant === "link") {
    return (
      <a className={styles.cta} href={props.href} onClick={props.onClick}>
        {props.text}
      </a>
    );
  }

  return (
    <button className={styles.cta} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default PrimaryButton;
