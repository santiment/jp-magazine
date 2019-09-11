import React from 'react'
import PropTypes from 'prop-types'


export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} style={{'height': '100%'}}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} style={{'height': '100%'}}>
        {props.preBodyComponents}
        <noscript key='noscript' id='gatsby-noscript'>
          This app works best with JavaScript enabled.
        </noscript>
        <div id="dd-modal">
          <template id="dd-template">
            <div className="dd">
              <div className="dd__list"></div>
              <div className="dd__arrow"></div>
              <div className="dd__bg"></div>
            </div>
          </template>
        </div>
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
