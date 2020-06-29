import BaseApi from './BaseApi';

export default class ProductsApi extends BaseApi {

    list = async () => {
        try {
            let urlBase = this.makeUrl('v1', 'products');
            let result = await this.get(urlBase);
            return result;
        } catch (error) {
            console.error(error);
        }
    }


    getById = async (productsId) => {
        try {
            let urlBase = this.makeUrl('v1', 'products' ,'/' + productsId);
            // console.log(urlBase);
            let result = await this.get(urlBase);
            // console.log(result);
            return result;
        } catch (error) {
            console.log(error);
        }
    }


}
