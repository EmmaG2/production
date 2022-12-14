import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { FirstLevelUiWrapper, ReduxPersistWrapper } from "../components/ui";

import { wrapper } from "../redux";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ReduxPersistWrapper rest={rest}>
        <FirstLevelUiWrapper>
          <Component {...props.pageProps} />
        </FirstLevelUiWrapper>
      </ReduxPersistWrapper>
    </Provider>
  );
}

export default App;
