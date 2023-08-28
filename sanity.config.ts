import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "beg1mul1",
  dataset: "production",
  basePath: "/admin",
  title: "Personal Website",
  plugins: [deskTool()],
  schema: {
    types: schemas
  }
});

export default config;
