import { Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Markdown = ({ text }: { text: string }) => {
  return (
    <ReactMarkdown
      children={text}
      components={{
        p({ node, className, children, ...props }) {
          return <Typography {...props}>{children}</Typography>;
        },
        h2({ node, children, ...props }) {
          return (
            <Typography variant="h2" {...props}>
              {children}
            </Typography>
          );
        },
      }}
      remarkPlugins={[remarkGfm]}
    />
  );
};
