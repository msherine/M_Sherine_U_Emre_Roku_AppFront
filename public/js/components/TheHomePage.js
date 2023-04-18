const apiKey = 'k_xq3uunx4';

export default {
    name: 'TheAdultHomePageComponent',

    template: `

    <section class="header">
    <nav class="headers-nav">
        <ul>
          <li class=""><router-link to="/home">Movies</router-link></li>
          <li><router-link to="/tv">TV Shows</router-link></li>
          <li><router-link to="/podcast">Podcasts</router-link></li>
        </ul>
      </nav>
    </section>

    <section>
        <h1 hidden>This is the Adults home page</h1>

        <div class="k-movie-list">
            <div class="movie-feature-card" v-for="movie in movies" :key="movie.id">
            <router-link :to="{ name: 'moviedetail', params: { movieId: movie.id } }">
                <img :src="movie.image" :alt="movie.title" class="feature-img">
            </router-link>    
                <div class="k-movie-detail">
                    <p>{{ movie.title }}</p>
                    <p>Year: {{ movie.description }}</p>
                    <p>Run-time: {{ movie.runtimeStr }}</p>
                    <p>imDB rating: {{ movie.imDbRating }}</p>
                </div>
            </div>
        </div> 
    </section>`,


    data() {
        return {
            movies: [],
        };
    },

    
    mounted() {
        this.fetchMovies();
    },

    methods: {

        fetchMovies() {
            console.log("fetchMovies");
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch('https://imdb-api.com/API/AdvancedSearch/k_xq3uunx4?title_type=feature&release_date=1923-01-01,2023-01-01', requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.movies = data.results;
                    console.log(data);
                })
                .catch(error => console.log('error', error));
        },

    }
}
