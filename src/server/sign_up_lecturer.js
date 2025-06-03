"use server"
import passwordUtils from "@/app/utils/passwordEncrypter";
import { client } from "@/sanity/lib/client";

export const SignUpLecturer = async (data) => {
  // Assign "none" to any empty string values
  const formToSave = {};
  for (const key in data) {
    formToSave[key] = data[key] === "" ? "none" : data[key];
  }

  try {
    // Check if gmail or institutional email exists in lecturer schema
    const lecturerQuery = `*[_type == "lecturer" && (email == $email || institutional_email == $institutionalemail)][0]`;
    const existingLecturer = await client.fetch(lecturerQuery, {
      email: formToSave.Email,
      institutionalemail: formToSave.InstitutionalEmail,
    });

    if (existingLecturer) {
      return {
        type: "fail",
        success: false,
        message: "Lecturer with this Gmail or institutional email already exists",
      };
    }

    // Check if institutional email exists in account schema
    const accountQuery = `*[_type == "account" && institutional_email == $institutional_email][0]`;
    const existingAccount = await client.fetch(accountQuery, {
      institutional_email: formToSave.InstitutionalEmail,
    });

    if (existingAccount) {
      return {
        type: "fail",
        success: false,
        message: "Account with this institutional email already exists",
      };
    }

    // Prepare lecturer document (ensure field names match your schema)
    const newLecturerDocument = {
      _type: "lecturer",
      firstname: formToSave.Firstname,
      middlename: formToSave.middlename,
      lastname: formToSave.Lastname,
      gender: formToSave.Gender,
      email: formToSave.Email,
      institutional_email: formToSave.InstitutionalEmail,
      date_of_birth: formToSave.DateOfBirth,
      qualification_type: formToSave.QualificationType,
      year_of_study: formToSave.YearOfStudy,
      year_of_completion: formToSave.YearOfCompletion,
      professional_qualification: formToSave.ProfessionalQualification,
      professional_affiliation: formToSave.ProfessionalAffiliation,
      education_level: formToSave.educationEducationLevel_level,
      institution: formToSave.Institution,
      roles: formToSave.Roles,
      duties: formToSave.Duties,
      research_areas: formToSave.ResearchAreas,
      current_research_area: formToSave.CurrentResearchArea,
      research_collaborations: formToSave.ResearchCollaborations,
      courses_taught: formToSave.CoursesTaught,
      course_year: formToSave.CourseYear,
      programs: formToSave.Programs,
      department_role: formToSave.DepartmentRole,
      department_role_year: formToSave.DepartmentRoleYear,
      external_institutions: formToSave.ExternalInstitutions,
      external_institutions_nature: formToSave.ExternalInstitutionsNature,
      external_industry: formToSave.ExternalIndustry,
      external_industry_nature: formToSave.ExternalIndustryNature,
    };

    // Hash password
    const encryptedPassword = await passwordUtils.hashPassword(formToSave.password);

    // Prepare account document (ensure field names match your schema)
    const newAccount = {
      _type: "account",
      email: formToSave.InstitutionalEmail,
      sub_id: "None",
      password: encryptedPassword,
      account_type: "Lecturer",
    };

    // Save lecturer and account to Sanity
    const createdLecturer = await client.create(newLecturerDocument);
    const createdAccount = await client.create(newAccount);

    return {
      type: "success",
      success: true,
      message: "Lecturer and account created successfully",
      lecturer: createdLecturer,
      account: createdAccount,
    };
  } catch (err) {
    console.error("Error: ", err);
    return {
      type: "error",
      success: false,
      message: err.message || err,
    };
  }
};