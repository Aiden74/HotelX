import React from "react";

function clickMe() {
  alert("Directing to Reservation Page!");
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
          <a href="/reservation">
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
