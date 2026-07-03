import { getRelatedNewsByCategory } from "@/services/news";
import { NewsList } from "@/components/ui/NewsList/NewsList";
import { CategoryFilter } from "@/components/ui/CategoryFilter/CategoryFilter";
import { getCategories } from "@/services/categories";

type Props = {
  params: Promise<{
    categoria: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { categoria } = await params;
  const categories = await getCategories();
  const news = await getRelatedNewsByCategory(categoria);

  return (
    <section className="w-full py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            Noticias: {categoria}
          </h1>
          <div className="flex justify-start md:justify-end">
            <CategoryFilter categories={categories} />
          </div>
        </div>
        <NewsList news={news} />
      </div>
    </section>
  );
}
