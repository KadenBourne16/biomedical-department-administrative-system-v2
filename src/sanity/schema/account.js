import {defineType, defineField} from 'sanity'

export const account = defineType({
  name: "account",
  title: "Account",
  type: "document",
  fields:[
    defineField({
      name: "email",
      title: "Email",
      type: "email"
    }),
    defineField({
      name: "sub_id",
      title: "Sub ID",
      type: "string"
    }),
    defineField({
      name: "password",
      title: "Password",
      type:"string"
    }),
    defineField({
      name: "account_type",
      title: "Account Type",
      type: "string"
    }),
    defineField({
      name: "blocked",
      title: "Blocked",
      type: "boolean",
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'email',
    },
  },
})
