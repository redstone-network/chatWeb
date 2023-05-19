import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useState,
} from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeProps, ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import CodeBlock from './CodeBlock';
import { codeLanguageSubset } from '@constants/chat';
import useStore from '@store/store';
import LoadingIcon from '@icon/LoadingIcon';
import LineChart from '@components/charts/LineChart';


const ContentView = React.memo(
  ({
    role,
    content,
    setIsEdit,
    question_type,
    messageIndex,
  }: {
    role: string;
    question_type?: string;
    content: string;
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
    messageIndex: number;
  }) => {
    const generating = useStore((state) => state.generating);
    return (
      <>
        <div className='markdown w-full md:max-w-full break-words dark:prose-invert dark share-gpt-message'>
          {question_type !== 'binance_data' && <ReactMarkdown
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
                  subset: codeLanguageSubset,
                },
              ],
            ]}
            linkTarget='_new'
            components={{
              code,
              p: P,
            }}
          >
            {content}
          </ReactMarkdown>}
          {question_type === 'binance_data' && <LineChart data={content} />}
          { content === '' && generating && <LoadingIcon />}
        </div>
      </>
    );
  }
);

const code = React.memo((props: CodeProps) => {
  const { inline, className, children } = props;
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
    return <p className='whitespace-pre-wrap'>{props?.children}</p>;
  }
);

const MessageContent = ({
  role,
  content,
  messageIndex,
  question_type,
  sticky = false,
}: {
  role: string;
  content: string;
  question_type?: string;
  messageIndex: number;
  sticky?: boolean;
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(sticky);

  return (
    <div className='relative flex'>
      <ContentView
        role={role}
        content={content}
        question_type={question_type}
        setIsEdit={setIsEdit}
        messageIndex={messageIndex}
      />
    </div>
  );
};
export default MessageContent;
