'use client';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import remarkGfm from 'remark-gfm';
import styles from './MarkdownCont.module.scss';

type Data = {
  postData: string;
};

export default function MarkdownCont({ postData }: Data) {
  return (
    <Markdown
      className='prose lg:prose-xl'
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, style, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag='div'
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              style={dracula}
            />
          ) : (
            <code {...rest} className={className} children={children} />
          );
        },
        blockquote({ children, ...props }) {
          return <blockquote {...props}>{children}</blockquote>;
        },
      }}
    >
      {postData}
    </Markdown>
  );
}
