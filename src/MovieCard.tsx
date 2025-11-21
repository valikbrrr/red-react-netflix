import { useCallback, useState } from "react";
import { Modal } from "./components/ui/Modal";
import { FavoriteButton } from "./FavoriteButton";

interface MovieCardType {
  image: string;
  rating: number;
  trailerYoutubeId: string;
}

const MovieCard: React.FC<MovieCardType> = ({
  image,
  rating,
  trailerYoutubeId,
}) => {
  const [isOpenTrailer, setIsOpenTrailer] = useState(false);

  const openTrailer = useCallback(() => {
    setIsOpenTrailer(true);
  }, []);

  return (
    <div className="relative w-[200px] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg">
      {isOpenTrailer && (
        <Modal
          onClose={() => {
            setIsOpenTrailer(false);
          }}
        >
          <iframe
            width="373"
            height="210"
            src={`https://www.youtube.com/embed/${trailerYoutubeId}?amp;controls=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </Modal>
      )}
      <img
        src={image}
        alt="img"
        width={200}
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-4 right-2 z-10">
        <FavoriteButton />
        <button className="btn" onClick={openTrailer}>
          🎥
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 text-sm text-white font-semibold">
        IMDb: {rating}
      </div>
    </div>
  );
};

export default MovieCard;
