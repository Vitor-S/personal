# Use uma imagem base com Node.js
FROM node:18

# Instale dependências necessárias para Android
RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    curl \
    unzip \
    git \
    && apt-get clean

# Configure variáveis de ambiente para o Android SDK
ENV ANDROID_HOME=/root/android-sdk
ENV PATH=$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$PATH

# Baixe e instale o Android SDK Command-line Tools
RUN mkdir -p $ANDROID_HOME/cmdline-tools \
    && curl -o sdk-tools.zip https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip \
    && unzip sdk-tools.zip -d $ANDROID_HOME/cmdline-tools \
    && mv $ANDROID_HOME/cmdline-tools/cmdline-tools $ANDROID_HOME/cmdline-tools/latest \
    && rm sdk-tools.zip

# Aceite as licenças do Android SDK e instale as ferramentas necessárias
RUN yes | $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --licenses \
    && $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "platform-tools" "platforms;android-33" "build-tools;33.0.0"

# Crie e defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e instale as dependências
COPY package.json yarn.lock ./
RUN yarn install

# Copie os arquivos do projeto para o contêiner
COPY . .

# Exponha a porta para o Metro Bundler
EXPOSE 8081

# Comando padrão para iniciar o Metro Bundler
CMD ["yarn", "start"]
