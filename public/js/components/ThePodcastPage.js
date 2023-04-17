export default {
    name: 'TheAdultPodcastPageComponent',

    template: `
    <section>
        <h1>This is the Adults Podcast page</h1>

        <div class="k-movie-list">
            <div class="movie-feature-card" v-for="podcast in podcasts" :key="podcast.id">
                <router-link :to="{ name: 'podcastdetail', params: { podcastId: podcast.id } }">
                    <img :src="podcast.image" :alt="podcast.title" class="feature-img">
                </router-link>    
                <div class="k-podcast-detail">
                    <h2>{{ podcast.title }}</h2>
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
            console.log("fetchpodcasts");
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch('https://imdb-api.com/API/AdvancedSearch/k_xq3uunx4?title_type=podcast_series,podcast_episode&release_date=1923-01-01,2023-01-01', requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.podcasts = data; // Filter out podcasts with null id
                    console.log(data);
                })
                .catch(error => console.log('error', error));
        },
    }
}




// const apiKey = 'k_xq3uunx4';

// export default {
//     name: 'TheAdultPodcastPageComponent',

//     template: `
//     <section>
//         <h1>This is the Adults Podcast page</h1>

//         <div class="k-movie-list">
//             <div class="movie-feature-card" v-for="podcast in podcasts" :key="podcast.id">
//             <router-link :to="{ name: 'podcastdetail', params: { podcastId: podcast.id } }">
//                 <img :src="podcast.image" :alt="podcast.title" class="feature-img">
//             </router-link>    
//                 <div class="k-podcast-detail">
//                     <h2>{{ podcast.title }}</h2>
//                     <p>Year: {{ podcast.description }}</p>
//                     <p>Genre: {{ podcast.genres }}</p>
//                     <p>imDB rating: {{ podcast.imDbRating }}</p>
//                 </div>
//             </div>
//         </div> 
//     </section>`,


//     data() {
//         return {
//             podcasts: [],
//         };
//     },

    
//     mounted() {
//         this.fetchpodcasts();
//     },

//     methods: {

//         fetchpodcasts() {
//             console.log("fetchpodcasts");
//             var requestOptions = {
//                 method: 'GET',
//                 redirect: 'follow'
//             };

//             fetch('https://imdb-api.com/API/AdvancedSearch/k_xq3uunx4?title_type=podcast_series,podcast_episode&release_date=1923-01-01,2023-01-01', requestOptions)
//                 .then(response => response.json())
//                 .then(data => {
//                     this.podcasts = data;
//                     console.log(data);
//                 })
//                 .catch(error => console.log('error', error));
//         },

//     }
// }


