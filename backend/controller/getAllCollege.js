import College from "../model/collegeModel.js";

export const getAllColleges = async (req, res) => {
    try {
        const { WorkMode } = req.query;
        let response
        if (WorkMode) {
            response = await College.find(WorkMode);
        }
        else { response = await College.find({}); }
        // console.log(response);
        return res.status(200).json({
            success: true,
            data: response,
        });
    } catch (error) {
        console.error("Error saving college data:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}