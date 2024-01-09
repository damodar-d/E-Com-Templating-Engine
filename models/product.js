const products =[];
exports.product = class Product{
    constructor(title,price,description){
        this.title = title;
        this.price = price;
        this.description = description;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        this.products;
    }
}