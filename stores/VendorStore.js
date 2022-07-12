import {makeAutoObservable} from 'mobx';
class VendorStore {
    constructor() {
        makeAutoObservable(this);
    }
}

const vendorStore = new VendorStore();
export default vendorStore;