import { defineType, defineField } from "sanity";

export const admin = defineType({
    name: 'admin',
    title: 'Admin',
    type: 'document',
    fields: [
        defineField({
            name: "doc_name",
            type: 'string',
            title: "Document Name",
            hiddden: true,
            initialValue: (doc) => doc.firstname + " " + doc.lastname
        }),
        defineField({
            name: "firstname",
            type: 'string',
            title: "First Name",
        }),
        defineField({
            name: "lastname",
            type: 'string',
            title: 'Last Name'
        }),
        defineField({
            name: "privilledge",
            type: "string",
            title: "Privilledge"
        }),
        defineField({
            name: "phone_number",
            type: "string",
            title: "Phone Number"
        }),
        defineField({
            name: "email",
            type: "string",
            title: "email"
        }),
    ]
})