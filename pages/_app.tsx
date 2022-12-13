import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { FirstLevelUiWrapper } from "../components/ui";

import { wrapper } from "../redux";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <FirstLevelUiWrapper>
        <Component {...props.pageProps} />
      </FirstLevelUiWrapper>
    </Provider>
  );
}

export default App;
