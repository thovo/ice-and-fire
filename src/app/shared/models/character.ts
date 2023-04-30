export type Character = {
    url: string;
    name: string;
    gender: 'Male' | 'Female';
    culture: string;
    born: string;
    died: string;
    titles: string[];
    aliases: string[];
    father: string;
    mother: string;
    spouse: string;
    allegiances: string[];
    books: string[];
    povBooks: string[];
    tvSeries: string[];
    playedBy: string[]
};

export type CharactersFilterConfig = {
    name: string | undefined,
    gender: string | undefined,
    culture: string | undefined,
    born: string | undefined,
    died: string | undefined,
    isAlive: boolean | null | undefined
};