import mitt from "mitt";

type AppEvents = {
  "auth:token": string | null;
};

export const events = mitt<AppEvents>();
