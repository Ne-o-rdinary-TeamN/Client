import { PostsPage } from "@/page/posts";
import { CATEGORIES, Category, CATEGORY_LABEL } from "@/shared/model";
import { Metadata } from "next";

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category: category.value,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: Category }>;
}): Promise<Metadata> {
  const { category } = await params;
  const categoryLabel = CATEGORY_LABEL[category];

  return {
    title: `${categoryLabel} - 투표`,
    description: `${categoryLabel} 카테고리의 투표 목록을 확인하세요.`,
  };
}

const Page = async ({
  params,
}: {
  params: Promise<{ category: Category }>;
}) => {
  const { category } = await params;
  return <PostsPage category={category} />;
};

export default Page;
