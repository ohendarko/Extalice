import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import "../styles/fourofour.css";

const NotFoundPage = ({ message = "Page Not Found", submessage = "This page does not exist" }) => {
  return (
    <section className="page-four">
      <FaExclamationTriangle className='exclamation-triangle' />
      <h1 className="four-text-one">{message}</h1>
      <p className="four-text-two">{submessage}</p>
      <Link
        to="/"
        className="go-back"
      >Head Home
      </Link>
    </section>
  )
}

export default NotFoundPage