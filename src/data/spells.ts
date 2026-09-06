export type SpellId =
  "lumos" | "nox" | "expelliarmus" | "wingardium-leviosa" | "alohomora" | "finite";

export type Spell = {
  id: SpellId;
  name: string;
  pronunciation: string;
  type: string;
  incantationEffect: string;
  description: string;
  onThisPage: string;
};

export const spells: Spell[] = [
  {
    id: "lumos",
    name: "Lumos",
    pronunciation: "LOO-mos",
    type: "Charm",
    incantationEffect: "Wand-Lighting Charm",
    description:
      "Ignites a small ball of light at the wand tip — the first spell every student learns for dark corridors and darker staircases.",
    onThisPage: "Bathes the castle in warm golden light for a few moments.",
  },
  {
    id: "nox",
    name: "Nox",
    pronunciation: "NOKS",
    type: "Charm",
    incantationEffect: "Wand-Extinguishing Charm",
    description:
      "The counter-charm to Lumos. Snuffs the wandlight out, returning the world to midnight.",
    onThisPage: "Deepens the night across the whole page.",
  },
  {
    id: "expelliarmus",
    name: "Expelliarmus",
    pronunciation: "eks-PEL-ee-AR-mus",
    type: "Charm",
    incantationEffect: "Disarming Charm",
    description:
      "Knocks whatever an opponent is holding clean out of their grasp. A duellist's signature move.",
    onThisPage: "Jolts every card on the page as if struck by the spell.",
  },
  {
    id: "wingardium-leviosa",
    name: "Wingardium Leviosa",
    pronunciation: "win-GAR-dee-um levi-O-sa",
    type: "Charm",
    incantationEffect: "Levitation Charm",
    description:
      "Makes objects rise and hover. It's Levi-O-sa, not Leviosa — the swish and flick matters.",
    onThisPage: "Lifts the cards into a gentle float.",
  },
  {
    id: "alohomora",
    name: "Alohomora",
    pronunciation: "ah-LOH-ho-MOR-ah",
    type: "Charm",
    incantationEffect: "Unlocking Charm",
    description:
      "Unfastens locks, latches and stubborn doors — provided they aren't sealed by stronger magic.",
    onThisPage: "Sets every golden border glowing as the page unlocks.",
  },
  {
    id: "finite",
    name: "Finite Incantatem",
    pronunciation: "fi-NEE-tay in-can-TAH-tem",
    type: "Counter-spell",
    incantationEffect: "General Counter-Spell",
    description: "Ends spell effects currently in play. Useful when the mischief goes too far.",
    onThisPage: "Clears every active enchantment and restores the page.",
  },
];
