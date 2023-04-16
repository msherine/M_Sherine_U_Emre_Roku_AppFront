const apiKey = 'k_xq3uunx4';

export default {
    name: 'TheKidsMovieDetailComponent',

    template:`
        <section class"k-movie-expand">
            Detail
        </section>
    `,

    
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