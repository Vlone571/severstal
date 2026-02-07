import "../styles/PatientCard.css"
const PatientCard = ({ pet, owner, onOpenCard, onDelete }) => {
  return (
    <li>
      <div className="card">
        <div>
          <p className="card-info-title">Владелец:{owner.name}</p>
          <p className="card-info-vocation">Питомец: {pet.name} </p>
          <p className="card-info-experience">Возраст: {pet.age}</p>
        </div>
        <div className="card-info-action">
          <button className="button button--color" onClick={() => onDelete && onDelete(pet.id)}>Удалить</button>
          <button className="button" onClick={() => onOpenCard(pet.id)}>Мед карта</button>
        </div>
      </div>
    </li>
  );
};
export default PatientCard;