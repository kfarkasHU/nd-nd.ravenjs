class DemoDescriptorStash {
    static _descriptors = [];
    static getDescriptors = function() {
        return DemoDescriptorStash._descriptors;
    }
    static addDescriptor = function(descriptor) {
        DemoDescriptorStash._descriptors.push(descriptor);
    }
    
};

module.exports = DemoDescriptorStash;
