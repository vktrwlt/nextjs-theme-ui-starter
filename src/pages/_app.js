import { ThemeProvider } from "theme-ui";

import theme from "../utils/theme/theme.js";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
