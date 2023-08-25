import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeEmploymentFields {
  employer: EntryFieldTypes.Symbol;
  from: EntryFieldTypes.Date;
  to?: EntryFieldTypes.Date;
  position: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
  skills?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
  description_rich: EntryFieldTypes.RichText;
}

export type TypeEmploymentSkeleton = EntrySkeletonType<TypeEmploymentFields, "employment">;
export type TypeEmployment<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeEmploymentSkeleton,
  Modifiers,
  Locales
>;
