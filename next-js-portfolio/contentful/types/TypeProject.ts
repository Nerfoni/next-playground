import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProjectFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  githubLink?: EntryFieldTypes.Symbol;
  websiteLink?: EntryFieldTypes.Symbol;
}

export type TypeProjectSkeleton = EntrySkeletonType<TypeProjectFields, "project">;
export type TypeProject<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeProjectSkeleton,
  Modifiers,
  Locales
>;
