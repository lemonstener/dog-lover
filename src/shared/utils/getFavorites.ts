export const getFavorites = () => JSON.parse(localStorage.getItem('userFavorites') ?? '');