module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //To DO: Add the patterns and their corresponding functions
    this.add('role:ProductDescp,cmd:DisplayURL', getProductURL);
    this.add('role:ProductDescp,cmd:DisplayName', getProductName);

    //To DO: add the pattern functions and describe the logic inside the function

    function getProductName(msg, respond){
        if(msg.productId){
            var res = mockData.find(function(product){
                if(product.product_id == msg.productId){
                    return product
                }
            })
            respond(null, {result: res.product_name});
        } else {
            respond(null, {result: ''});
        }
    }

    function getProductURL(msg, respond){
        if(msg.productId){
            var res = mockData.find(function(product){
                if(product.product_id == msg.productId){
                    return product
                }
            })
            respond(null, {result: res.product_url});
        } else {
            respond(null, {result: ''});
        }
    }
}