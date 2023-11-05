import axios from "axios";
import { useEffect, useState, Children, cloneElement } from "react";
import { useImmer } from "use-immer";

export interface LinkList {
  org_url: string;
  short_url: string;
}

const exists = (arr: LinkList[], link: string): boolean => {
  let res = false;
  arr.forEach(item => {
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
    const encURL = new URLSearchParams({
      url: link,
    });

    link != "" &&
      axios
        .request({
          method: "POST",
          url: `${import.meta.env.VITE_API_URL}`,
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key": `${import.meta.env.VITE_API_KEY}`,
            "X-RapidAPI-Host": `${import.meta.env.VITE_API_HOST}`,
          },
          data: encURL,
        })
        .then(res => {
          console.log(res.data.result_url);
          if (!exists(linkList, link)) {
            setResLink(draft => {
              draft.push({
                org_url: link,
                short_url: res.data.result_url,
              });
            });
          }
          console.log(linkList);
        })
        .catch(err => {
          console.log(err);
        });
  }, [link]);

  return (
    <>
      {Children.map(children, child =>
        cloneElement(child, { linkList, setLink })
      )}
    </>
  );
};

export default SynthLink;
