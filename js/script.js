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
            let found = false;
            this.shopListItem.forEach(element => {
                if (element.item === item) {
                    found = true;
                }
            });
            if(found === true) {
                alert("elemento presente nella lista, non verrà aggiunto")
                
            } else {
                this.shopListItem.push({ item: item, done: false });
            }
            this.newItem= "";
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