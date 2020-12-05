import React from "react";

function clickMe() {
  alert("You clicked me!");
}
function deleteMe() {
  alert("would you like to delete?");
}
function currentMe() {
  alert("Redirecting to current guests information");
}
export default function ReservationHome() {
  return (
    <div>
      <tr>
        <td>
          <a href="/addreservation">
            <button onClick={clickMe}>Add Reservation</button>
          </a>
          <br />
          <br />

          <a href="/deletereservation">
            <button onClick={deleteMe}>Delete Reservation</button>
          </a>
          <br />
          <br />

          <a href="/current">
            <button onClick={currentMe}>Current Reservation</button>
          </a>
        </td>
      </tr>
    </div>
  );
}
