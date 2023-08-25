import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeEducationFields {
  school: EntryFieldTypes.Symbol;
  degree: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
  from: EntryFieldTypes.Date;
  to?: EntryFieldTypes.Date;
}

export type TypeEducationSkeleton = EntrySkeletonType<TypeEducationFields, "education">;
export type TypeEducation<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeEducationSkeleton,
  Modifiers,
  Locales
>;
