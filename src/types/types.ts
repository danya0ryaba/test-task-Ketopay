type Multimedia = {
    rank: number,
    caption: string | null,
    credit: string | null,
    type: string,
    url: string,
    height: number,
    width: number,
    subType: string,
    crop_name: string,
    legacy: {
        xlarge?: string,
        xlargewidth?: number,
        xlargeheight?: number,
    }
}

type HeadlineType = {
    main: string
    kicker: string
    content_kicker: string | null
    print_headline: string
    name: string | null
    seo: string | null
    sub: string | null
}

type KeywordType = {
    name: string
    value: string
    rank: number
    major: string
}

type PersonType = {
    firstname: string
    middlename: string | null,
    lastname: string | null,
    qualifier: string | null,
    title: string | null,
    role: string,
    organization: string,
    rank: number
}

export type ArticleType = {
    abstract: string
    web_url: string
    snippet: string
    lead_paragraph: string
    print_section: string
    print_page: number
    source: string
    multimedia: Multimedia[]
    headline: HeadlineType
    keywords: KeywordType[]
    pub_date: string
    document_type: string
    news_desk: string
    section_name: string
    byline: {
        original: string
        person: PersonType[]
        organization: string | null
    }
    type_of_material: string
    _id: string
    word_count: number
    uri: string
}

export type ArticleStateType = {
    list: ArticleType[],
    isLoading: boolean
    error: string | null
}

export interface ResponseBodyType {
    copyright: string,
    response: {
        docs: ArticleType[]
    }
}