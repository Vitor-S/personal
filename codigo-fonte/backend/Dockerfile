# Use a imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código do backend para o contêiner
COPY . .

# Exponha a porta na qual o servidor vai rodar (ajuste conforme necessário)
EXPOSE 3333

# Comando para iniciar o servidor
CMD ["npm", "start"]
