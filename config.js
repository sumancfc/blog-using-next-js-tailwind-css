import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
  ? "https://sumancfc.com"
  : "http://localhost:8000/api/v1";
export const APP_NAME = publicRuntimeConfig.APP_NAME;
