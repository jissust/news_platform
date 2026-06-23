import { Hero } from "@/components/features/home/Hero/Hero";
import { LatestNews } from "@/components/features/home/LatestNews/LatestNews";
import { getLatestNews } from "@/services/news";
import { getFeaturedNews } from "@/services/featured_news";
import { LatestVideos } from "@/components/features/home/LatestVideos/LatestVideos";
import { getLatestVideos } from "@/services/youtube";
import { TeamTracking } from "@/components/features/home/TeamTracking/TeamTracking";

export default async function Home() {
  const news = await getLatestNews();
  const featuredNews = await getFeaturedNews();
  const videos = await getLatestVideos(`${process.env.YOUTUBE_CHANNEL_ID}`);

  return (
    <>
      <Hero slides={featuredNews} />
      <LatestNews news={news.slice(0, 3)} />
      <LatestVideos videos={videos}   />
      <TeamTracking />
    </>
  );
}
