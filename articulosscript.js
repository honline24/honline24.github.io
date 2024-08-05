function filterArticles(category) {
    const articles = document.querySelectorAll('.article');
    const buttons = document.querySelectorAll('.filter-buttons button');
    
    buttons.forEach(button => button.classList.remove('active'));
    if (category === 'all') {
        articles.forEach(article => article.style.display = 'block');
        document.querySelector('button[onclick="filterArticles(\'all\')"]').classList.add('active');
    } else {
        articles.forEach(article => {
            if (article.getAttribute('data-category') === category) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
        document.querySelector(`button[onclick="filterArticles('${category}')"]`).classList.add('active');
    }
}
