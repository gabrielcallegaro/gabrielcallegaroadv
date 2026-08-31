import { useLoaderData } from "@tanstack/react-router";
const d = useLoaderData({ from: "/blog/$slug" });
const s: string = d;
export { s };
