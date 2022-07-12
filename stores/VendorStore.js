import {makeAutoObservable} from 'mobx';
class VendorStore {
    vendorName = '';
    vendorId = '';
    constructor() {
        makeAutoObservable(this);
    }
}

const vendorStore = new VendorStore();
export default vendorStore;