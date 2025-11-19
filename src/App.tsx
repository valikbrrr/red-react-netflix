import MovieCard from "./MovieCard";

const App = () => {
  return (
    <div className="bg-black min-h-screen p-8">
      <h1 className="text-white text-3xl font-bold mb-4">Netflix App</h1>
      <MovieCard image='/narcos.jpg' raiting={6} />
    </div>
  );
};

export default App;
