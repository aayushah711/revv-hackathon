const app = require('express')();
const razorpay = require('razorpay');

try {
	app.post('/razorpay', async (req, res) => {
		const payment_capture = 1;
		const amount = 500;
		const currency = 'INR';

		const options = {
			amount: (amount * 100).toString(),
			currency,
			receipt: Date.now(),
			payment_capture
		};
		console.log(razorpay.orders);
		const response = await razorpay.orders.create(options, function(err, order) {
			console.log(order);
		});
		console.log(response);
		res.send('ok');
	});
} catch (error) {
	console.log(error);
}

app.listen(8080, () => {
	console.log('Listening on 8080');
});
