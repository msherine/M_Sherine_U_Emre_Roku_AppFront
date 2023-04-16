const apiKey = 'k_xq3uunx4';

export default {
    name: 'TheHomePageComponent',

    template: `
    <section>
        <h1>This is the default home page</h1>
        <section class="movie"> 
            <div v-for="movie in movies" :key="movie.id">
                <img :src="movie.image" :alt="movie.title">
                <h2>{{ movie.title }}</h2>
            </div>
        </section>
    </section>`,

    data() {
        return {
            movies: []
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
