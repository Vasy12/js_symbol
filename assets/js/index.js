'use strict';

class List {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    [Symbol.iterator]() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    const value = current.value;
                    current = current.next;
                    return {
                        value: value,
                        done: false,
                    }
                } else {
                    return {
                        done: true,
                    }
                }
            }
        }
    }

    add(value) {
        const newItem = new ListItem(value);
        newItem.prev = this.tail;
        if (this.tail) {
            this.tail.next = newItem;
        }

        if (!this.head) {
            this.head = newItem;
        }
        this.tail = newItem;
        this.size++;
    }

    insert() {

    }

    delete() {

    }
}


class ListItem {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


const list = new List();

list.add(
    {
        name: "Vasy"
    }
);
list.add(
    {
        name: "Svetlana"
    }
);
list.add(
    {
        name: "Dima"
    }
);
list.add(
    {
        name: "Sasha"
    }
);
list.add(
    {
        name: 'Masha'
    }
);
list.add(
    {
        name: "Irina"
    }
);
list.add(
    {
        name: "Dasha"
    }
);
list.add(
    {
        name: "Igor",
    }
);


const arr1 = [4, 5, 4, 54, 54, 87, 85, 52, 145, 78, 5];
const arr2 = ["asf", "asf", "asf", "asf", "asf", 54, 87, 85, 52, 145, 78, 5];


const result = [...arr1, ...arr2];

const listToArrayResult = [...list];


const movies = {

    action: [
        'Мстители',
        "Крепкий орешек",
        "The fast and the furious",
    ],
    drama: [
        "Белый Бим черное ухо",
        "Пианист",

    ],
    fantasy: [
        "Властелин колец",
        "Гарри Потер",
    ],


    [Symbol.iterator]() {

        const movies = [this.action, this.drama, this.fantasy];
        let genreIndex = 0;
        let movieIndex = 0;


        return {


            next() {

                if (movieIndex === movies[genreIndex].length) {
                    ++genreIndex;
                    movieIndex = 0;
                }

                if(movies.length === genreIndex ){
                    return {
                        done: true
                    }
                }else{
                return {
                    value: movies[genreIndex][movieIndex++],
                    done: false,
                }
                }
            }

        }

    }

};





