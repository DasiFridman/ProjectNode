const Meeting = require('../Models/meetingModel');

class MeetingService {
    static async getMeeting() {
        try {
            return await Meeting.find({});
        } catch (error) {
            throw new Error(`Unable to find meetings: ${error.message}`);
        }
    }

    static async getMeetingByOrderNum(orderNumber) {
        try {
            return await Meeting.findById(orderNumber);
        } catch (error) {
            throw new Error(`Unable to find meeting: ${error.message}`);
        }
    }

    static async createMeeting(meetingData) {
        try {
            const newMeeting = new Meeting(meetingData);
            return await newMeeting.save();
        } catch (error) {
            throw new Error(`Unable to create meeting: ${error.message}`);
        }
    }

    static async updateMeeting(orderNumber, meetingData) {
        try {
            return await Meeting.findByIdAndUpdate(orderNumber, meetingData, { new: true });
        } catch (error) {
            throw new Error(`Unable to update meeting: ${error.message}`);
        }
    }

    static async deleteMeeting(orderNumber) {
        try {
            return await Meeting.findByIdAndDelete(orderNumber);
        } catch (error) {
            throw new Error(`Unable to delete meeting: ${error.message}`);
        }
    }
}

module.exports = MeetingService;
