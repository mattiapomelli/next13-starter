import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    EMAIL_SERVER: z.string().min(1),
    EMAIL_FROM: z.string().min(1),
  },
  client: {},
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
});
