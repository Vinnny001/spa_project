import { useEffect, useState } from "react";

export default function ManageServices() {

  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", description: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    setServices(JSON.parse(localStorage.getItem("services")) || []);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ADD OR UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();

    let updated;

    if (editId !== null) {
      updated = services.map(s =>
        s.id === editId ? { ...form, id: editId } : s
      );
    } else {
      updated = [...services, { ...form, id: Date.now() }];
    }

    setServices(updated);
    localStorage.setItem("services", JSON.stringify(updated));

    setForm({ name: "", price: "", description: "" });
    setEditId(null);
  };

  // DELETE
  const handleDelete = (id) => {
    const updated = services.filter(s => s.id !== id);
    setServices(updated);
    localStorage.setItem("services", JSON.stringify(updated));
  };

  // EDIT
  const handleEdit = (service) => {
    setForm(service);
    setEditId(service.id);
  };

  return (
    <div className="admin-page">

      <h1>💆‍♀️ Manage Services</h1>

      {/* FORM */}
      <form className="admin-form" onSubmit={handleSubmit}>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Service name"
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
        />

        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <button>
          {editId ? "Update" : "Add"}
        </button>

      </form>

      {/* LIST */}
      <div className="service-list">

        {services.map(s => (
          <div className="service-item" key={s.id}>

            <div>
              <h3>{s.name}</h3>
              <p>{s.description}</p>
              <span>KES {s.price}</span>
            </div>

            <div className="service-actions">

              <button onClick={() => handleEdit(s)}>
                Edit
              </button>

              <button onClick={() => handleDelete(s.id)}>
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}