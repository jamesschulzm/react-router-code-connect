import { IconButton } from "../IconButton";
import github from "./github.png";
import google from "./google.png";

import styles from "./providers.module.css";

export const Providers = () => {
  return (
    <ul className={styles.providers}>
      <li>
        <IconButton>
          <img src={google} alt="Google" />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <img src={github} alt="Google" />
        </IconButton>
      </li>
    </ul>
  );
};
