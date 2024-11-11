# Usar una imagen base de Node.js
FROM node:18

# Crear y establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el package.json y package-lock.json (si existen) para instalar dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación al contenedor
COPY . .

# Exponer el puerto que usará la aplicación (3000)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
