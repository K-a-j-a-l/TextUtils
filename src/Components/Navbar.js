import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return ( <
        nav className = "mx-5 py-4 my-5  bg-purple-700 text-white" >
        <
        ul className = "flex" >
        <
        li className = "mx-2 cursor-pointer" > { props.title } < /li>  <
        li className = "mx-2 cursor-pointer" > About < /li>  <
        li className = "mx-2 cursor-pointer" > Contact < /li> <
        /ul> <
        /nav>
    )
}
Navbar.propTypes = { title: PropTypes.string.isRequired }
Navbar.defaultProps = { title: 'Set title here' }