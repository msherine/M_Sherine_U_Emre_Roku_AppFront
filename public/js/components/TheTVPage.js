const apiKey = 'k_xq3uunx4';

export default {
    name: 'TheAdultTVPageComponent',

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
        <h1>This is the Adults TV page</h1>

        <div class="k-movie-list">
            <div class="movie-feature-card" v-for="tv in tvs" :key="tv.id">
            <router-link :to="{ name: 'Tvdetail', params: { tvId: tv.id } }">
                <img :src="tv.image" :alt="tv.title" class="feature-img">
            </router-link>    
                <div class="k-movie-detail">
                    <p>{{ tv.title }}</p>
                    <p>Year: {{ tv.description }}</p>
                    <p>Run-time: {{ tv.runtimeStr }}</p>
                    <p>Genre: {{ tv.genres }}</p>
                    <p>imDB rating: {{ tv.imDbRating }}</p>
                </div>
            </div>
        </div> 
    </section>`,


    data() {
        return {
            tvs: [],
        };
    },

    
    mounted() {
        this.fetchtvs();
    },

    methods: {

        fetchtvs() {
            console.log("fetchtvs");
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch('https://imdb-api.com/API/AdvancedSearch/k_xq3uunx4?title_type=tv_movie,tv_series,tv_episode,tv_special&release_date=1923-01-01,2023-01-01', requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.tvs = data.results;
                    console.log(data);
                })
                .catch(error => console.log('error', error));
        },

    }
}
