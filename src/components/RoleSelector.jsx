function RoleSelector({ setRole, setLevel }) {
  return (
    <div className="section">
      <label>Role</label>
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="QA Engineer">QA Engineer</option>
      </select>

      <label style={{ marginTop: "12px" }}>Experience Level</label>
      <select onChange={(e) => setLevel(e.target.value)}>
        <option value="">Select Level</option>
        <option value="Junior">Junior</option>
        <option value="Mid">Mid</option>
        <option value="Senior">Senior</option>
      </select>
    </div>
  );
}

export default RoleSelector;
