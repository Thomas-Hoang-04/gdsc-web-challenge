import { useRef, useState, useCallback, useReducer } from "react";
import "./InputBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { LinkList, idGen, useSetCopyContext } from "../HOC/SynthLink";

const enum Error {
  empty = "Please add a link",
  invalid = "Please provide a valid link",
  repeat = "Link already shortened",
  none = "",
}

interface ErrorType {
  type: Error;
}

const LinkBox = ({ org_url, short_url, copied }: LinkList): JSX.Element => {
  const [copy, setCopy] = useState<boolean>(copied);
  const setCopyContext = useSetCopyContext();

  return (
    <section className="link-box">
      <article className="link">
        <p className="org-link">{org_url}</p>
        <hr className="lg:hidden" />
        <a className="short-link" target="_blank" href={short_url}>
          {short_url}
        </a>
      </article>
      <button
        className={`copy${copy ? " ed" : ""}`}
        aria-label="Copy"
        aria-description="Copy the shortened link"
        onClick={() => {
          if (!copy) {
            navigator.clipboard.writeText(short_url);
            setTimeout(() => {
              setCopy(true);
              setCopyContext(draft => {
                draft.map(item => {
                  if (item.org_url === org_url) {
                    item.copied = true;
                  }
                });
              });
            }, 750);
          }
        }}>
        {copy ? "Copied!" : "Copy"}
      </button>
    </section>
  );
};

const validReducer = (state: string, action: ErrorType): string => {
  switch (action.type) {
    case Error.empty:
      return Error.empty;
    case Error.invalid:
      return Error.invalid;
    case Error.repeat:
      return Error.repeat;
    case Error.none:
      return Error.none;
    default:
      return state;
  }
};

const InputBox = ({
  setLink,
  linkList,
}: {
  setLink?: any;
  linkList?: LinkList[];
}): JSX.Element => {
  const [error, dispatch] = useReducer(validReducer, "");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleValidation = useCallback((): void => {
    if (inputRef.current?.value == "" || inputRef.current?.value == undefined) {
      dispatch({ type: Error.empty });
    } else if (
      !/^https:\/\/.*\./g.test(inputRef.current?.value as string) &&
      !/^http:\/\/.*\./g.test(inputRef.current?.value as string)
    ) {
      dispatch({ type: Error.invalid });
    } else if (
      /^https:\/\/is\.gd\/.*/g.test(inputRef.current?.value as string)
    ) {
      dispatch({ type: Error.repeat });
    } else {
      dispatch({ type: Error.none });
    }
  }, []);

  const handleSubmit = useCallback((): void => {
    handleValidation();
    if (error.length == 0) {
      setLink(inputRef.current?.value);
    }
  }, []);

  return (
    <>
      <section className="linkinp-box" id="link-inp">
        <article className="input-box">
          <div className="lg:grow">
            <input
              ref={inputRef}
              type="text"
              placeholder="Shorten a link here..."
              aria-label="Shorten a link here..."
              aria-description="Shorten a link here..."
              onFocus={() => dispatch({ type: Error.none })}
              onChange={e =>
                e.target.value == ""
                  ? dispatch({ type: Error.empty })
                  : dispatch({ type: Error.none })
              }
              onBlur={handleValidation}
              className={error.length != 0 ? "inp-error" : ""}
              required
            />
            {error.length != 0 && (
              <div className="error">
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  color="hsl(0, 87%, 67%)"
                  size="sm"
                />
                <p>{error}</p>
              </div>
            )}
          </div>
          <button
            className={`shorten${error.length != 0 ? " lg:self-start" : ""}`}
            aria-label="Shorten It"
            aria-description="Shorten It"
            onClick={handleSubmit}>
            Shorten It!
          </button>
        </article>
      </section>
      <section className="links-pld">
        {linkList?.map(item => (
          <LinkBox key={idGen()} {...item} />
        ))}
      </section>
    </>
  );
};

export default InputBox;
