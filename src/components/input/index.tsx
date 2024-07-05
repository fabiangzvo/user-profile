import { JSX, useMemo } from "react";

import styles from "./styles.module.css";
import { InputProps } from "./types";

function Input(props: InputProps): JSX.Element {
  const { label, name, type, isRequired = false } = props;

  const input = useMemo(() => {
    if (type === "textarea") return <textarea required={isRequired} />;

    return <input type={type} required={isRequired} />;
  }, [type, isRequired]);

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}:
      </label>
      {input}
    </div>
  );
}

export default Input;
