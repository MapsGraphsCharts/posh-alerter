// config.js

module.exports = {
    filters: {
            department: 'Men',
        category: '',
        sub_category: '',
        brand: ['lululemon athletica'],
        size: {
            include: ['L']
        },
        price_amount_range: [{
            min: {
                val: '5',
                currency_code: 'USD'
            },
            max: {
                val: '200',
                currency_code: 'USD'
            }
        }],
        color: ['Black'],
        inventory_status: ['available']
    },
    query_and_facet_filter: {
        department: "Men",
    },
    query: '',
    facets: ['brand', 'color', 'category_v2'],
    experience: 'all',
    sizeSystem: 'us',
    count: '48',
};

