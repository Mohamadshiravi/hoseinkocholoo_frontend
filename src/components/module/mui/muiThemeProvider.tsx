import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { ReactNode } from "react";

export default function MuiThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const theme = () =>
    createTheme({
      palette: {
        primary: {
          main: "#ef394e",
        },
      },
      typography: {
        fontFamily: "vazir-regular",
      },
      direction: "rtl",
    });
  const rtlCache = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={rtlCache}>{children}</CacheProvider>
    </ThemeProvider>
  );
}
