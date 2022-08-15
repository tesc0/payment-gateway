# payment-gateway
payment gateway simulator

NodeJS with Express and Handlebars

Routes:

/payment

This will generate a form, based on the url parameters:
paramsToProvide = {
    itemName,
    price,
    quantity,
    unit,
    sum,
    code,
    successUrl,
    currency,
    company
}

/demo

This will show the form but with prepopulated data

The rest of the routes are automatically called or just follow the process
/processing
/payment-processor

/yay

There's a 33% chance that the redirected route will be the failed one and 66% chance of success.
