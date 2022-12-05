import _ from '@lodash';
import mock from '../mock';
import { db, realDb } from './firebase';

const eCommerceDB = {
	entrys: []
};

var belongTo = sessionStorage.getItem('@BELONGTO');

mock.onGet('/api/e-commerce-app/products').reply(
	() =>
		new Promise((resolve, reject) => {
			var starCountRef = realDb.ref(`Sales/${belongTo}/Entries/`);
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();

				Object.keys(data).map(item => {
					eCommerceDB.entrys.push(data[item]);
				});
				console.log(eCommerceDB.entrys);
				resolve(eCommerceDB.entrys);
			});
		})
);

mock.onPost('/api/e-commerce-app/remove-products').reply(request => {
	const { productIds } = JSON.parse(request.data);
	eCommerceDB.entrys = eCommerceDB.entrys.filter(product => !productIds.includes(product.id));
	return [200, productIds];
});

mock.onGet('/api/e-commerce-app/product').reply(request => {
	const { productId } = request.params;
	const response = _.find(eCommerceDB.entrys, { id: productId });
	return [200, response];
});

mock.onPost('/api/e-commerce-app/product/save').reply(async request => {
	const data = JSON.parse(request.data);
	let product = null;
	const uid = sessionStorage.getItem('@UID');
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
	var year = new Date().getFullYear()

	
	data.map(item => {
		var id = Date.now();
		realDb.ref(`Sales/${year}/${item.belongTo}/${item.policyType[0]}/${item.uid}/${id}`).set({
			...item,
			sellerId: item.uid,
			id: id
		});
	});

	return [200, product];
});

mock.onPost('/api/e-commerce-app/product/multi-auto-save').reply(async request => {
	let data = JSON.parse(request.data);
	let product = null;
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
	data.map(item => {
		const id = Date.now();
		const year = new Date().getFullYear();
		item.sellerId = item.uid;
		console.log(`Sales/${year}/${item.belongTo}/${item.policyType[0]}/${item.uid}/${id}`);
		if (item.policyType[0] !== undefined)
			realDb.ref(`Sales/${year}/${item.belongTo}/${item.policyType[0]}/${item.uid}/${id}`).set({
				...item,
				id
			});
	});
	return [200, product];
});

mock.onPost('/api/e-commerce-app/product/update').reply(async request => {
	let data = JSON.parse(request.data);
	let product = null;
	let uid = sessionStorage.getItem('@UID');
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
	var year = new Date().getFullYear();

	data.map(item => {
		console.log(`Sales/${year}/${item.belongTo}/${item.policyType}/${item.uid}/${item.id}`);
		realDb.ref(`Sales/${year}/${item.belongTo}/${item.policyType}/${item.uid}/${item.id}`).set({
			...item,
			sellerId: item.uid
		});
	});

	return [200, product];
});
