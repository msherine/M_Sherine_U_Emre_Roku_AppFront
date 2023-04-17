const apiKey = 'k_xq3uunx4';

export default {
    name: 'ThePodcastDetailComponent',

    template:`
        <section>
        <h2>The podcast details</h2>
            <img :src="podcast.image" :alt="podcast.title">
            <p>{{ podcast.plot }}</p>
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
    }

}