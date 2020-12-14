import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

import ContactItem from "./ContactItem";

const ContactList = ({ names, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {names.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  names: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ContactList;
