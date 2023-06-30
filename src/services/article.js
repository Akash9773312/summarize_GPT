import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
        url: 'https://time.com/6266679/musk-ai-open-letter/',
        length: '3'
    },
    headers: {
        'X-RapidAPI-Key': 'db7a69e2a1mshca43a566bc982f8p1350e6jsnb38f3924d284',
        'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
};

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize'
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => 'test'
        })
    })
});