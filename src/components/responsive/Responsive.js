import withSizes from 'react-sizes'
import PropTypes from 'prop-types'
import {mapSizesToProps} from "../../utils/sizes";

const enhance = withSizes(mapSizesToProps)

export const DesktopOnly = enhance(({ children, isDesktop = true }) =>
    isDesktop ? children : null
)

DesktopOnly.propTypes = {
    children: PropTypes.node.isRequired
}

export const MobileOnly = enhance(({ children, isDesktop = false }) =>
    isDesktop ? null : children
)

MobileOnly.propTypes = {
    children: PropTypes.node.isRequired
}
