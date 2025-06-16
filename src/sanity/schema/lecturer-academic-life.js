// file: schemas/lecturer-academics.js

import { defineType, defineField } from 'sanity';

export default lecturerAcademicLife = defineType({
  name: 'lecturer-academics',
  title: 'Lecturer Academics',
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
      name: 'course',
      title: 'Course',
      type: 'string',
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
    }),
    defineField({
      name: 'programme',
      title: 'Programme',
      type: 'string',
    }),
    defineField({
      name: 'officeRoom',
      title: 'Office Room',
      type: 'string',
    }),
    defineField({
      name: 'assignedStudents',
      title: 'Assigned Students',
      type: 'array',
      of: [
        defineType({
          name: 'student',
          type: 'object',
          fields: [
            defineField({
              name: 'studentIndexNo',
              title: 'Student Index Number',
              type: 'string',
            }),
            defineField({
              name: 'studentFirstname',
              title: 'Student First Name',
              type: 'string',
            }),
            defineField({
              name: 'studentLastname',
              title: 'Student Last Name',
              type: 'string',
            }),
            defineField({
              name: 'studentInstitutionalEmail',
              title: 'Student Institutional Email',
              type: 'string',
            }),
            defineField({
              name: 'studentProgramme',
              title: 'Student Programme',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'score',
      title: 'Score',
      type: 'number',
    }),
    defineField({
      name: 'attendance',
      title: 'Attendance',
      type: 'number',
    }),
    defineField({
      name: 'rate',
      title: 'Rate',
      type: 'number',
    }),
  ],
});
