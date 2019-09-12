export const mapSizesToProps = ({ width }) => ({
    isDesktop: width > 991,
    isLaptop: width <= 1200 && width > 992,
    isTablet: width <= 992 && width > 768,
    isPhone: width <= 768
})