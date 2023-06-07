import {defineField, defineType} from 'sanity'

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "brand",
      title: "Brand",
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
      title: "role",
      brand: "brand",
    },
    prepare(selection) {
      const { brand } = selection;
      return { ...selection, subtitle: brand && `at ${brand}` };
    },
  },
});
