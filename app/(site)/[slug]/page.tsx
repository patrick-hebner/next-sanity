import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    slug: string;
  };
};
export default async function Page({ params }: Props) {
  const slug = params.slug;
  const page = await getPage(slug);

  return (
    <main className="text-white h-full max-w-5xl m-auto my-10 p-10">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-5xl font-bold">{page.title}</h1>
      </header>

      <div className="mt-10 text-lg text-gray-200">
        <PortableText value={page.content}></PortableText>
      </div>
    </main>
  );
}
