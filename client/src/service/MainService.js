export const TruncateText30 = (text) => {
    const introtext = text.split(' ').slice(0, 25).join(' ')
    return introtext;
}