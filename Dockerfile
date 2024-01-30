# Определяем базовый образ
FROM node:latest

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости проекта с помощью yarn
RUN yarn install

# Копируем исходный код проекта в контейнер
COPY . .

# Собираем приложение для продакшена
RUN yarn build

# Запускаем сервер разработки
CMD ["yarn", "dev"]
