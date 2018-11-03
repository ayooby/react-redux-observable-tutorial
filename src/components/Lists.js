import React from 'react'
import PropTypes from 'prop-types'

const Lists = ({lists}) => (
  <ul>
    {lists.map((list, i) =>
      <li key={i}>{list.title}</li>
    )}
  </ul>
)

Lists.propTypes = {
  lists: PropTypes.array.isRequired
}

export default Lists
