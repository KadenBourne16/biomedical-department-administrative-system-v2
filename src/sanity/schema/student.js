import { defineType, defineField } from 'sanity'

export const student = defineType({
  name: 'student',
  title: 'Student',
  type: 'document',
  fields: [
    defineField({
      name: 'imageField',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
        crop: true
      },
      storeOriginalFilename: true
    }),
    defineField({
      name: "indexNo",
      title: "Index Number",
      type: "string"
    }),
    defineField({
      name: "entryMode",
      title: "Entry Mode",
      type: "string"
    }),
    defineField({
      name: "entryLevel",
      title: "Entry Level",
      type: "string"
    }),
    defineField({
      name: "currentLevel",
      title: "Current Level",
      type: "string"
    }),
    defineField({
      name: "program",
      title: "Program",
      type: "string"
    }),
    defineField({
      name: "dateOfAdmission",
      title: "Date of Admission",
      type: "date"
    }),
    defineField({
      name: "dateOfCompletion",
      title: "Date of Completion",
      type: "date"
    }),
    defineField({
      name: "residence",
      title: "Residence",
      type: "string"
    }),
    defineField({
      name: "prefix",
      title: "Prefix",
      type: "string"
    }),
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string"
    }),
    defineField({
      name: "middleName",
      title: "Middle Name",
      type: "string"
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string"
    }),
    defineField({
      name: "gender",
      title: "Gender",
      type: "string"
    }),
    defineField({
      name: "dateOfBirth",
      title: "Date of Birth",
      type: "date"
    }),
    defineField({
      name: "placeOfBirth",
      title: "Place of Birth",
      type: "string"
    }),
    defineField({
      name: "nationality",
      title: "Nationality",
      type: "string"
    }),
    defineField({
      name: "hometown",
      title: "Hometown",
      type: "string"
    }),
    defineField({
      name: "cityOfBirth",
      title: "City of Birth",
      type: "string"
    }),
    defineField({
      name: "mobileNumber",
      title: "Mobile Number",
      type: "string"
    }),
    defineField({
      name: "institutionalEmail",
      title: "Institutional Email",
      type: "string"
    }),
    defineField({
      name: "personalEmail",
      title: "Personal Email",
      type: "string"
    }),
    defineField({
      name: "addressLine",
      title: "Address Line",
      type: "string"
    }),
    defineField({
      name: "addressLine2",
      title: "Address Line 2",
      type: "string"
    }),
    defineField({
      name: "maritalStatus",
      title: "Marital Status",
      type: "string"
    }),
    defineField({
      name: "religion",
      title: "Religion",
      type: "string"
    })
  ]
})
