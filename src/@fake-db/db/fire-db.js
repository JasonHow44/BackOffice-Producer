import _ from '@lodash';
import mock from '../mock';
import { db, realDb } from './firebase';

const eCommerceDB = {
	entrys: []
};
var belongTo = sessionStorage.getItem('@BELONGTO')

mock.onGet('/api/fire-entry/products').reply(() => new Promise((resolve, reject) => {
	var starCountRef = realDb.ref(`Sales/${belongTo}/FireEntries/`);
	starCountRef.on('value', snapshot => {
		const data = snapshot.val();
		

		Object.keys(data).map(item => {
			eCommerceDB.entrys.push(data[item])
		});
		console.log(eCommerceDB.entrys)
		resolve(eCommerceDB.entrys);
	})
	
}));

mock.onPost('/api/fire-entry/remove-products').reply(request => {
	const { productIds } = JSON.parse(request.data);
	eCommerceDB.entrys = eCommerceDB.entrys.filter(product => !productIds.includes(product.id));
	return [200, productIds];
});

mock.onGet('/api/fire-entry/product').reply(request => {
	const { productId } = request.params;
	const response = _.find(eCommerceDB.entrys, { id: productId });
	return [200, response];
});

mock.onPost('/api/fire-entry/product/save').reply(async request => {
	const data = JSON.parse(request.data);
	let product = null;
	const uid = sessionStorage.getItem('@UID')
	eCommerceDB.entrys = eCommerceDB.entrys.map(_product => {
		if (_product.id === data.id) {
			product = data;
			return product;
		}
		return _product;
	});

	if (!product) {
		product = data;
		eCommerceDB.entrys = [...eCommerceDB.entrys, product];
	}

	realDb.ref(`Sales/${belongTo}/FireEntries/${uid}/${data.id}`).set({
		...data
	});

	return [200, product];
});
