import {ProviderDictionary} from "shared/types/enum";

export type NewsItem = {
    provider: ProviderDictionary;
    category: string;
    createdAt: string;
    text: string;
    title: string;
    author: string;
}

