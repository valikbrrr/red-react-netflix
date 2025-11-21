import { useState } from "react";
import MovieCard from "./MovieCard";
import { MOVIES } from "./movies.data";
import { useDebounce } from "./hooks/useDebaunce";
import { useTheme } from "./hooks/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 500);

  const movies = MOVIES.filter((movie) =>
    movie.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white px-6 py-5">
      <header className="mb-10 flex items-center justify-between">
        <img src="/netflix.png" alt="Netflix" className="h-8 w-auto" />
        <div className="">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            placeholder="Search..."
            className="border border-white/15 px-2 py-1 rounded outline-none bg-none text-white"
          />
          <button
            onClick={toggleTheme}
            className="text-sm px-3 py-1 rounded border border-gray-300 hover:bg-gray-400 transition w-20 mx-2"
          >
            {theme === "dark" ? "☀️ Light" : " 🌙 Dark"}
          </button>
        </div>
      </header>
      <main className="flex gap-6">
        {movies.length ? (
          movies.map((movie) => (
            <MovieCard
              image={movie.image}
              rating={movie.rating}
              key={movie.name}
            />
          ))
        ) : (
          <p>Movies not found</p>
        )}
      </main>
    </div>
  );
};

export default App;
