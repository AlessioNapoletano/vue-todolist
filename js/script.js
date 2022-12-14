const { createApp } = Vue;

createApp({
    data() {
        return {
            newItem: "",
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
            this.shopListItem.splice(index, 1)
        },

        addItem(item) {
            this.shopListItem.push({item: item, done: false});
            console.log(this.shopListItem)
        },

        deleteAllItem() {
            this.shopListItem.splice(0, this.shopListItem.length);
        }
    }
}).mount("#app")