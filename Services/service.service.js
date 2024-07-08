const Service = require('../Models/serviceModel');

class ServiceService {
    static async getServices() {
        try {
            return await Service.find({});
        } catch (error) {
            throw new Error(`Unable to find service: ${error.message}`);
        }
    }

    static async getService(id) {
        try {
            return await Service.findById(id);
        } catch (error) {
            throw new Error(`Unable to find service: ${error.message}`);
        }
    }

    static async createService(newService_) {
        try {
            const newService = new Service(newService_);
            return await newService.save();
        } catch (error) {
            throw new Error(`Unable to create new service: ${error.message}`);
        }
    }

    static async updateService(updateService) {
        try {
            return await Service.findByIdAndUpdate(updateService, { new: true });
        } catch (error) {
            throw new Error(`Unable to update service: ${error.message}`);
        }
    }

    static async delete(id) {
        try {
            return await Service.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(`Unable to delete service: ${error.message}`);
        }
    }
}

module.exports = ServiceService;
