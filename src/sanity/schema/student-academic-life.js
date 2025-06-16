import { defineType, defineField } from 'sanity'

export const studentacademiclife = defineType({
  name: 'student_academic_life',
  title: 'Student Academic Life',
  type: 'document',
  fields: [
    defineField({
      name: 'index_number',
      title: 'Index Number',
      type: 'string',
    }),
    defineField({
      name: 'first_name',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'middle_name',
      title: 'Middle Name',
      type: 'string',
    }),
    defineField({
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'institutional_email',
      title: 'Institutional Email',
      type: 'string',
    }),
    defineField({
      name: 'programme',
      title: 'Programme',
      type: 'string',
    }),
    defineField({
      name: 'gpa',
      title: 'GPA',
      type: 'string',
    }),
    defineField({
      name: 'cgpa',
      title: 'CGPA',
      type: 'string',
    }),
    defineField({
      name: 'grade',
      title: 'Grade',
      type: 'string',
    }),
    defineField({
      name: 'course_history',
      title: 'Course History',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'course_code', title: 'Course Code', type: 'string' },
            { name: 'course_name', title: 'Course Name', type: 'string' },
            { name: 'course_Lecturer', title: 'Course Lecturer', type: 'string' },
            { name: 'level', title: 'Level', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'current_courses',
      title: 'Current Courses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'course_code', title: 'Course Code', type: 'string' },
            { name: 'course_name', title: 'Course Name', type: 'string' },
            { name: 'course_Lecturer', title: 'Course Lecturer', type: 'string' },
            { name: 'level', title: 'Level', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'assigned_lecturer_email',
      title: 'Assigned Lecturer Email',
      type: 'string',
    }),
    defineField({
      name: 'performance_rating',
      title: 'Performance Rating',
      type: 'string',
    }),
    defineField({
      name: 'attendance_rate',
      title: 'Attendance Rate',
      type: 'string',
    }),
  ],
})
