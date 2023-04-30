export type House = {
    url: string;
    name: string;
    region: string;
    coatOfArms: string;
    words: string;
    titles: string[];
    seats: string[];
    currentLord: string;
    heir: string;
    overlord: string;
    founded: string;
    founder: string;
    diedOut: string;
    ancestralWeapons: string[];
    cadetBranches: string[];
    swornMembers: string[]
}

export type HousesFilterConfig = {
    name: string | undefined,
    region: string | undefined,
    words: string | undefined,
    hasWords: boolean | null | undefined,
    hasTitles: boolean | null | undefined,
    hasSeats: boolean | null | undefined,
    hasDiedOut: boolean | null | undefined,
    hasAncestralWeapons: boolean | null | undefined
};