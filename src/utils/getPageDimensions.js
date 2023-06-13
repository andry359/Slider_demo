export const getPageDimensions = (innerX, innerY) => {

    let coefficient = (innerX / innerY);

    if (Number(coefficient.toFixed(1)) === 1.8) {
        return 'width: 100%'
    } else if (Number(coefficient.toFixed(1)) === 1.6) {
        return 'height: 100%'
    } else if (Number(coefficient.toFixed(1)) === 1.3) {
        return 'height: 100%'
    } else {
        return 'width: 100%'
    }
};