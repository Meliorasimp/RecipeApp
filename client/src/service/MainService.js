export const TruncateText = (text = '', wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
};

export const scrollToId = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

export const hasConsecutive = (body) => /<p>\s*<\/p>\s*<p>\s*<\/p>/.test(body);

