import "styled-components";
import { themeApp } from "../shared/theme";

type CustomTheme = typeof themeApp;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
