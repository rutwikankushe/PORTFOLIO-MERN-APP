const formidable = require('formidable');
const { uuid } = require('uuidv4');
const fs= require('fs');
const user_profile = require("../models/Post")
module.exports.createProfile = (req, res) => {
    const form = formidable({ multiples: true });
    form.parse(req, async (error, fields, files) => {
        const { 
            name,
            email,
            phone,
            age,
            address,
            city,
            user_state,
            zipcode,
            hobby,
            school_name,
            subject_name,
            passing_year,
            school_aggregate,
            college_name,
            college_course,
            college_branch,
            college_passing_year,
            college_aggregate,
            Degree_college_name,
            Degree_college_course,
            Degree_college_branch,
            Degree_college_passing_year,
            Degree_college_aggregate,
            Instiute_name,
            Instiute_course,
            Instiute_branch,
            Instiute_passing_year,
            Instiute_aggregate,
            first_project_name,
            first_project_start_date,
            first_project_end_date,
            first_project_desription,
            first_project_key_technologies,
            second_project_name,
            second_project_start_date,
            second_project_end_date,
            second_project_desription,
            second_project_key_technologies,
            third_project_name,
            third_project_start_date,
            third_project_end_date,
            third_project_desription,
            third_project_key_technologies,
            fourth_project_name,
            fourth_project_start_date,
            fourth_project_end_date,
            fourth_project_desription,
            fourth_project_key_technologies,
            skill_1,
            skill_1_percentage,
            skill_2,
            skill_2_percentage,
            skill_3,
            skill_3_percentage,
            skill_4,
            skill_4_percentage,
            skill_5,
            skill_5_percentage,
            skill_6,
            skill_6_percentage,
            skill_7,
            skill_7_percentage,
            skill_8,
            skill_8_percentage, user, id } = fields;
        const errors = [];
        
        if (name === '') {
            errors.push({ msg: 'name is required' })
        }
        if (email === '') {
            errors.push({ msg: 'email is required' })
        }
        if (phone === '') {
            errors.push({ msg: 'phone is required' })
        }
        if (age === '') {
            errors.push({ msg: 'age is required' })
        }
        if (address === '') {
            errors.push({ msg: 'address is required' })
        }
        if (city === '') {
            errors.push({ msg: 'city is required' })
        }
        if (user_state === '') {
            errors.push({ msg: 'state is required' })
        }
        if (zipcode === '') {
            errors.push({ msg: 'zipcode is required' })
        }
        if (hobby === '') {
            errors.push({ msg: 'hobby is required' })
        }
        if (school_name === '') {
            errors.push({ msg: 'school_name is required' })
        }
        if (subject_name === '') {
            errors.push({ msg: 'subject_name is required' })
        }
        if (passing_year === '') {
            errors.push({ msg: 'passing_year is required' })
        }
        if (school_aggregate === '') {
            errors.push({ msg: 'school_aggregate is required' })
        }
        if (college_name === '') {
            errors.push({ msg: 'college_name is required' })
        }
        if (college_course === '') {
            errors.push({ msg: 'college_course is required' })
        }
        if (college_branch === '') {
            errors.push({ msg: 'college_branch is required' })
        }
        if (college_passing_year === '') {
            errors.push({ msg: 'college_passing_year is required' })
        }
        if (college_aggregate === '') {
            errors.push({ msg: 'college_aggregate is required' })
        }
        if (Degree_college_name === '') {
            errors.push({ msg: 'Degree_college_name is required' })
        }
        if (Degree_college_course === '') {
            errors.push({ msg: 'Degree_college_course is required' })
        }
        if (Degree_college_branch === '') {
            errors.push({ msg: 'Degree_college_branch is required' })
        }
        if (Degree_college_passing_year === '') {
            errors.push({ msg: 'Degree_college_passing_year is required' })
        }
        if (Degree_college_aggregate === '') {
            errors.push({ msg: 'Degree_college_aggregate is required' })
        }
        if (Instiute_name === '') {
            errors.push({ msg: 'Instiute_name is required' })
        }
        if (Instiute_course === '') {
            errors.push({ msg: 'Instiute_course is required' })
        }
        if (Instiute_branch === '') {
            errors.push({ msg: 'Instiute_branch is required' })
        }
        if (Instiute_passing_year === '') {
            errors.push({ msg: 'Instiute_passing_year is required' })
        }
        if (Instiute_aggregate === '') {
            errors.push({ msg: 'Instiute_aggregate is required' })
        }
        if (first_project_name === '') {
            errors.push({ msg: 'first_project_name is required' })
        }
        if (first_project_start_date === '') {
            errors.push({ msg: 'first_project_start_date is required' })
        }
        if (first_project_end_date === '') {
            errors.push({ msg: 'first_project_end_date is required' })
        }
        if (first_project_desription === '') {
            errors.push({ msg: 'first_project_desription is required' })
        }
        if (first_project_key_technologies === '') {
            errors.push({ msg: 'first_project_key_technologies is required' })
        }
        if (second_project_name === '') {
            errors.push({ msg: 'second_project_name is required' })
        }
        if (second_project_start_date === '') {
            errors.push({ msg: 'second_project_start_date is required' })
        }
        if (second_project_end_date === '') {
            errors.push({ msg: 'second_project_end_date is required' })
        }
        if (second_project_desription === '') {
            errors.push({ msg: 'second_project_desription is required' })
        }
        if (second_project_key_technologies === '') {
            errors.push({ msg: 'second_project_key_technologies is required' })
        }
        if (third_project_name === '') {
            errors.push({ msg: 'third_project_name is required' })
        }
        if (third_project_start_date === '') {
            errors.push({ msg: 'third_project_start_date is required' })
        }
        if (third_project_end_date === '') {
            errors.push({ msg: 'third_project_end_date is required' })
        }
        if (third_project_desription === '') {
            errors.push({ msg: 'third_project_desription is required' })
        }
        if (third_project_key_technologies === '') {
            errors.push({ msg: 'third_project_key_technologies is required' })
        }
        if (fourth_project_name === '') {
            errors.push({ msg: 'fourth_project_name is required' })
        }
        if (fourth_project_start_date === '') {
            errors.push({ msg: 'fourth_project_start_date is required' })
        }
        if (fourth_project_end_date === '') {
            errors.push({ msg: 'fourth_project_end_date is required' })
        }
        if (fourth_project_desription === '') {
            errors.push({ msg: 'fourth_project_desription is required' })
        }
        if (fourth_project_key_technologies === '') {
            errors.push({ msg: 'fourth_project_key_technologies is required' })
        }
        if (skill_1 === '') {
            errors.push({ msg: 'skill_1 is required' })
        }
        if (skill_1_percentage === '') {
            errors.push({ msg: 'skill_1_percentage is required' })
        }
        if (skill_2 === '') {
            errors.push({ msg: 'skill_2 is required' })
        }
        if (skill_2_percentage === '') {
            errors.push({ msg: 'skill_2_percentage is required' })
        }
        if (skill_3 === '') {
            errors.push({ msg: 'skill_3 is required' })
        }
        if (skill_3_percentage === '') {
            errors.push({ msg: 'skill_3_percentage is required' })
        }
        if (skill_4 === '') {
            errors.push({ msg: 'skill_4 is required' })
        }
        if (skill_4_percentage === '') {
            errors.push({ msg: 'skill_4_percentage is required' })
        }
        if (skill_5 === '') {
            errors.push({ msg: 'skill_5 is required' })
        }
        if (skill_5_percentage === '') {
            errors.push({ msg: 'skill_5_percentage is required' })
        }
        if (skill_6 === '') {
            errors.push({ msg: 'skill_6 is required' })
        }
        if (skill_6_percentage === '') {
            errors.push({ msg: 'skill_6_percentage is required' })
        }
        if (skill_7 === '') {
            errors.push({ msg: 'skill_7 is required' })
        }
        if (skill_7_percentage === '') {
            errors.push({ msg: 'skill_7_percentage is required' })
        }
        if (skill_8 === '') {
            errors.push({ msg: 'skill_8 is required' })
        }
        if (skill_8_percentage === '') {
            errors.push({ msg: 'skill_8_percentage is required' })
        }
        if (Object.keys(files).length === 0) {
			errors.push({ msg: 'Image is required' });
		} else {
			const { type } = files.image;
			const split = type.split('/');
			const extension = split[1].toLowerCase();
			if (extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png') {
				errors.push({ msg: `${extension} is not a valid extension` });
			} else {
				files.image.name = uuid() + '.' + extension;
                const newPath = __dirname + `/../client/public/images/${files.image.name}`;
                fs.copyFile(files.image.path, newPath, async (error) => {
                    if (!error) {
                      try {
                          const response = await user_profile.create({
                            image : files.image.name ,
                            name,
                            email ,
                            phone,
                            age,
                            address ,
                            city ,
                            user_state ,
                            zipcode ,
                            hobby ,
                     school_name,
                     subject_name,
                     passing_year,
                     school_aggregate,
                     college_name,
                     college_course,
                     college_branch,
                     college_passing_year,
                     college_aggregate,
                     Degree_college_name,
                     Degree_college_course,
                     Degree_college_branch,
                     Degree_college_passing_year,
                     Degree_college_aggregate,
                     Instiute_name,
                     Instiute_course,
                     Instiute_branch,
                     Instiute_passing_year,
                     Instiute_aggregate,
                     first_project_name,
                     first_project_start_date,
                     first_project_end_date,
                     first_project_desription,
                     first_project_key_technologies,
                     second_project_name,
                     second_project_start_date,
                     second_project_end_date,
                     second_project_desription,
                     second_project_key_technologies,
                     third_project_name,
                     third_project_start_date,
                     third_project_end_date,
                     third_project_desription,
                     third_project_key_technologies,
                     fourth_project_name,
                     fourth_project_start_date,
                     fourth_project_end_date,
                     fourth_project_desription,
                     fourth_project_key_technologies,
                     skill_1,
                     skill_1_percentage,
                     skill_2,
                     skill_2_percentage,
                     skill_3,
                     skill_3_percentage,
                     skill_4,
                     skill_4_percentage,
                     skill_5,
                     skill_5_percentage,
                     skill_6,
                     skill_6_percentage,
                     skill_7,
                     skill_7_percentage,
                     skill_8,
                     skill_8_percentage,
                     userId : id,
                     
                     
                     
                          });
                          return res.status(200).json({msg: ' Your Profile Created Succesfully', response,} )
                          
                      } catch (error) {
                          
                        return res.status(500).json({errors: error, msg: error.message})
                          
                      }
                    }
                });
			}
		}
        if (errors.length !== 0) {
			return res.status(400).json({ errors, files });
		} 
    });
};

module.exports.fetchProfile = async (req,res) => {

    const id= req.params.id;
    try {
        const response =await user_profile.find({userId: id})
        return res.status(200).json({response: response});
    } catch (error) {
        return res.status(500).json({errors: error, msg: error.message});
    }

};
module.exports.fetchUserDetails = async(req,res) => {
    const id= req.params.id;
    try {
        const User_profile = await user_profile.findOne({userId: id});
        return res.status(200).json({ User_profile});
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({errors: error, msg: error.message});
    }
}