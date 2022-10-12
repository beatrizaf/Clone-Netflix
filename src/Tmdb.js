/* eslint-disable import/no-anonymous-default-export */
const API_KEY = "859db80581c2276d408db9b320e6ea9d";
const API_BASE = "https://api.themoviedb.org/3";

/*
-originais da netflix
-recomendados
- em alta
- ação
- comédia
- terror
- romance
- documentários
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(
    `${API_BASE}${endpoint}`
  ); /*requisição para um serviço externo, ou seja, acesso a um site*/
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "adventure",
        title: "Aventura",
        items: await basicFetch(
          `/discover/movie?with_genres=12&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "animation",
        title: "Animação",
        items: await basicFetch(
          `/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "crime",
        title: "Crime",
        items: await basicFetch(
          `/discover/movie?with_genres=80&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "drama",
        title: "Drama",
        items: await basicFetch(
          `/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "family",
        title: "Família",
        items: await basicFetch(
          `/discover/movie?with_genres=10751&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "fantasy",
        title: "Fantasia",
        items: await basicFetch(
          `/discover/movie?with_genres=14&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "history",
        title: "História",
        items: await basicFetch(
          `/discover/movie?with_genres=36&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "music",
        title: "Música",
        items: await basicFetch(
          `/discover/movie?with_genres=10402&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "mystery",
        title: "Mistério",
        items: await basicFetch(
          `/discover/movie?with_genres=9648&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "science fiction",
        title: "Ficção Científica",
        items: await basicFetch(
          `/discover/movie?with_genres=878&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "thriller",
        title: "Suspense",
        items: await basicFetch(
          `/discover/movie?with_genres=53&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "war",
        title: "Guerra",
        items: await basicFetch(
          `/discover/movie?with_genres=10752&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romace",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "Western",
        title: "Faroeste",
        items: await basicFetch(
          `/discover/movie?with_genres=37&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
