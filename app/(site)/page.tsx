import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main className="text-white h-full max-w-5xl m-auto my-10 p-10">
      <h1 className="text-6xl font-bold">
        Hello I&apos;m <br></br>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-rose-400">
          Patrick Hebner
        </span>
      </h1>
      <p className="text-slate-300 mt-4">
        Hi everyone check out my website and projects
      </p>
      <section className="mt-20">
        <h2 className="text-yellow-300 text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-3 gap-4 ">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              className="bg-slate-900 p-4 rounded hover:ring-2 hover:ring-yellow-300 group"
              key={project._id}
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width="750"
                  height="300"
                  className="h-[200px] w-full object-cover rounded flex-shrink-0 flex-grow-1"
                ></Image>
              )}
              <h3 className="group-hover:text-yellow-300 mt-2 font-bold text-lg">
                {project.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
