import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    project: string;
  };
};
export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <main className="text-white h-full max-w-5xl m-auto my-10 p-10">
      {project.image && (
        <>
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-5xl font-bold">{project.name}</h1>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrrer"
              className="py-1 px-2 rounded bg-yellow-300 text-slate-800"
            >
              Go to Project
            </a>
          </header>
          <Image
            src={project.image}
            alt={project.name}
            width="750"
            height="300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-[300px] w-full object-cover rounded flex-shrink-0 flex-grow-1"
          ></Image>
          <div className="mt-10 text-lg text-gray-200">
            <PortableText value={project.content}></PortableText>
          </div>
        </>
      )}
    </main>
  );
}
