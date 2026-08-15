import MemberAction from "./MemberAction";

export default function MemberDetail({ name, role, onjoin }) {
  return (
    <div>
      <h5>Name: {name}</h5>
      <h5>rollno: {role}</h5>
      <MemberAction onjoin={onjoin} />
    </div>
  );
}
