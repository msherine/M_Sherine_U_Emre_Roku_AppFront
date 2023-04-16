const apiKey = 'k_xq3uunx4';

export default {
    name: 'TheKidsHomePageComponent',

    template: `
    <section>
        <h1>This is the kids home page</h1>

        <div class="k-movie-list">
            <div class="movie-feature-card" v-for="movie in movies" :key="movie.id">
                <img :src="movie.image" :alt="movie.title" class="feature-img">
                <div class="k-movie-detail">
                    <h2>{{ movie.title }}</h2>
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
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch('https://imdb-api.com/API/AdvancedSearch/k_xq3uunx4?title_type=feature&release_date=1923-01-01,2023-01-01&certificates=us:G,us:PG,us:PG-13,us:R,us:NC-17', requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.movies = data.results;
                    console.log(data);
                })
                .catch(error => console.log('error', error));
        },
    }
}
