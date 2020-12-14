import React from "react";
import PropTypes from "prop-types";
import s from "./ContactItem.module.css";

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <p className={s.text}>
        {name}: {number}
        <button className={s.button} type="button" onClick={onDeleteContact}>
          Delete
        </button>
      </p>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
