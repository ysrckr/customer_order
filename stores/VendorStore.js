import {makeAutoObservable} from 'mobx';
class VendorStore {
    vendorName = '';
    constructor() {
        makeAutoObservable(this);
    }
}

const vendorStore = new VendorStore();
export default vendorStore;