import { IImage } from "./image";

export interface ICoinData {
    additional_notices: string[];
    asset_platform_id: null;
    block_time_in_minutes: number;
    categories: string[];
    coingecko_rank: number;
    coingecko_score: number;
    community_data: any;
    community_score: number;
    country_origin: string;
    description: any;
    detail_platforms: any;
    developer_data: any;
    developer_score: number;
    genesis_date: string;
    hashing_algorithm: string;
    ico_data: any;
    id: string;
    image: IImage;
    last_updated: string;
    links: any;
    liquidity_score: number;
    localization: any;
    market_cap_rank: number;
    market_data: any;
    name: string;
    platforms: any;
    public_interest_score: number;
    public_interest_stats: any;
    public_notice: null;
    sentiment_votes_down_percentage: number;
    sentiment_votes_up_percentage: number;
    status_updates: any;
    symbol: "eth";
    tickers: string;
}