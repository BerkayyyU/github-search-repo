import styles from './error.module.css';

const Error = (props: { error: string }): JSX.Element => {
  return <div className={styles.error}>{props.error}</div>;
};

export default Error;
