import SingleUser from './TheSingleUserComponent.js';

export default {
    name: 'TheAllUsersComponent',

    template:`
    <section class="user-panel">
        <h2>Who's using Roku?</h2>

        <section> 
            <ul>
                <li>
                    <user v-for="user in users" :user="user"></user>
                </li>
            </ul>
        </section>
    </section>
    `,

    created(){
        // console.log('all component is mounted');
        // this is where you should do all of your data retrieval
        fetch('/ums/users')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                //  push our users into our vue data object so we can render a component for each user
                this.users=data;
            })
        .catch(error => console.error(error));
    },

    data() {
        return{
            users: []
        }

    },

    components: {
        user: SingleUser
    }
}