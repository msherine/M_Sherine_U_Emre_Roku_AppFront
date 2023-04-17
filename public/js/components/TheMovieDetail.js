const apiKey = 'k_xq3uunx4';

export default {
    name: 'TheMovieDetailComponent',

    template:`
        <section>
        <h2>The movie details</h2>
            <img :src="movie.image" :alt="movie.title">
            <p>{{ movie.plot }}</p>
        </section>
    `,

    
    data() {
        return {
            movie: [],
        };
    },

    mounted() {
        this.fetchMovie();
    },

    methods: {

        fetchMovie() {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            const movieId = this.$route.params.movieId;

            fetch(`https://imdb-api.com/en/API/Title/k_xq3uunx4/${movieId}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.movie = data;
                    //console.log(data);
                })
                .catch(error => console.log('error', error));
        },
    }

}