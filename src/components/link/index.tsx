import React from "react";

import styles from "./Link.module.css";

type LinkProps = {
  text: string;
  href: HTMLAnchorElement["href"];
  spaceBefore?: boolean;
  spaceAfter?: boolean;
};

export const Link: React.FC<LinkProps> = ({
  href,
  text,
  spaceBefore,
  spaceAfter,
}) => {
  const space = <> </>;
  const noSpace = <></>;

  const addSpaceBefore = spaceBefore ? space : noSpace;
  const addSpaceAfter = spaceAfter ? space : noSpace;

  const HTMLLinkElement = (
    <>
      <a className={styles.link} href={href}>
        {text}
      </a>
    </>
  );

  return (
    <>
      {addSpaceBefore}
      {HTMLLinkElement}
      {addSpaceAfter}
    </>
  );
};
