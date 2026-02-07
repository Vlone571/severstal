import { useState } from "react";
import "../styles/addPatient.css";

const AddPatient = ({ onClose, onSave }) => {
  const [petName, setPetName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [complaints, setComplaints] = useState("");
  const [treatment, setTreatment] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    //новый владелец
    const newOwner = {
      name: ownerName.trim(),
      phone: ownerPhone.trim()
    };
    // новый питомец
    const newPet = {
      name: petName.trim(),
      species: species.trim(),
      breed: breed.trim(),
      age: age ? Number(age) : null,
    };
    // новая запись
    const newMedicalRecord = {
      diagnosis: diagnosis.trim(),
      complaints: complaints.trim(),
      treatment: treatment.trim(),
    };
    // сохраняем данные
    if (onSave) {
      onSave({
        pet: newPet,
        owner: newOwner,
        medicalRecord: newMedicalRecord,
      });
    }
    if (onClose) onClose();
  };

  return (
    <div className="add-patient-modal">
      <form className="add-patient-card" onSubmit={handleSave}>
        <div>
          <h3>Данные питомца</h3>
          <label>
            Имя питомца
            <input
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="Введите имя питомца"
            />
          </label>
          <label>
            Вид
            <input
              type="text"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              placeholder="Собака/Кошка"
            />
          </label>
          <label>
            Порода
            <input
              type="text"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              placeholder="Введите породу"
            />
          </label>
          <label>
            Возраст
            <input
              type="number"
              min="0"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Возраст (лет)"
            />
          </label>
        </div>

        <div>
          <h3>Данные владельца</h3>
          <label>
            Имя владельца
            <input
              type="text"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="ФИО владельца"
            />
          </label>
          <label>
            Телефон
            <input
              type="tel"
              value={ownerPhone}
              onChange={(e) => setOwnerPhone(e.target.value)}
              placeholder="+7(999)999-99-99"
            />
          </label>
        </div>
        <div>
          <h3>Медицинская карта</h3>
          <label>
            Диагноз
            <input
              type="text"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              placeholder="Например: Аллергический дерматит"
            />
          </label>
          <label>
            Жалобы
            <input
              type="text"
              value={complaints}
              onChange={(e) => setComplaints(e.target.value)}
              placeholder="Например: Не ест, чешется"
            />
          </label>
          <label>
            Лечение
            <input
              type="text"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              placeholder="Например: Антигистаминные препараты"
            />
          </label>
        </div>

        <div className="actions">
          <button className="button" onClick={onClose}>
            Отмена
          </button>
          <button className="button">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;