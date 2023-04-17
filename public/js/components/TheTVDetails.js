const apiKey = 'k_xq3uunx4';

export default {
    name: 'TheTVDetailComponent',

    template:`
    <h2>The tv details</h2>
        <section>
            <img :src="tv.image" :alt="tv.title">
            <p>{{ tv.plot }}</p>
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
    }

}