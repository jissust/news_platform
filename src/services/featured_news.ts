export async function getFeaturedNews() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/news?filters[featured][$eq]=true&sort=id:desc&populate=*`,
    );
    if (!res.ok) {
      console.error("Error API noticias:", res.status);
      return [];
    }
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error("Error fetching news:", err);
    return [];
  }
}
