export const TruncateText30 = (text) => {
    const introtext = text.split(' ').slice(0, 25).join(' ')
    return introtext;
}

    export const scrollToId = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    }

