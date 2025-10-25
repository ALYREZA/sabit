import mitt from "mitt";

type AppEvents = {
  "auth:token": string | null;
  "auth:logout": void;
};

export const events = mitt<AppEvents>();
