export default {
    name: 'TheAllUsersComponent',

    created() {
        // get all of our users from the database - everyone with a profile
        // connected to the roku

        // we would then render a profile panel for each user using a subcomponent
        // inside of this main component
    },

    template: `
    <section>
        <h1> This is the all users component </h1>
        <p> Render a panel for every user in the database</p>
    </section>
    `
}