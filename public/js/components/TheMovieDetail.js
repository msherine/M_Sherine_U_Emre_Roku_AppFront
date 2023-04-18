const apiKey = 'k_xq3uunx4';

export default {
    name: 'TheMovieDetailComponent',

    template:`
        <section class="details">
            <h2 hidden>The movie details</h2>
            <img :src="movie.image" :alt="movie.title">
            <p><span>Plot:</span>     {{ movie.plot }}</p>
            <div class="video-button">
            <button @click="playVideo">Play Video</button>
            </div>
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

            fetch(`https://imdb-api.com/en/API/Title/${apiKey}/${movieId}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.movie = data;
                })
                .catch(error => console.log('error', error));
        },

        playVideo() {
            const videoUrl = '/videos/video-trailer.mp4';
            const videoPlayer = document.createElement('video');
            videoPlayer.setAttribute('src', videoUrl);
            videoPlayer.setAttribute('controls', true);
            videoPlayer.setAttribute('autoplay', true);
            document.body.appendChild(videoPlayer); // append the element to the DOM
            videoPlayer.requestFullscreen();
        }
        
    }
}
