const { model, Schema } = require('mongoose');

const postSchema = new Schema(
    {
        image: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        age: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        user_state: {
            type: String,
            required: true,
        },
        zipcode: {
            type: String,
            required: true,
        },
        hobby: {
            type: String,
            required: true,
        },
        school_name: {
            type: String,
            required: true,
        },
        subject_name: {
            type: String,
            required: true,
        },
        passing_year: {
            type: String,
            required: true,
        },
        school_aggregate: {
            type: String,
            required: true,
        },
        college_name: {
            type: String,
            required: true,
        },
        college_course: {
            type: String,
            required: true,
        },
        college_branch: {
            type: String,
            required: true,
        },
        college_passing_year: {
            type: String,
            required: true,
        },
        college_aggregate: {
            type: String,
            required: true,
        },
        Degree_college_name: {
            type: String,
            required: true,
        },
        Degree_college_course: {
            type: String,
            required: true,
        },
        Degree_college_branch: {
            type: String,
            required: true,
        },
        Degree_college_passing_year: {
            type: String,
            required: true,
        },
        Degree_college_aggregate: {
            type: String,
            required: true,
        },
        Instiute_name: {
            type: String,
            required: true,
        },
        Instiute_course: {
            type: String,
            required: true,
        },
        Instiute_branch: {
            type: String,
            required: true,
        },
        Instiute_passing_year: {
            type: String,
            required: true,
        },
        Instiute_aggregate: {
            type: String,
            required: true,
        },
        first_project_name: {
            type: String,
            required: true,
        },
        first_project_start_date: {
            type: String,
            required: true,
        },
        first_project_end_date: {
            type: String,
            required: true,
        },
        first_project_desription: {
            type: String,
            required: true,
        },
        first_project_key_technologies: {
            type: String,
            required: true,
        },
        second_project_name: {
            type: String,
            required: true,
        },
        second_project_start_date: {
            type: String,
            required: true,
        },
        second_project_end_date: {
            type: String,
            required: true,
        },
        second_project_desription: {
            type: String,
            required: true,
        },
        second_project_key_technologies: {
            type: String,
            required: true,
        },
        third_project_name: {
            type: String,
            required: true,
        },
        third_project_start_date: {
            type: String,
            required: true,
        },
        third_project_end_date: {
            type: String,
            required: true,
        },
        third_project_desription: {
            type: String,
            required: true,
        },
        third_project_key_technologies: {
            type: String,
            required: true,
        },
        fourth_project_name: {
            type: String,
            required: true,
        },
        fourth_project_start_date: {
            type: String,
            required: true,
        },
        fourth_project_end_date: {
            type: String,
            required: true,
        },
        fourth_project_desription: {
            type: String,
            required: true,
        },
        fourth_project_key_technologies: {
            type: String,
            required: true,
        },
        skill_1: {
            type: String,
            required: true,
        },
        skill_1_percentage: {
            type: String,
            required: true,
        },
        skill_2: {
            type: String,
            required: true,
        },
        skill_2_percentage: {
            type: String,
            required: true,
        },
        skill_3: {
            type: String,
            required: true,
        },
        skill_3_percentage: {
            type: String,
            required: true,
        },
        skill_4: {
            type: String,
            required: true,
        },
        skill_4_percentage: {
            type: String,
            required: true,
        },
        skill_5: {
            type: String,
            required: true,
        },
        skill_5_percentage: {
            type: String,
            required: true,
        },
        skill_6: {
            type: String,
            required: true,
        },
        skill_6_percentage: {
            type: String,
            required: true,
        },
        skill_7: {
            type: String,
            required: true,
        },
        skill_7_percentage: {
            type: String,
            required: true,
        },
        skill_8: {
            type: String,
            required: true,
        },
        skill_8_percentage: {
            type: String,
            required: true,
        },
        userId: {
			type: Schema.Types.ObjectId,
			ref: 'user',
		},
    },
    { timestamps: true }
);
module.exports = model('user_profile', postSchema);
