import College from "../model/collegeModel.js";

export const RegisterCollege = async (req, res) => {
    try {
        const address = { city: req.body.city, state: req.body.region, postalCode: req.body.postalCode };
        const course = req.body.course.split(",");
        const programs = req.body.programs.split(",");
        const workMode = [];
        if(req.body.Remote=='on') workMode.push("Remote");
        if(req.body.Onsite=='on') workMode.push("Onsite");
        if(req.body.Hybrid=='on') workMode.push("Hybrid");

        const {
            collegeName,
            contactingName,
            contactNumber,
            contactingEmail,
            availableJobs,
            comments,
        } = req.body;

        const newCollege = new College(
            {
                collegeName,
                address,
                course,
                programs,
                contactingName,
                contactNumber,
                contactingEmail,
                availableJobs,
                workMode,
                comments,
            }
        );

        const savedCollege = await newCollege.save();

        return res.status(201).json({
            success: true,
            message: "College data saved successfully",
        });
    } catch (error) {
        // console.error("Error saving college data:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
}