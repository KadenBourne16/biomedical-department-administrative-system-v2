import { defineType, defineField } from 'sanity'

export const news = defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
    defineField({
      name: 'from',
      title: 'From',
      type: 'string',
    }),
    defineField({
      name: 'to',
      title: 'To',
      type: 'string',
      options: {
        list: ['All', 'Students', 'Staff', 'Department'], // optional list
      },
    }),
    defineField({
      name: 'posted_date',
      title: 'Posted Date',
      type: 'date',
    }),
    defineField({
      name: 'expire',
      title: 'Expiry Date',
      type: 'date',
    }),
  ],
})
