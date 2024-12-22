export const TruncateText30 = (text) => {
    const introtext = text.split(' ').slice(0, 30).join(' ')
    return introtext;
}