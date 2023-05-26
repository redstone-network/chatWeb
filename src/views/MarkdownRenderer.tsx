import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeProps, ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import remarkMath from 'remark-math';
import CodeBlock from '../components/Chat/ChatContent/Message/CodeBlock';

// 导入需要的样式文件，例如 highlight.js 的样式文件
import 'highlight.js/styles/default.css';
const code = React.memo((props: CodeProps) => {
  const { inline, className, children } = props;
  console.log(props);
  const match = /language-(\w+)/.exec(className || '');
  const lang = match && match[1];

  if (inline) {
    return <code className={className}>{children}</code>;
  } else {
    return <CodeBlock lang={lang || 'text'} codeChildren={children} />;
  }
});
const P = React.memo(
  (
    props?: Omit<
      DetailedHTMLProps<
        HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
      >,
      'ref'
    > &
      ReactMarkdownProps
  ) => {
    return <p className='text-lg whitespace-pre-wrap'>{props?.children}</p>;
  }
);
const MarkdownRenderer = ({ markdown }) => {
  return (
    <ReactMarkdown
            remarkPlugins={[
              remarkGfm,
              [remarkMath, { singleDollarTextMath: false }],
            ]}
            rehypePlugins={[
              [rehypeKatex, { output: 'mathml' }],
              [
                rehypeHighlight,
                {
                  detect: true,
                  ignoreMissing: true,
                },
              ],
            ]}
            linkTarget='_new'
      components={{
        p: P,
        code,
        li: ({ node, ...props }) => {
          console.log('dd', props)
          return (
            <li className="list-disc flex list-inside" {...props}>
              <span><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 0L7.77816 3.22184H3.22183V7.77817L0 11L3.22183 14.2218V18.7782H7.77819L11 22L14.2218 18.7782H18.7782V14.2218L22 11L18.7782 7.77818V3.22184H14.2218L11 0Z" fill="#5FD1B2"/>
</svg></span>
<span>{props.children}</span>
            </li>
          )
        },
              a: ({ node, ...props }) => {
                return (
                  <a className="text-blue-500 mb-4" {...props}>
                    {props.children}
                  </a>
                )
              }
            }}
          >
            {markdown}
          </ReactMarkdown>
  );
};

export default MarkdownRenderer;
