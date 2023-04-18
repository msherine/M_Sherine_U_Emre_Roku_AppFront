const apiKey = 'k_xq3uunx4';

export default {
    name: 'TheTVDetailComponent',

    template:`
        <section class="details">
            <h2 hidden>The tv details</h2>
            <img :src="tv.image" :alt="tv.title">
            <p><span>Plot:</span> {{ tv.plot }}</p>
            <div class="video-button">
            <button @click="playVideo">Play Video</button>
            </div>
        </section>
    `,

    
    data() {
        return {
            tv: [],
        };
    },

    mounted() {
        this.fetchTV();
    },

    methods: {

        fetchTV() {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            const tvId = this.$route.params.tvId;

            fetch(`https://imdb-api.com/en/API/Title/k_xq3uunx4/${tvId}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.tv = data;
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