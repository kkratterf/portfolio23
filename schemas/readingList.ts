import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'readingList',
  title: 'Reading list',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
    }),
    defineField({
      name: 'strike',
      title: 'Strike',
      type: 'boolean',
    }),
  ],
});
