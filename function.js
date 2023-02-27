const axios = require('axios');
const config = require('./config/poshmark.js');

async function fetchPoshmarkQuery(query, department) {
    try {
        let allData = [];

        const options = {
            query_and_facet_filter: {
                department: department,
            },
            query: query,
            facets: config.facets,
            experience: config.experience,
            sizeSystem: config.sizeSystem,
            count: config.count,
        };

        const filters = {
            department: department,
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
        };

        const maxCalls = 1;
        let numCalls = 0; // initialize the number of API calls made
        let nextMaxId = 1;

        while (nextMaxId && numCalls < maxCalls) {
            const request = {
                filters: filters,
                ...options,
                max_id: nextMaxId,
            };
            const url = `https://poshmark.com/vm-rest/posts?request=${JSON.stringify(request)}&summarize=true&pm_version=233.0.0`;
            console.log(url); // Output the URL to the console
            console.log('URL:', url);
            const response = await axios.get(url);
            const data = response.data;

            // Append the results to the allData array
            allData = allData.concat(data.data);

            // Get the next max_id value for pagination
            nextMaxId = data.more.next_max_id;

            numCalls++;
        }

        // Return the entire JSON object
        return {
            allData };
    } catch (error) {
        console.error
        (error);
        return null;
    }
}

// Export the functions
module.exports = {
    fetchPoshmarkQuery: fetchPoshmarkQuery
};