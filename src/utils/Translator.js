import i18next from "./i18n";
import { Trans } from "react-i18next";

export default (...texts) => texts.map((text) => i18next.t(text)).join(" ");

export { Trans };
