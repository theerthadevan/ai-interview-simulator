function RoleSelector({ setRole, setLevel }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Select Role</h3>

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">--Choose Role--</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="QA Engineer">QA Engineer</option>
      </select>

      <h3 style={{ marginTop: "10px" }}>Experience Level</h3>

      <select onChange={(e) => setLevel(e.target.value)}>
        <option value="">--Choose Level--</option>
        <option value="Junior">Junior</option>
        <option value="Mid">Mid</option>
        <option value="Senior">Senior</option>
      </select>
    </div>
  );
}

export default RoleSelector;
