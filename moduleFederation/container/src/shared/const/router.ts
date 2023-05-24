export enum AppRouters {
    MAIN = "main",
    FORBIDDEN = "forbidden",
    // last
    NOT_FOUND = "not_found"
}

export const getRouteMain = () => "/";
export const getRouteForbidden = () => "/forbidden";

// export const RoutePath: Record<AppRoutes, string> = {
//     [AppRoutes.MAIN]: '/',
//     [AppRoutes.FORBIDDEN]: '/forbidden',

//     [AppRoutes.NOT_FOUND]: '*',
// };

// const onBackToList = useCallback(() => {
//     navigate(RoutePath.articles);
// }, [navigate]);

// const onEdit = useCallback(() => {
//     navigate(`${RoutePath.details}${article?.id}/edit`);
// }, [article?.id, navigate]);

// export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;

// const onBackToList = useCallback(() => {
//     navigate(getRouteArticles());
// }, [navigate]);

// const onEditArticle = useCallback(() => {
//     if (article) {
//         navigate(getRouteArticleEdit(article.id));
//     }
// }, [article, navigate]);
