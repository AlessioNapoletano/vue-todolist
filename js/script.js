const { createApp } = Vue;

createApp({
    data() {
        return {
            shopListItem:
                [
                    {
                        item: "Crema Viso",
                        done: false
                    },
                    {
                        item: "Detergente",
                        done: false
                    },
                    {
                        item: "Lacca per capelli",
                        done: false
                    },
                    {
                        item: "Sapone di marsiglia",
                        done: false
                    },
                    {
                        item: "Shampoo Secco",
                        done: false
                    },
                    {
                        item: "Borotalco",
                        done: false
                    },
                    {
                        item: "Spazzolino",
                        done: false
                    },
                    {
                        item: "Struccante",
                        done: false
                    },
                ]
        }
    },

    methods: {
        deleteItem(index) {
            console.log(this.shopListItem[0])
            this.shopListItem.splice(index, 1)
        }
    }
}).mount("#app")