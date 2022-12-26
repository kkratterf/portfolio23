import { AuthStoreOptions, Image, Reference, Slug } from "sanity";

type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Project extends Base {
  client: Client;
  body: Block[];
  category: Category;
  team: Team;
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  featured: boolean;
  visible: boolean;
  order: number;
  realizedAt: Date;
}

interface Client extends Base {
  name: string;
  slug: Slug;
}

interface Award extends Base {
  title: string;
  brand: string;
  date: string;
  description: text;
}

interface Certification extends Base {
  title: string;
  school: string;
  date: string;
  description: text;
}

interface Education extends Base {
  title: string;
  school: string;
  fromto: string;
  description: text;
}

interface Experience extends Base {
  role: string;
  brand: string;
  fromto: string;
  description: text;
}

interface Number {
  _type: "number";
  current: number;
}

interface Image {
  _type: "image";
  asset:  Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    description: string;
    title: string;
}

interface Team extends Base {
  name: string;
  slug: Slug;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}