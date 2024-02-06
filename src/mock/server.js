import { QueryClient } from "react-query";
import { handlers } from "./handler";
import { setupServer } from "msw/node";

export const server = setupServer(...handlers);

export const queryClient = new QueryClient();
