const apiConfig = {
    baseurl: 'https://api.themoviedb.org/3/',
    apikey: '19692131d63a4a333f88e09f4de5fe8a',
    originalImages: (imgpath) => `https://image.tmdb.org/t/p/original/${imgpath}`,
    w500Images: (imgpath) => `https://image.tmdb.org/t/p/w500/${imgpath}`
}

export default apiConfig;