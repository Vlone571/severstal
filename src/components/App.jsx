import { useState } from "react"
import PatientCard from "./PatientCard"
import MedicalCard from "./MedicalCard"
import AddPatient from "./addPatient"
import "../styles/main.css"
// Заготовленные данные
const App = () => {
  const [selectedPetId, setSelectedPetId] = useState(null);
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [owners, setOwners] = useState([
    { id: 1, name: "Линников Даниил Александрович", phone: "+7(988)831-59-82" },
    { id: 2, name: "Иванов Иван", phone: "+132142142" }
  ])
  const [pets, setPets] = useState([
    { id: 101, name: "Корги", species: "Собака", breed: "Пемброк-корги", ownerId: 1, age: 4 },
    { id: 102, name: "Барсик", species: "Кот", breed: "Мейн-кун", ownerId: 2, age: 3 },
    { id: 103, name: "Мурка", species: "Кошка", breed: "Сиамская", ownerId: 2, age: 4 }
  ])
  const [medicalRecords, setMedicalRecords] = useState([
    {
      id: 1,
      petId: 101,
      diagnosis: "Аллергический дерматит",
      complaints: "Не ест, выглядит плохо",
      treatment: "Укол антигистамина в клинике"
    },
    {
      id: 2,
      petId: 102,
      diagnosis: "Аллергический дерматит",
      complaints: "Не ест, выглядит плохо",
      treatment: "Укол антигистамина в клинике"
    },
    {
      id: 3,
      petId: 103,
      diagnosis: "Аллергический дерматит",
      complaints: "Не ест, выглядит плохо",
      treatment: "Укол антигистамина в клинике"
    }
  ])
  const openMedicalCard = (id) => {
    setSelectedPetId(id)
  }
  const openAddPatient = () => setShowAddPatient(true);
  const closeAddPatient = () => setShowAddPatient(false);
  const closeMedicalCard = () => {
    setSelectedPetId(null);
  }
  // поиск нужные объектов массивов
  const selectedPet = selectedPetId ? pets.find(p => p.id === selectedPetId) : null;
  const selectedOwner = selectedPet ? owners.find(o => o.id === selectedPet.ownerId) : null;
  const selectedRecords = selectedPetId ? medicalRecords.find(rec => rec.petId === selectedPetId) : null;

  const handleSave = ({ pet: petData, owner: ownerData, medicalRecord }) => {
    // генерируем новые ID
    const newOwnerId = owners.length > 0 ? Math.max(...owners.map(o => o.id)) + 1 : 1;
    const newPetId = pets.length > 0 ? Math.max(...pets.map(p => p.id)) + 1 : 101;
    const newRecId = medicalRecords.length > 0 ? Math.max(...medicalRecords.map(r => r.id)) + 1 : 1;

    // добавляем владельца
    const newOwner = {
      id: newOwnerId,
      name: ownerData.name || "Без имени",
      phone: ownerData.phone || ""
    };
    setOwners(prev => [...prev, newOwner]);

    // добавляем питомца
    const newPet = {
      id: newPetId,
      name: petData.name || "Без имени",
      species: petData.species || "",
      breed: petData.breed || "",
      age: petData.age ? Number(petData.age) : null,
      ownerId: newOwnerId
    };
    setPets(prev => [...prev, newPet]);

    // добавляем медзапись 
    if (medicalRecord) {
      const newRecord = {
        id: newRecId,
        petId: newPetId,
        diagnosis: medicalRecord.diagnosis || "",
        complaints: medicalRecord.complaints || "",
        treatment: medicalRecord.treatment || ""
      };
      setMedicalRecords(prev => [...prev, newRecord]);
    }

    closeAddPatient();
  };

  const handleDelete = (petId) => {
    const petToDelete = pets.find(p => p.id === petId);
    if (!petToDelete) return;
    setPets(prev => prev.filter(p => p.id !== petId));
    setMedicalRecords(prev => prev.filter(r => r.petId !== petId));
    if (selectedPetId === petId) setSelectedPetId(null);
  }
  return (
    <div className="module">
      {selectedPetId && selectedPet && selectedOwner && (
        <MedicalCard
          pet={selectedPet}
          owner={selectedOwner}
          records={selectedRecords}
          onClose={closeMedicalCard}
        />
      )}
      <div className="header">
        <h1>Список пациентов</h1>
        <button className="button" onClick={openAddPatient}>Новый Пациент</button>
      </div>
      {showAddPatient && (
        <AddPatient onClose={closeAddPatient} onSave={handleSave} />
      )}
      <ul className="list">
        {pets.map(pet => {
          const owner = owners.find(o => o.id === pet.ownerId);
          return (
            <PatientCard
              key={pet.id}
              pet={pet}
              owner={owner}
              onOpenCard={openMedicalCard}
              onDelete={handleDelete}
            />
          );
        })}

      </ul>
    </div>
  )
}
export default App