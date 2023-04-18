const apiKey = 'k_xq3uunx4';

export default {
    name: 'ThePodcastDetailComponent',

    template:`
        <section class="details">
        <h2 hidden>The podcast details</h2>
            <img :src="podcast.image" :alt="podcast.title">
            <p><span>Plot:</span> {{ podcast.plot }}</p>
            <div class="video-button">
            <button @click="playVideo">Play Video</button>
            </div>
        </section>
    `,

    
    data() {
        return {
            podcast: [],
        };
    },

    mounted() {
        this.fetchpodcast();
    },

    methods: {

        fetchpodcast() {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            const podcastId = this.$route.params.podcastId;

            fetch(`https://imdb-api.com/en/API/Title/k_xq3uunx4/${podcastId}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.podcast = data;
                    //console.log(data);
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