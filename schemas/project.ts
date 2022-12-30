import {defineField, defineType} from 'sanity'

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "reference",
      to: { type: "client" },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
    }),
    defineField({
      name: "team",
      title: "Team",
      type: "reference",
      to: { type: "team" },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
    }),
    defineField({
      name: "visible",
      title: "Visible",
      type: "boolean",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
    defineField({
      name: "realizedAt",
      title: "Realized at",
      type: "date",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      client: "client.name",
      media: "mainImage",
      visible: "visible"
    },
    prepare(selection) {
      const { client, } = selection;
      return {
        ...selection,
        subtitle: client && `for ${client}`
      };
    },
  },
});
