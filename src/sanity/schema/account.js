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
            name: "password",
            title: "Password",
            type:"string"
        })
    ]
})