import { useRef, useState, useCallback } from "react";
import "./InputBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const InputBox = (): JSX.Element => {
  const [error, setError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleValidation = useCallback((): void => {
    inputRef.current?.value === "" ? setError(true) : setError(false);
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
          onChange={handleValidation}
          onBlur={handleValidation}
          className={error ? "inp-error" : ""}
          required
        />
        {error && (
          <div className="error">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              color="hsl(0, 87%, 67%)"
              size="sm"
            />
            <p>Please add a link</p>
          </div>
        )}
        <button
          className="shorten"
          aria-label="Shorten It"
          aria-description="Shorten It">
          Shorten It!
        </button>
      </article>
    </section>
  );
};

export default InputBox;
