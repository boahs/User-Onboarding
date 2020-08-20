import React from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
  background: #1b262c;
  border-style: outset;
  border-width: 8px;
  color: #fdcb9e;
`;

function User({ details }) {
  if (!details) {
    return <h3> working on fetching your userlist details...</h3>;
  }

  return (
    <div className="user Container">
      <StyledDiv>
        <h2>{details.username}</h2>
        <p>Email: {details.email}</p>
        <p>Password: {details.password}</p>
      </StyledDiv>

      {!!details.checkbox && details.checkbox.length && (
        <div>
          Terms of service:
          <ul>
            {details.checkbox.map((like, idx) => (
              <li key={idx}>{like}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default User;
