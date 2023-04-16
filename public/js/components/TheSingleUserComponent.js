export default {
    name: 'TheUserComponent',

    props: ['user'],

    template: `
    <div @click="navToHomePage" class="card rounded userpanel">
        <div class="card-body text-center">
            <img :src='"images/" + user.avatar' class="rounded-circle img-fluid">
            <p>{{user.username}}</p>
        </div>
    </div>`,

    methods: {
        navToHomePage() {
            console.log('this user has this access level:', this.user.permissions);

            // let targetHome = '';
            // every user has permissions as a part of their data (this is come from the database)
            // it's sat in the permissions column/permissions field
            // we can use that data to figure out what home page they should have acess to its like a rating
            // if the access level is less than 3, then they're not an adult and shouldn't see the adult homepage.

            // if it is greater than 3 then they get access to everything because they are an adult.

            // if(this.user.permissions < 4) {
            //     targetHome = 'kidshome';
            // } else {
            //     targetHome = 'home'
            // }

            let targetHome = (this.user.permissions < 4) ? "kidshome" : "home";

            this.$router.push({ name: targetHome });
            // debugger;
        }
    }
}