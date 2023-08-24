import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSkillFields {
  title: EntryFieldTypes.Symbol;
  favourite: EntryFieldTypes.Boolean;
}

export type TypeSkillSkeleton = EntrySkeletonType<TypeSkillFields, "skill">;
export type TypeSkill<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeSkillSkeleton,
  Modifiers,
  Locales
>;
