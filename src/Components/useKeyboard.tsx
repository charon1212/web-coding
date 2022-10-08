import { Button } from '@mui/material';

export const useKeyboard = (insert: (e: string) => void, changeCursor: (e: number) => void) => {
  const onClick = (key: string) => () => {
    insert(key);
  };

  const makeButton = (key: string) => {
    const onClick = () => {
      if (key === '→') return changeCursor(1);
      if (key === '←') return changeCursor(-1);
      if (key === 'SP') return insert(' ');
      return insert(key);
    };

    return (
      <Button onClick={onClick} sx={{ minWidth: '40px', width: '40px' }}>
        {key}
      </Button>
    );
  };

  const keyAllignment: string[][] = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', '↑', ''],
    ['SP', '', '', '', '', '', '←', '↓', '→'],
  ];

  const keyboard = (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {keyAllignment.map((arr) => (
          <div style={{ display: 'flex' }}>{arr.map((text) => makeButton(text))}</div>
        ))}
      </div>
    </>
  );

  return { keyboard };
};
