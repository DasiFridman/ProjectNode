const business = require('../Models/businessModel');

class businessService {
    static async getbusinesList() {
        try {
            return await business.find({});
        } catch (error) {
            throw new Error(`Unable to find business: ${error.message}`);
        }
    }

    static async getbusines(orderNumber) {
        try {
            return await business.findById(orderNumber);
        } catch (error) {
            throw new Error(`Unable to find business: ${error.message}`);
        }
    }

    static async addBusines(businessData) {
        try {
            const newbusiness = new business(businessData);
            return await newbusiness.save();
        } catch (error) {
            throw new Error(`Unable to create business: ${error.message}`);
        }
    }

    static async updatebusines(orderNumber,businessData) {
        try {
            return await business.findByIdAndUpdate(orderNumber, businessData, { new: true });
        } catch (error) {
            throw new Error(`Unable to update business: ${error.message}`);
        }
    }

    static async deletebusines(orderNumber) {
        try {
            return await business.findByIdAndDelete(orderNumber);
        } catch (error) {
            throw new Error(`Unable to delete business: ${error.message}`);
        }
    }
}

module.exports = businessService;
