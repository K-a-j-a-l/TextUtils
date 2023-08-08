import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return ( <
        nav className = "mx-5 py-4 my-5  bg-purple-700 text-white" >
        <
        div className = "flow-root" >
        <
        div className = "float-left" >
        <
        ul className = "flex" >
        <
        li className = "mx-2 cursor-pointer" > { props.title } < /li>  <
        li className = "mx-2 cursor-pointer" > About < /li>  <
        li className = "mx-2 cursor-pointer" > Contact < /li> <
        /ul> <
        /div> <
        div className = "float-right" >
        <
        button className = "px-8 bg-black  text-white font-bold py-2 rounded" >
        Enable Dark Mode <
        /button> <
        /div> <
        /div>



        <
        /nav>
    )
}
Navbar.propTypes = { title: PropTypes.string.isRequired }
Navbar.defaultProps = { title: 'Set title here' }