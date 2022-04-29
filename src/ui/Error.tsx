const Error = (props: { error: string }): JSX.Element => {
  return <div className="error">{props.error}</div>;
};

export default Error;
