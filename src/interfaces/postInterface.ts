export interface post {
    userId?: number,
    id?: number,
    title?: string,
    body?: string
}

export interface postResponse {
    posts: post[],
    post?: post,
    isLoading: boolean
}