import { Route } from "./routes/blog.$slug";
type LD = ReturnType<typeof Route.useLoaderData>;
const x: LD = undefined;
type LoaderFn = NonNullable<(typeof Route extends { options: infer O } ? O : never)>;
export { x };
export type { LD };
