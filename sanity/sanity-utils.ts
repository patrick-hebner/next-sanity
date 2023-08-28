import { Page, Project } from "@/types";
import { createClient, groq } from "next-sanity";
import ClientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
  const client = createClient(ClientConfig);

  return client.fetch(groq`
    *[_type=='project']{
        _id,
        _createdAt,
        "slug": slug.current,
        name,
        "image": image.asset->url,
        url
    }
  `);
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient(ClientConfig);

  return client.fetch(
    groq`
      *[_type == 'project' && slug.current == $slug][0]{
          _id,
          _createdAt,
          "slug": slug.current,
          name,
          "image": image.asset->url,
          url,
          content
      }
      `,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  const client = createClient(ClientConfig);

  return client.fetch(groq`
      *[_type=='page']{
          _id,
          _createdAt,
          "slug": slug.current,
          title
      }
    `);
}

export async function getPage(slug: string): Promise<Page> {
  const client = createClient(ClientConfig);

  return client.fetch(
    groq`
      *[_type == 'page' && slug.current == $slug][0]{
          _id,
          _createdAt,
          "slug": slug.current,
          title,
          content
      }
      `,
    { slug }
  );
}
