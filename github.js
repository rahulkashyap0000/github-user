class Github {
    constructor() {
        this.client_id = "639a817f6df3068ebc9e";
        this.client_secret = "b45719eebd4f17c08882cbe984362a99fe761337";
    }
    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
        );

        const profile = await profileResponse.json();

        return {
            profile
        };
    }
}