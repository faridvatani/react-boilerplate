import { createContext, FC, ReactNode, useState } from 'react';

type MainContextValue = {
  children: ReactNode;
};

export const MainContext = createContext<MainContextValue | undefined>(
  undefined
);

export const MainContextProvider: FC<MainContextValue> = ({ children }) => {
  const [state] = useState<any>(null);

  return (
    <MainContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
