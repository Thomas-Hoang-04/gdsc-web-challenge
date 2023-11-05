import { useRef, useState, useCallback } from "react";
import "./InputBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const InputBox = ({ setLink }: { setLink?: any }): JSX.Element => {
  const [empty, setEmpty] = useState<boolean>(false);
  const [invalid, setInvalid] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleValidation = useCallback((): void => {
    inputRef.current?.value == "" || inputRef.current?.value == undefined
      ? setEmpty(true)
      : setEmpty(false);
  }, []);

  const handleInvalid = useCallback((): void => {
    inputRef.current?.value != "" &&
    inputRef.current?.value != undefined &&
    !/^https:\/\/.*\./g.test(inputRef.current?.value as string) &&
    !/^http:\/\/.*\./g.test(inputRef.current?.value as string)
      ? setInvalid(true)
      : setInvalid(false);
  }, []);

  const handleSubmit = useCallback((): void => {
    handleValidation();
    handleInvalid();
    if (!empty && !invalid) {
      setLink(inputRef.current?.value);
    }
  }, []);

  return (
    <section className="link-box">
      <article className="input-box">
        <input
          ref={inputRef}
          type="text"
          placeholder="Shorten a link here..."
          aria-label="Shorten a link here..."
          aria-description="Shorten a link here..."
          onFocus={() => setInvalid(false)}
          onChange={handleValidation}
          onBlur={() => {
            handleValidation();
            handleInvalid();
          }}
          className={empty || invalid ? "inp-error" : ""}
          required
        />
        {(empty || invalid) && (
          <div className="error">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              color="hsl(0, 87%, 67%)"
              size="sm"
            />
            <p>
              {empty && "Please add a link"}
              {invalid && "Please provide a valid link"}
            </p>
          </div>
        )}
        <button
          className="shorten"
          aria-label="Shorten It"
          aria-description="Shorten It"
          onClick={handleSubmit}>
          Shorten It!
        </button>
      </article>
    </section>
  );
};

export default InputBox;
