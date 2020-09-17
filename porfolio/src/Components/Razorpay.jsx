import React from 'react';

function loadRazorPay() {
	return new Promise((resolve) => {
		const script = document.createElement('script');
		script.src = 'https://checkout.razorpay.com/v1/checkout.js';
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
}

const Razorpay = () => {
	async function displayRazorpay() {
		const res = await loadRazorPay('https://checkout.razorpay.com/v1/checkout.js');
		if (!res) {
			alert("Didn't work");
			return;
		}

		const data = await fetch('http://localhost:8080/razorpay', { method: 'POST' }).then((t) => t.json);

		console.log(data);
		const options = {
			key: 'rzp_test_TejC4Y0BVHfWr3', // Enter the Key ID generated from the Dashboard
			amount: '50000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
			currency: 'INR',
			name: 'Top Talented Tutorials',
			description: 'Thank you for nothing.',
			image: 'https://cdn.svgporn.com/logos/t3.svg',
			order_id: 'order_9A33XWu170gUtm', //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
			handler: function(response) {
				alert(response.razorpay_payment_id);
				alert(response.razorpay_order_id);
				alert(response.razorpay_signature);
			},
			prefill: {
				name: 'Gaurav Kumar',
				email: 'gaurav.kumar@example.com',
				contact: '9999999999'
			},
			notes: {
				address: 'Razorpay Corporate Office'
			},
			theme: {
				color: '#F37254'
			}
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}

	return <button onClick={displayRazorpay}>Donate $5</button>;
};

export default Razorpay;
