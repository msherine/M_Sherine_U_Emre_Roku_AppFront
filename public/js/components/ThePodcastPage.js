const apiKey = 'k_xq3uunx4';

export default {
    name: 'TheAdultPodcastPageComponent',

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
        <h1>This is the Adults Podcast page</h1>

        <div class="k-movie-list">
            <div class="movie-feature-card" v-for="podcast in podcasts" :key="podcast.id">
                <router-link :to="{ name: 'podcastdetail', params: { podcastId: podcast.id } }">
                    <img :src="podcast.image" :alt="podcast.title" class="feature-img">
                </router-link>    
                <div class="k-movie-detail">
                    <p>{{ podcast.title }}</p>
                   <p>Year: {{ podcast.description }}</p>
                    <p>Genre: {{ podcast.genres }}</p>
                    <p>imDB rating: {{ podcast.imDbRating }}</p>

                </div>
            </div>
        </div> 
    </section>
    `,

    data() {
        return {
            podcasts: [],
        };
    },

    mounted() {
        this.fetchpodcasts();
    },

    methods: {
        fetchpodcasts() {
            console.log("fetchPodcasts");
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch('https://imdb-api.com/API/AdvancedSearch/k_xq3uunx4?title_type=podcast_series,podcast_episode&release_date=1923-01-01,2023-01-01', requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.podcasts = data.results; 
                    console.log(data);
                })
                .catch(error => console.log('error', error));
        },
    }
}




