import axios from "axios";
import {
  useEffect,
  useState,
  Children,
  cloneElement,
  createContext,
  useContext,
} from "react";
import { Updater, useImmer } from "use-immer";

export const idGen = (): string =>
  (Math.random() + 1).toString(36).substring(6);

export interface LinkList {
  org_url: string;
  short_url: string;
  copied: boolean;
}

const SetCopyContext = createContext<Updater<LinkList[]>>((): void => {});
export const useSetCopyContext = () => useContext(SetCopyContext);

const exists = (arr: LinkList[], link: string): boolean => {
  let res = false;
  arr.map(item => {
    if (item.org_url === link) {
      res = true;
    }
  });
  return res;
};

const SynthLink = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [link, setLink] = useState<string>("");
  const [linkList, setResLink] = useImmer<LinkList[]>([]);

  useEffect(() => {
    link != "" &&
      axios
        .request({
          method: "POST",
          url: `${import.meta.env.VITE_API_URL}`,
          params: {
            format: "json",
            url: link,
          },
        })
        .then(res => {
          if (!exists(linkList, link) && !!!res.data.errorcode) {
            setResLink(draft => {
              draft.push({
                org_url: link,
                short_url: res.data.shorturl,
                copied: false,
              });
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
  }, [link]);

  return (
    <SetCopyContext.Provider value={setResLink}>
      {Children.map(children, child =>
        cloneElement(child, { linkList, setLink })
      )}
    </SetCopyContext.Provider>
  );
};

export default SynthLink;
