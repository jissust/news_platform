import { YoutubeVideo } from "@/types/youtube";
import { YoutubeCard } from "@/components/ui/YouTubeCard/YouTubeCard";

type Props = {
  videos: YoutubeVideo[];
};

export const LatestVideos = ({ videos }: Props) => {
  return (
    <section className="w-full py-20 bg-gray-800 ">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-7xl font-bold flex justify-center pb-10 text-white">Últimos Videos</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <YoutubeCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};
