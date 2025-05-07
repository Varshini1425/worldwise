import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const parsedLat = lat ? Number(lat) : null;
  const parsedLng = lng ? Number(lng) : null;

  // console.log("URL Position:", parsedLat, parsedLng);

  return [parsedLat, parsedLng];
}
