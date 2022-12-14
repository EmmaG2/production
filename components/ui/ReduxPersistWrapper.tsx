import React, { FC } from "react";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "../../redux";

interface Props {
  children: any;
  rest: any;
}

export const ReduxPersistWrapper: FC<Props> = ({ children, rest }) => {
  const { store } = wrapper.useWrappedStore(rest);
  const persistor = persistStore(store);

  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
};
