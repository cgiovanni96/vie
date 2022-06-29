import { Stack, Typography, TypographyTypeMap } from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Markdown = ({
  text,
  typographyProps,
  headerProps,
}: {
  text: string;
  typographyProps?: DefaultComponentProps<TypographyTypeMap>;
  headerProps?: DefaultComponentProps<TypographyTypeMap>;
}) => {
  return (
    <Stack>
      <ReactMarkdown
        children={text}
        components={{
          p({ node, className, children, ...props }) {
            return (
              <Typography mb={2} {...props} {...typographyProps}>
                {children}
              </Typography>
            );
          },
          h2({ node, children, ...props }) {
            return (
              <Typography
                variant="h2"
                {...props}
                {...headerProps}
                lineHeight={1}
                fontSize={44}
                mb={2}
              >
                {children}
              </Typography>
            );
          },
          h3({ node, children, ...props }) {
            return (
              <Typography
                variant="h3"
                {...props}
                {...headerProps}
                fontSize={32}
                mb={2}
              >
                {children}
              </Typography>
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
      />
    </Stack>
  );
};
