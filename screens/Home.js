import { Text, View, SafeAreaView, FlatList, ScrollView } from "react-native";
import { useEffect, useState } from "react";

// Flatlist = lazy loading when on / off screen so pretty gamer

import MovieCarousel from "../components/MovieCarousel";
import MovieList from "../components/MovieList";

import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "../api/tmdb";

const Home = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3, 4]);

  const [nowPlaying, setNowPlaying] = useState();
  const [popular, setPopular] = useState();
  const [topRated, setTopRated] = useState();

  const [loading, setLoading] = useState(true);

  const getNowPlayingMovies = async () => {
    const data = await fetchNowPlayingMovies();
    setNowPlaying(data.results);
  };
  const getPopularMovies = async () => {
    const data = await fetchPopularMovies();
    setPopular(data.results);
  };
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    setTopRated(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView>
        {nowPlaying && (
          <MovieCarousel
            title="nowPlaying"
            data={nowPlaying}
          />
        )}

        {popular && (
          <MovieList
            title="popular"
            data={popular}
          />
        )}
        {topRated && (
          <MovieList
            title="topRated"
            data={topRated}
          />
        )}
      </ScrollView>

      <View style={{ flex: 1 }}>
        {/* <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1, // Appear behind NFTS
          }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
