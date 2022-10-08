import { useCodeHighlight } from './Components/useCodeHighlight';
import { useKeyboard } from './Components/useKeyboard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as colors from '@mui/material/colors';
import { CssBaseline } from '@mui/material';

export const App = () => {
  const { codeEditor, insertAtCursor, changeCursor } = useCodeHighlight();
  const { keyboard } = useKeyboard(insertAtCursor, changeCursor);
  const theme = createTheme({ palette: { mode: 'dark' } });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>WEB-CODING</h1>
        {codeEditor}
        {keyboard}
      </ThemeProvider>
    </>
  );
};
