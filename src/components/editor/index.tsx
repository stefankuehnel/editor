import * as React from "react";
import * as Showdown from "showdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import styles from "./Editor.module.css";

const markdownConverter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

type EditorProps = {
  content: string;
};

export const Editor: React.FC<EditorProps> = ({ content }) => {
  const [value, setValue] = React.useState(content);
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">(
    "write",
  );

  return (
    <div className={styles.container}>
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(markdownConverter.makeHtml(markdown))
        }
        childProps={{
          textArea: {
            autoFocus: true,
          },
        }}
      />
    </div>
  );
};
