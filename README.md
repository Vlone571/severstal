# Ветеринарная Клиника 

## Реализованные функции
- окно добавление нового пациента (питомца + владельца + первичная медзапись)
- Просмотр списка пациентов
- Открытие медицинской карточки
- Удаление пациента
### Схема БД

### Таблицы
- **owners** — владельцы (`id`, `name`, `phone`)
- **pets** — питомцы (`id`, `name`, `species`, `breed`, `age`, `owner_id (ВК)`)
- **medical_records** — медицинские записи (`id`, `pet_id(ВК)`, `diagnosis`, `complaints`, `treatment`)
### Связи
- Один владелец → много питомцев (1:N)
- Один питомец → много записей (1:N)

## Объектная модель
// Владелец
{ id: number, name: string, phone: string }

// Питомец
{ id: number, name: string, species: string, breed: string, age: number | null, ownerId: number }

// Медицинская запись
{ id: number, petId: number, diagnosis: string, complaints: string, treatment: string }
