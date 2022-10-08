import { createRef, useEffect, useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export const useCodeHighlight = () => {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [position, setPosition] = useState<number | undefined>();
  const ref = createRef<HTMLTextAreaElement>();

  const setCursor = (c: number) => {
    ref.current?.focus();
    ref.current?.setSelectionRange(c, c);
  };

  const changeCursor = (diff: number) => {
    const start = ref.current?.selectionStart;
    if (start !== null && start !== undefined) {
      setCursor(start + diff);
    }
  };

  const insertAtCursor = (text: string) => {
    const start = ref.current?.selectionStart;
    if (start !== null && start !== undefined) {
      setCode(`${code.substring(0, start)}${text}${code.substring(start)}`);
      setPosition(start + text.length);
    }
  };

  useEffect(() => {
    if (position === undefined) return;
    const timer = setTimeout(() => {
      setCursor(position);
      setPosition(undefined);
    }, 10);
    return () => clearTimeout(timer);
  }, [position]);

  const codeEditor = (
    <>
      <CodeEditor
        readOnly
        ref={ref}
        value={code}
        language='ts'
        placeholder='Please enter JS code.'
        onChange={(e) => setCode(e.target.value)}
        padding={15}
        style={{
          fontSize: 12,
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </>
  );

  return { codeEditor, code, setCode, insertAtCursor, setCursor, changeCursor };
};
