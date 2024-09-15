export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: require('../assets/images/car1.jpg'),
                alt: 'Car 1',
                title: 'Car 1'
            },
            {
                itemImageSrc: require('../assets/images/car2.jpg'),
                alt: 'Car 2',
                title: 'Car 2'
            },
            {
                itemImageSrc: require('../assets/images/car3.jpg'),
                alt: 'Car 3',
                title: 'Car 3'
            },
            {
                itemImageSrc: require('../assets/images/car1.jpg'),
                alt: 'Car 1',
                title: 'Car 1'
            },
            {
                itemImageSrc: require('../assets/images/car2.jpg'),
                alt: 'Car 2',
                title: 'Car 2'
            },
            {
                itemImageSrc: require('../assets/images/car3.jpg'),
                alt: 'Car 3',
                title: 'Car 3'
            },
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

