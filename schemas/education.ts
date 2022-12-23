import {defineField, defineType} from 'sanity'

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "school",
      title: "School",
      type: "string",
    }),
    defineField({
      name: "fromto",
      title: "From to",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],

  preview: {
    select: {
      title: "title",
      school: "school",
    },
    prepare(selection) {
      const { school } = selection;
      return { ...selection, subtitle: school && `at ${school}` };
    },
  },
});
