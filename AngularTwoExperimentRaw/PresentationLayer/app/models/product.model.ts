﻿

export class Product {
    constructor(
        public productId: number,
        public productName: string,
        public productCode: number,
        public releaseDate: Date,
        public description: string,
        public price: number,
        public starRating: number,
        public imageUrl: string
    //           "productId": 1,
    //"productName": "Leaf Rake",
    //"productCode": "GDN-0011",
    //"releaseDate": "March 19, 2016",
    //"description": "Leaf rake with 48-inch wooden handle.",
    //"price": 19.95,
    //"starRating": 3.2,
    //"imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    ) {

    }
}