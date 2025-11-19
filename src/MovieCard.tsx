interface MovieCardType {
  image: string;
  raiting: number;
}

const MovieCard: React.FC<MovieCardType> = ({ image, raiting }) => {
  return (
    <>
      <div className="text-white">IMBd raiting: {raiting}</div>
      <img src={image} alt="img" width={200}/>
    </>
  );
};

export default MovieCard;
