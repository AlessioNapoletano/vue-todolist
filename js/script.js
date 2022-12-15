const { createApp } = Vue;

createApp({
    data() {
        return {
            found: false,
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
            this.found = false;
            if (item.length <= 1) {
                console.warn("inserisci qualcosa che abbia almneo 2 lettere")
            } else {
                this.shopListItem.forEach(element => {
                    if (element.item === item) {
                        this.found = true;
                    }
                });
                if (this.found === true) {
                    console.warn("elemento già presente nella lista")

                } else {
                    this.shopListItem.push({ item: item, done: false });
                }
            }

            this.newItem = "";
        },

        deleteAllItem() {
            this.shopListItem.splice(0, this.shopListItem.length);
        },

        lineTrough(index) {
            if (this.shopListItem[index].done === false) {
                this.shopListItem[index].done = true;
            } else {
                this.shopListItem[index].done = false;
            }
        }
    }
}).mount("#app")