import "../styles/MedicalCard.css"
const MedicalCard = ({ pet, owner, records, onClose }) => {
  return (
    // Медицинская карта
    <div className="medical-card-module">
      <div className="medical-card-header">
        <h1>Карточка пациент</h1>
        <button onClick={onClose} className="button-close">Закрыть</button>
      </div>
      <div className="medical-card-info">
        <h2 className="medical-card-title">Информация о владельце</h2>
        <div className="medical-card-list">
          <p className="medical-card-text">Владелец: {owner.name}</p>
          <p className="medical-card-text">Телефон: {owner.phone}</p>
        </div>
        <h2 className="medical-card-title">Пациент</h2>
        <div className="medical-card-list">
          <p className="medical-card-text">Имя:{pet.name}</p>
          <p className="medical-card-text">Порода:{pet.breed}</p>
          <p className="medical-card-text">Возраст:{pet.age}</p>
          <p className="medical-card-text">Пол: {pet.species}</p>
        </div>
        <h2 className="medical-card-title">Обращение</h2>
        <div className="medical-card-list medical-card-list--column">
          <p className="medical-card-text">Причина обращения: {records.complaints}</p>
          <p className="medical-card-text">Диагноз: {records.diagnosis}</p>
          <p className="medical-card-text">Лечение: {records.treatment}</p>
        </div>
      </div>
    </div>
  )
}
export default MedicalCard