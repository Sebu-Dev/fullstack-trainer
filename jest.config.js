// jest.config.mjs
import { defaults } from "jest-config";

export default {
  ...defaults,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
};
