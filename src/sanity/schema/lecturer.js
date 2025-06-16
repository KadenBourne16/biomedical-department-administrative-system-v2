import { defineType, defineField } from 'sanity';

export const lecturer=  defineType({
  name: 'lecturer',
  title: 'Lecturer',
  type: 'document',
  fields: [
    defineField({
      name: 'firstname',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'middlename',
      title: 'Middle Name',
      type: 'string',
    }),
    defineField({
      name: 'lastname',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Male', value: 'male' },
          { title: 'Female', value: 'female' },
        ],
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'institutional_email',
      title: 'Institutional Email',
      type: 'string',
    }),
    defineField({
      name: 'date_of_birth',
      title: 'Date of Birth',
      type: 'date',
    }),
    defineField({
      name: 'qualification_type',
      title: 'Qualification Type',
      type: 'string',
      options: {
        list: [
          { title: 'Masters', value: 'masters' },
          { title: 'PhD', value: 'phd' },
        ],
      },
    }),
    defineField({
      name: 'year_of_study',
      title: 'Year of Study',
      type: 'string',
    }),
    defineField({
      name: 'year_of_completion',
      title: 'Year of Completion',
      type: 'string',
    }),
    defineField({
      name: 'professional_qualification',
      title: 'Professional Qualification',
      type: 'string',
    }),
    defineField({
      name: 'professional_affiliation',
      title: 'Professional Affiliation',
      type: 'string',
    }),
    defineField({
      name: 'education_level',
      title: 'Education Level',
      type: 'string',
    }),
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string',
    }),
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'string',
    }),
    defineField({
      name: 'duties',
      title: 'Duties',
      type: 'string',
    }),
    defineField({
      name: 'research_areas',
      title: 'Research Areas',
      type: 'string',
    }),
    defineField({
      name: 'current_research_area',
      title: 'Current Research Area',
      type: 'string',
    }),
    defineField({
      name: 'research_collaborations',
      title: 'Research Collaborations',
      type: 'string',
    }),
    defineField({
      name: 'courses_taught',
      title: 'Courses Taught',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'course_year',
      title: 'Course Year',
      type: 'string',
    }),
    defineField({
      name: 'programs',
      title: 'Programs',
      type: 'string',
    }),
    defineField({
      name: 'department_role',
      title: 'Department Role',
      type: 'string',
    }),
    defineField({
      name: 'department_role_year',
      title: 'Department Role Year',
      type: 'string',
    }),
    defineField({
      name: 'external_institutions',
      title: 'External Institutions',
      type: 'string',
    }),
    defineField({
      name: 'external_institutions_nature',
      title: 'External Institutions Nature',
      type: 'string',
    }),
    defineField({
      name: 'external_industry',
      title: 'External Industry',
      type: 'string',
    }),
    defineField({
      name: 'external_industry_nature',
      title: 'External Industry Nature',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'firstname',
      subtitle: 'lastname',
    },
    prepare({ title, subtitle }) {
      return {
        title: title ? `${title} ${subtitle || ''}`.trim() : 'No name',
      };
    },
  },
});