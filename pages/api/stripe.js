const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY)
export default async function handler(req, res) {

  if (req.method === 'POST') {

    try {

      const params = {
        submit_type: 'pay',
        mode: 'payment',
        // payment_method_types: ['card'],
        // billing_address_collection: 'auto',
        // shipping_address_collection: {
        // allowed_countries: ['AU','FR','BE','BU','CR','CZ','DE','ES','FI','DK','HU','IL','IT','LU','NL','PU','CH','ES','SE']
        // },
        // customer_creation:'always',
        shipping_options: [
        { shipping_rate: 'shr_1Mg6C7EaaGtFLEjv5EfGKmIs' },
        ],
        line_items: req.body.content.map((item) => {
          // =======from javascriptMastery: ============
          // const img = item.image[0].asset._ref;
          // const newImage = img.replace('image-', 'https://cdn.sanity.io/images/projectID/production/').replace('-webp','.webp');

          return {
            price_data: {
              currency: 'eur',
              product_data: {
                name: item.name, // The product’s name, meant to be displayable to the customer.
                // description: item.description // The product’s description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
                // images:[newImage], // A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
              },
              unit_amount: item.price * 100, //in cents
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.qty
          }
        }),
        // [{
        //   // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        //   price: '{{PRICE_ID}}',
        //   quantity: 1,
        // }],

        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        // automatic_tax: { enabled: true },
      };

      // console.log(params)

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      // res.redirect(303, session.url);
      res.status(200).json(session)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}