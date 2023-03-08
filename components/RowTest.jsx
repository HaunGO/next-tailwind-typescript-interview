import React, { useState, useEffect, useRef } from 'react';

const RowTest = (props) => {
  const [name, setName] = useState(props.name);
  const nameField = useRef(null);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    var len = nameField.current.value.length || 1;
    nameField.current.setAttribute('size', len);
  }, [name]);

  return (
    <>
      <div>
        <input
          className="px-0"
          type="text"
          size="2"
          defaultValue={name}
          onChange={onNameChange}
          // value={name}
          ref={nameField}
        />
      </div>
    </>
  );
};

export default RowTest;
